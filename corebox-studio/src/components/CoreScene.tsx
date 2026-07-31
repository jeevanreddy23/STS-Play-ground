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
import type { CoreDefect, CorePiece } from "@/types/core";

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

function PhotoCoreMaterial({ url, selected, detail }: { url: string; selected: boolean; detail: number }) {
  const loaded = useTexture(url);
  const texture = useMemo(() => {
    const derived = loaded.clone();
    derived.colorSpace = THREE.SRGBColorSpace;
    derived.anisotropy = 16;
    derived.wrapS = THREE.RepeatWrapping;
    derived.wrapT = THREE.ClampToEdgeWrapping;
    derived.needsUpdate = true;
    return derived;
  }, [loaded]);
  useEffect(() => () => texture.dispose(), [texture]);
  return (
    <meshPhysicalMaterial
      color="#ffffff"
      map={texture}
      roughness={0.62 - detail * 0.05}
      metalness={0.02}
      clearcoat={0.04 + detail * 0.03}
      clearcoatRoughness={0.82}
      emissive={selected ? "#d5ff8b" : "#000000"}
      emissiveIntensity={selected ? 0.08 : 0}
    />
  );
}

function ProceduralCoreMaterial({ color, selected, detail }: { color: string; selected: boolean; detail: number }) {
  return (
    <meshPhysicalMaterial
      color={color}
      roughness={0.62 - detail * 0.05}
      metalness={0.02}
      clearcoat={0.04 + detail * 0.03}
      clearcoatRoughness={0.82}
      emissive={selected ? "#d5ff8b" : "#000000"}
      emissiveIntensity={selected ? 0.08 : 0}
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

function Tray() {
  return (
    <group position={[0, -0.28, 0]}>
      <mesh receiveShadow position={[0, -0.18, 0]}>
        <boxGeometry args={[11.6, 0.26, 5.4]} />
        <meshPhysicalMaterial color="#181d1b" roughness={0.76} metalness={0.04} clearcoat={0.1} />
      </mesh>
      {[-2.7, -1.35, 0, 1.35, 2.7].map((z) => (
        <mesh key={z} castShadow receiveShadow position={[0, 0.04, z]}>
          <boxGeometry args={[11.8, 0.45, 0.1]} />
          <meshStandardMaterial color="#2c312f" roughness={0.85} />
        </mesh>
      ))}
      {[-5.9, 5.9].map((x) => (
        <mesh key={x} castShadow receiveShadow position={[x, 0.04, 0]}>
          <boxGeometry args={[0.12, 0.45, 5.5]} />
          <meshStandardMaterial color="#303633" roughness={0.86} />
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
  const layout = useMemo(() => {
    const rowDepthStarts = new Map<number, number>();
    const rowCursors = new Map<number, number>();
    return pieces.map((piece) => {
      const start = rowDepthStarts.get(piece.row) ?? piece.top;
      rowDepthStarts.set(piece.row, start);
      const cursor = rowCursors.get(piece.row) ?? -5.35;
      const length = Math.max(0.46, (piece.base - piece.top) * 7.6);
      rowCursors.set(piece.row, cursor + length + 0.09);
      return { piece, x: cursor + length / 2, length };
    });
  }, [pieces]);
  const defectsById = useMemo(() => new Map(defects.map((item) => [item.id, item])), [defects]);

  return (
    <group position={[0, 0.18, 0]}>
      {layout.map(({ piece, x, length }, index) => {
        const selected = piece.id === selectedId;
        const rowZ = -2.03 + piece.row * 1.35;
        const firstDefect = defectsById.get(piece.defectIds[0]);
        const handleClick = (event: ThreeEvent<MouseEvent>) => {
          event.stopPropagation();
          onSelect(piece.id);
        };
        return (
          <group key={piece.id} position={[x, selected ? 0.12 : 0, rowZ]}>
            <mesh
              castShadow
              receiveShadow
              rotation={[0, 0, Math.PI / 2]}
              onClick={handleClick}
              onPointerOver={() => {
                document.body.style.cursor = "pointer";
              }}
              onPointerOut={() => {
                document.body.style.cursor = "default";
              }}
            >
              <cylinderGeometry args={[0.29, 0.3, length, 32 + detail * 16, 4, false]} />
              {photoUrl ? (
                <PhotoCoreMaterial url={photoUrl} selected={selected} detail={detail} />
              ) : (
                <ProceduralCoreMaterial color={piece.materialColor} selected={selected} detail={detail} />
              )}
            </mesh>
            {selected ? (
              <mesh rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.335, 0.335, length + 0.05, 32, 1, true]} />
                <meshBasicMaterial color="#d9ff6b" wireframe transparent opacity={0.8} />
              </mesh>
            ) : null}
            {showDefects && firstDefect ? (
              <group position={[0, 0.39, 0]}>
                <mesh>
                  <sphereGeometry args={[0.085, 16, 16]} />
                  <meshBasicMaterial color={firstDefect.severity === "high" ? "#ff7f68" : "#f3cf69"} />
                </mesh>
                <Html center distanceFactor={8} position={[0, 0.22, 0]}>
                  <span className="scene-label">{firstDefect.depth.toFixed(2)} m</span>
                </Html>
              </group>
            ) : null}
            {index === 0 || layout[index - 1]?.piece.row !== piece.row ? (
              <Html position={[-length / 2, -0.48, 0]} center distanceFactor={9}>
                <span className="scene-depth">{piece.top.toFixed(2)} m</span>
              </Html>
            ) : null}
          </group>
        );
      })}
    </group>
  );
}

export default function CoreScene(props: CoreSceneProps) {
  return (
    <div className="canvas-shell" aria-label="Interactive 3D core box viewer">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [8.8, 7.2, 8.8], fov: 34 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.06;
          gl.outputColorSpace = THREE.SRGBColorSpace;
        }}
      >
        <color attach="background" args={["#0c1110"]} />
        <fog attach="fog" args={["#0c1110", 15, 29]} />
        <ambientLight intensity={0.62} />
        <hemisphereLight args={["#dff7ff", "#24201a", 1.25]} />
        <directionalLight castShadow position={[4, 9, 5]} intensity={2.3} shadow-mapSize={[2048, 2048]} />
        <directionalLight position={[-7, 4, -5]} intensity={0.8} color="#8bc9ff" />
        <Suspense fallback={<Html center><span className="scene-loading">Preparing high-detail core twin…</span></Html>}>
          {props.modelUrl ? <ImportedModel url={props.modelUrl} /> : <><Tray /><CorePieces {...props} /></>}
        </Suspense>
        <ContactShadows position={[0, -0.58, 0]} opacity={0.7} scale={16} blur={2.3} far={6} />
        <Grid
          position={[0, -0.6, 0]}
          args={[24, 24]}
          cellSize={0.5}
          cellThickness={0.5}
          cellColor="#2a3632"
          sectionSize={2}
          sectionThickness={0.8}
          sectionColor="#455950"
          fadeDistance={18}
          fadeStrength={1}
          infiniteGrid
        />
        <OrbitControls makeDefault enableDamping dampingFactor={0.08} minDistance={5} maxDistance={22} maxPolarAngle={Math.PI / 2.05} />
        <AdaptiveDpr pixelated />
      </Canvas>
    </div>
  );
}
