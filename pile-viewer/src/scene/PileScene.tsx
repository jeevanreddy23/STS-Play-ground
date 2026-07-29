/**
 * The 3D scene. It consumes geometry that calc.ts has already worked out and
 * draws it — no engineering decisions are made in here, and no AI or document
 * parsing is reachable from this layer. If a value is unknown upstream, the
 * corresponding geometry simply is not drawn.
 */

import { useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Grid, Line, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { PileDesign, PileRecord, hasValue } from '../core/schema';
import {
  ComplianceVerdict,
  PileGeometry,
  compareToDesign,
  pileGeometry,
  rlToSceneY,
  socketCompliance,
} from '../core/calc';

export type ViewMode = 'overview' | 'pile' | 'design-vs-constructed';

export interface SceneProps {
  piles: PileRecord[];
  design: PileDesign[];
  datumRL: number;
  verticalExaggeration: number;
  mode: ViewMode;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  showGroundSurface: boolean;
  showRockSurface: boolean;
  showLabels: boolean;
}

const COLOUR = {
  shaft: '#d8d6cf',
  /** Socket proved adequate against a stated requirement. */
  socket: '#eb6834',
  /** Socket measured short of the requirement. */
  socketShort: '#d03b3b',
  /**
   * Socket exists but no requirement is on record. Deliberately a different,
   * desaturated colour: rendering an unassessed socket in the same orange as a
   * compliant one would read as a pass the data does not support.
   */
  socketUnknown: '#b0a08c',
  designGhost: '#2a78d6',
  ground: '#c9a08a',
  rock: '#8a8578',
  selected: '#2a78d6',
  toe: '#52514e',
} as const;

/**
 * Text label drawn to a canvas and used as a sprite.
 *
 * Deliberately not drei's <Text>: that pulls a font over the network at
 * runtime, which fails in an offline or restricted environment and takes the
 * whole scene down with it. A canvas texture has no external dependency.
 * `sizeAttenuation: false` keeps labels legible at any zoom.
 */
function Label({ text, position }: { text: string; position: [number, number, number] }) {
  const sprite = useMemo(() => {
    const fs = 44;
    const c = document.createElement('canvas');
    const probe = c.getContext('2d')!;
    probe.font = `700 ${fs}px system-ui, sans-serif`;
    c.width = Math.ceil(probe.measureText(text).width) + 26;
    c.height = fs + 20;

    const g = c.getContext('2d')!;
    g.font = `700 ${fs}px system-ui, sans-serif`;
    g.fillStyle = 'rgba(252,252,251,0.92)';
    g.strokeStyle = 'rgba(11,11,11,0.18)';
    g.lineWidth = 2;
    const r = 12;
    g.beginPath();
    g.moveTo(r, 0);
    g.arcTo(c.width, 0, c.width, c.height, r);
    g.arcTo(c.width, c.height, 0, c.height, r);
    g.arcTo(0, c.height, 0, 0, r);
    g.arcTo(0, 0, c.width, 0, r);
    g.closePath();
    g.fill();
    g.stroke();
    g.fillStyle = '#0b0b0b';
    g.textBaseline = 'middle';
    g.fillText(text, 13, c.height / 2 + 2);

    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, sizeAttenuation: false });
    const s = new THREE.Sprite(mat);
    const h = 0.045;
    s.scale.set(h * (c.width / c.height), h, 1);
    s.renderOrder = 20;
    return s;
  }, [text]);

  useEffect(() => () => {
    sprite.material.map?.dispose();
    sprite.material.dispose();
  }, [sprite]);

  return <primitive object={sprite} position={position} />;
}

/** One pile: shaft above rockhead, socket below, toe marker at the base. */
function PileMesh({
  g,
  record,
  selected,
  onSelect,
  showLabel,
  verdict,
}: {
  g: PileGeometry;
  record: PileRecord;
  selected: boolean;
  onSelect: (id: string) => void;
  showLabel: boolean;
  verdict: ComplianceVerdict;
}) {
  const socketColour =
    verdict === 'non-compliant'
      ? COLOUR.socketShort
      : verdict === 'compliant'
        ? COLOUR.socket
        : COLOUR.socketUnknown;
  const splitY = g.rockheadY !== null && g.rockheadY < g.topY && g.rockheadY > g.toeY
    ? g.rockheadY
    : null;

  const shaftTop = g.topY;
  const shaftBottom = splitY ?? g.toeY;
  const shaftLen = Math.max(shaftTop - shaftBottom, 0.0001);

  const socketLen = splitY !== null ? splitY - g.toeY : 0;

  return (
    <group position={[g.x, 0, g.y]} onClick={(e) => { e.stopPropagation(); onSelect(g.id); }}>
      <mesh position={[0, shaftBottom + shaftLen / 2, 0]}>
        <cylinderGeometry args={[g.radius, g.radius, shaftLen, 24]} />
        <meshStandardMaterial
          color={COLOUR.shaft}
          roughness={0.75}
          emissive={selected ? COLOUR.selected : '#000000'}
          emissiveIntensity={selected ? 0.35 : 0}
        />
      </mesh>

      {socketLen > 0.0001 && (
        <mesh position={[0, g.toeY + socketLen / 2, 0]}>
          <cylinderGeometry args={[g.radius * 1.001, g.radius * 1.001, socketLen, 24]} />
          <meshStandardMaterial
            color={socketColour}
            roughness={0.6}
            emissive={selected ? COLOUR.selected : '#000000'}
            emissiveIntensity={selected ? 0.3 : 0}
          />
        </mesh>
      )}

      {/* Toe marker — the level an engineer checks first. */}
      <mesh position={[0, g.toeY, 0]}>
        <cylinderGeometry args={[g.radius * 1.18, g.radius * 1.18, 0.04, 20]} />
        <meshBasicMaterial color={COLOUR.toe} />
      </mesh>

      {showLabel && <Label text={record.id} position={[0, g.topY + 0.9, 0]} />}
    </group>
  );
}

/** Design intent drawn as a translucent ghost behind the constructed pile. */
function DesignGhost({
  g,
  design,
  datumRL,
  vex,
}: {
  g: PileGeometry;
  design: PileDesign;
  datumRL: number;
  vex: number;
}) {
  if (!hasValue(design.designToeRL)) return null;
  const designToeY = rlToSceneY(design.designToeRL.value, datumRL, vex);
  const len = Math.max(g.topY - designToeY, 0.0001);
  const r = hasValue(design.designDiameter) ? design.designDiameter.value / 2 : g.radius;

  return (
    <group position={[g.x, 0, g.y]}>
      <mesh position={[0, designToeY + len / 2, 0]}>
        <cylinderGeometry args={[r * 1.25, r * 1.25, len, 20]} />
        <meshStandardMaterial
          color={COLOUR.designGhost}
          transparent
          opacity={0.18}
          depthWrite={false}
        />
      </mesh>
      <Line
        points={[
          [-r * 1.8, designToeY, 0],
          [r * 1.8, designToeY, 0],
        ]}
        color={COLOUR.designGhost}
        lineWidth={2}
      />
    </group>
  );
}

/**
 * Interpolated surface through known levels. Inverse-distance weighting is a
 * display aid only, so the mesh is translucent and the panel labels it
 * interpolated — it is not a geological interpretation.
 */
function InterpolatedSurface({
  samples,
  colour,
  opacity,
}: {
  samples: Array<{ x: number; y: number; level: number }>;
  colour: string;
  opacity: number;
}) {
  const geom = useMemo(() => {
    if (samples.length < 3) return null;
    const xs = samples.map((s) => s.x);
    const ys = samples.map((s) => s.y);
    const pad = 3;
    const x0 = Math.min(...xs) - pad;
    const x1 = Math.max(...xs) + pad;
    const y0 = Math.min(...ys) - pad;
    const y1 = Math.max(...ys) + pad;
    const n = 32;

    const g = new THREE.PlaneGeometry(x1 - x0, y1 - y0, n, n);
    g.rotateX(-Math.PI / 2);
    const pos = g.attributes.position;
    const cx = (x0 + x1) / 2;
    const cy = (y0 + y1) / 2;

    for (let i = 0; i < pos.count; i++) {
      const px = pos.getX(i) + cx;
      const pz = pos.getZ(i) + cy;
      let num = 0;
      let den = 0;
      for (const s of samples) {
        const d2 = (s.x - px) ** 2 + (s.y - pz) ** 2;
        if (d2 < 1e-6) {
          num = s.level;
          den = 1;
          break;
        }
        const w = 1 / d2 ** 1.2;
        num += w * s.level;
        den += w;
      }
      pos.setY(i, num / den);
    }
    g.computeVertexNormals();
    g.translate(cx, 0, cy);
    return g;
  }, [samples]);

  if (!geom) return null;
  return (
    <mesh geometry={geom}>
      <meshStandardMaterial
        color={colour}
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
        depthWrite={false}
        roughness={0.9}
      />
    </mesh>
  );
}

export function PileScene(props: SceneProps) {
  const {
    piles,
    design,
    datumRL,
    verticalExaggeration: vex,
    mode,
    selectedId,
    onSelect,
    showGroundSurface,
    showRockSurface,
    showLabels,
  } = props;

  const visible = mode === 'pile' && selectedId
    ? piles.filter((p) => p.id === selectedId)
    : piles;

  const built = useMemo(
    () =>
      visible
        .map((p) => ({ record: p, ...pileGeometry(p, datumRL, vex) }))
        .filter((b) => b.geometry !== null) as Array<{
        record: PileRecord;
        geometry: PileGeometry;
        blockers: string[];
      }>,
    [visible, datumRL, vex],
  );

  const groundSamples = useMemo(
    () =>
      built
        .filter((b) => hasValue(b.record.groundRL))
        .map((b) => ({
          x: b.geometry.x,
          y: b.geometry.y,
          level: rlToSceneY(b.record.groundRL.value!, datumRL, vex),
        })),
    [built, datumRL, vex],
  );

  const rockSamples = useMemo(
    () =>
      built
        .filter((b) => b.geometry.rockheadY !== null)
        .map((b) => ({ x: b.geometry.x, y: b.geometry.y, level: b.geometry.rockheadY! })),
    [built],
  );

  const centre = useMemo(() => {
    if (built.length === 0) return new THREE.Vector3(0, 0, 0);
    const xs = built.map((b) => b.geometry.x);
    const ys = built.map((b) => b.geometry.y);
    const lows = built.map((b) => b.geometry.toeY);
    return new THREE.Vector3(
      (Math.min(...xs) + Math.max(...xs)) / 2,
      Math.min(...lows) / 2,
      (Math.min(...ys) + Math.max(...ys)) / 2,
    );
  }, [built]);

  const span = useMemo(() => {
    if (built.length === 0) return 30;
    const xs = built.map((b) => b.geometry.x);
    const ys = built.map((b) => b.geometry.y);
    return Math.max(12, Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys));
  }, [built]);

  const designById = useMemo(() => new Map(design.map((d) => [d.id, d])), [design]);

  return (
    <Canvas
      camera={{ position: [span * 0.9, span * 0.7, span * 0.9], fov: 45, far: 4000 }}
      onPointerMissed={() => onSelect(null)}
      dpr={[1, 2]}
    >
      <color attach="background" args={['#eef1f4']} />
      <hemisphereLight intensity={0.85} groundColor="#b0a893" />
      <directionalLight position={[-40, 60, -30]} intensity={0.9} />

      <Grid
        args={[span * 4, span * 4]}
        cellSize={1}
        sectionSize={6}
        cellColor="#d8d6cf"
        sectionColor="#b9b7ad"
        fadeDistance={span * 5}
        position={[centre.x, 0.01, centre.z]}
        infiniteGrid={false}
      />

      {showGroundSurface && (
        <InterpolatedSurface samples={groundSamples} colour={COLOUR.ground} opacity={0.14} />
      )}
      {showRockSurface && (
        <InterpolatedSurface samples={rockSamples} colour={COLOUR.rock} opacity={0.32} />
      )}

      {built.map((b) => (
        <PileMesh
          key={b.record.id}
          g={b.geometry}
          record={b.record}
          selected={b.record.id === selectedId}
          onSelect={onSelect}
          showLabel={showLabels}
          verdict={socketCompliance(b.record).verdict}
        />
      ))}

      {mode === 'design-vs-constructed' &&
        built.map((b) => {
          const d = designById.get(b.record.id);
          if (!d) return null;
          return (
            <DesignGhost
              key={`d-${b.record.id}`}
              g={b.geometry}
              design={d}
              datumRL={datumRL}
              vex={vex}
            />
          );
        })}

      <OrbitControls target={centre} makeDefault enableDamping dampingFactor={0.12} />
    </Canvas>
  );
}

/** Re-exported so the panel can show the same warnings the ghost is based on. */
export { compareToDesign };
