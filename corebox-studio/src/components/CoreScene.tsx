"use client";

import { Suspense, useEffect, useMemo } from "react";
import { Canvas, type ThreeEvent } from "@react-three/fiber";
import {
  AdaptiveDpr,
  Bounds,
  ContactShadows,
  Grid,
  Html,
  OrbitControls,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import type { CoreDefect, CorePiece, PhotoCrop } from "@/types/core";

interface CoreSceneProps {
  pieces: CorePiece[];
  defects: CoreDefect[];
  selectedId: string;
  onSelect: (id: string) => void;
  photoUrl?: string;
  modelUrl?: string;
  detail: number;
  showDefects: boolean;
}

function PhotoCoreMaterial({
  url,
  crop,
  selected,
  detail,
}: {
  url: string;
  crop?: PhotoCrop;
  selected: boolean;
  detail: number;
}) {
  const loaded = useTexture(url);
  const texture = useMemo(() => {
    if (!crop || typeof document === "undefined") {
      const clone = loaded.clone();
      clone.colorSpace = THREE.SRGBColorSpace;
      clone.anisotropy = 16;
      clone.needsUpdate = true;
      return clone;
    }

    const source = loaded.image as HTMLImageElement;
    const canvas = document.createElement("canvas");
    canvas.width = 128 + detail * 64;
    canvas.height = 640 + detail * 192;
    const context = canvas.getContext("2d");
    if (!context) return loaded.clone();

    const sourceWidth = source.naturalWidth || source.width;
    const sourceHeight = source.naturalHeight || source.height;
    context.fillStyle = "#4d514e";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.translate(canvas.width, 0);
    context.rotate(Math.PI / 2);
    context.drawImage(
      source,
      crop.x * sourceWidth,
      crop.y * sourceHeight,
      crop.width * sourceWidth,
      crop.height * sourceHeight,
      0,
      0,
      canvas.height,
      canvas.width,
    );

    const derived = new THREE.CanvasTexture(canvas);
    derived.colorSpace = THREE.SRGBColorSpace;
    derived.anisotropy = 16;
    derived.wrapS = THREE.MirroredRepeatWrapping;
    derived.wrapT = THREE.ClampToEdgeWrapping;
    derived.needsUpdate = true;
    return derived;
  }, [crop, detail, loaded]);

  useEffect(() => () => texture.dispose(), [texture]);

  return (
    <meshPhysicalMaterial
      color="#ffffff"
      map={texture}
      bumpMap={texture}
      bumpScale={0.012 + detail * 0.003}
      roughness={0.68 - detail * 0.035}
      metalness={0.01}
      clearcoat={0.035 + detail * 0.012}
      clearcoatRoughness={0.86}
      emissive={selected ? "#d5ff8b" : "#000000"}
      emissiveIntensity={selected ? 0.07 : 0}
    />
  );
}

function ProceduralCoreMaterial({ color, selected, detail }: { color: string; selected: boolean; detail: number }) {
  return (
    <meshPhysicalMaterial
      color={color}
      roughness={0.65 - detail * 0.04}
      metalness={0.01}
      clearcoat={0.035 + detail * 0.015}
      clearcoatRoughness={0.86}
      emissive={selected ? "#d5ff8b" : "#000000"}
      emissiveIntensity={selected ? 0.07 : 0}
    />
  );
}

function ImportedModel({ url }: { url: string }) {
  const model = useGLTF(url);
  return (
    <Bounds fit clip observe margin={1.25}>
      <primitive object={model.scene} rotation={[-Math.PI / 2, 0, 0]} />
    </Bounds>
  );
}

function Tray({ rowCount }: { rowCount: number }) {
  const rowSpacing = 0.82;
  const trayDepth = rowCount * rowSpacing + 0.35;
  const firstDivider = -trayDepth / 2;

  return (
    <group position={[0, -0.28, 0]}>
      <mesh receiveShadow position={[0, -0.18, 0]}>
        <boxGeometry args={[11.6, 0.26, trayDepth]} />
        <meshPhysicalMaterial color="#181d1b" roughness={0.78} metalness={0.04} clearcoat={0.08} />
      </mesh>
      {Array.from({ length: rowCount + 1 }, (_, index) => firstDivider + index * rowSpacing).map((z) => (
        <mesh key={z} castShadow receiveShadow position={[0, 0.04, z]}>
          <boxGeometry args={[11.8, 0.42, 0.075]} />
          <meshStandardMaterial color="#303532" roughness={0.88} />
        </mesh>
      ))}
      {[-5.9, 5.9].map((x) => (
        <mesh key={x} castShadow receiveShadow position={[x, 0.04, 0]}>
          <boxGeometry args={[0.12, 0.42, trayDepth + 0.18]} />
          <meshStandardMaterial color="#303532" roughness={0.88} />
        </mesh>
      ))}
    </group>
  );
}

function CorePieces({
  pieces,
  defects,
  selectedId,
  onSelect,
  photoUrl,
  detail,
  showDefects,
}: CoreSceneProps) {
  const rowCount = Math.max(...pieces.map((piece) => piece.row)) + 1;
  const rowSpacing = 0.82;
  const layout = useMemo(() => {
    const rowCursors = new Map<number, number>();
    return pieces.map((piece) => {
      const intervalLengthM = piece.base - piece.top;
      const offsetM = piece.rowOffsetM ?? rowCursors.get(piece.row) ?? 0;
      const length = Math.max(0.35, intervalLengthM * 10.2);
      rowCursors.set(piece.row, offsetM + intervalLengthM + 0.008);
      return { piece, x: -5.1 + (offsetM + intervalLengthM / 2) * 10.2, length };
    });
  }, [pieces]);
  const defectsById = useMemo(() => new Map(defects.map((item) => [item.id, item])), [defects]);

  return (
    <group position={[0, 0.18, 0]}>
      {layout.map(({ piece, x, length }) => {
        const selected = piece.id === selectedId;
        const rowZ = -((rowCount - 1) * rowSpacing) / 2 + piece.row * rowSpacing;
        const firstDefect = defectsById.get(piece.defectIds[0]);
        const handleClick = (event: ThreeEvent<MouseEvent>) => {
          event.stopPropagation();
          onSelect(piece.id);
        };
        return (
          <group key={piece.id} position={[x, selected ? 0.1 : 0, rowZ]}>
            <mesh
              castShadow
              receiveShadow
              rotation={[0, 0, Math.PI / 2]}
              onClick={handleClick}
              onPointerOver={() => { document.body.style.cursor = "pointer"; }}
              onPointerOut={() => { document.body.style.cursor = "default"; }}
            >
              <cylinderGeometry args={[0.225, 0.235, length, 48 + detail * 16, 5, false]} />
              {photoUrl ? (
                <PhotoCoreMaterial url={photoUrl} crop={piece.photoCrop} selected={selected} detail={detail} />
              ) : (
                <ProceduralCoreMaterial color={piece.materialColor} selected={selected} detail={detail} />
              )}
            </mesh>
            {selected ? (
              <mesh rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.268, 0.268, length + 0.045, 48, 1, true]} />
                <meshBasicMaterial color="#d9ff6b" wireframe transparent opacity={0.82} />
              </mesh>
            ) : null}
            {showDefects && firstDefect ? (
              <group position={[0, 0.33, 0]}>
                <mesh>
                  <sphereGeometry args={[0.072, 18, 18]} />
                  <meshBasicMaterial color={firstDefect.severity === "high" ? "#ff7f68" : "#f3cf69"} />
                </mesh>
                <Html center distanceFactor={9} position={[0, 0.19, 0]}>
                  <span className="scene-label">{firstDefect.depth.toFixed(2)} m · review</span>
                </Html>
              </group>
            ) : null}
            <Html position={[-length / 2, -0.4, 0]} center distanceFactor={10}>
              <span className="scene-depth">{piece.top.toFixed(2)} m</span>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export default function CoreScene(props: CoreSceneProps) {
  const rowCount = Math.max(...props.pieces.map((piece) => piece.row)) + 1;

  return (
    <div className="canvas-shell" aria-label="Interactive texture-derived 3D core box viewer">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [9.8, 10.2, 12.8], fov: 36 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.03;
          gl.outputColorSpace = THREE.SRGBColorSpace;
        }}
      >
        <color attach="background" args={["#0c1110"]} />
        <fog attach="fog" args={["#0c1110", 18, 34]} />
        <ambientLight intensity={0.6} />
        <hemisphereLight args={["#dff7ff", "#24201a", 1.2]} />
        <directionalLight castShadow position={[5, 11, 6]} intensity={2.15} shadow-mapSize={[2048, 2048]} />
        <directionalLight position={[-7, 5, -6]} intensity={0.72} color="#8bc9ff" />
        <Suspense fallback={<Html center><span className="scene-loading">Preparing photo-textured core twin…</span></Html>}>
          {props.modelUrl ? <ImportedModel url={props.modelUrl} /> : <><Tray rowCount={rowCount} /><CorePieces {...props} /></>}
        </Suspense>
        <ContactShadows position={[0, -0.58, 0]} opacity={0.68} scale={18} blur={2.4} far={7} />
        <Grid
          position={[0, -0.6, 0]}
          args={[28, 28]}
          cellSize={0.5}
          cellThickness={0.5}
          cellColor="#2a3632"
          sectionSize={2}
          sectionThickness={0.8}
          sectionColor="#455950"
          fadeDistance={21}
          fadeStrength={1}
          infiniteGrid
        />
        <OrbitControls makeDefault enableDamping dampingFactor={0.08} minDistance={7} maxDistance={28} maxPolarAngle={Math.PI / 2.05} />
        <AdaptiveDpr pixelated />
      </Canvas>
    </div>
  );
}
