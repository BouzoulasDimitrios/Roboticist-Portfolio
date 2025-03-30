"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function BasicScene() {
  return (
    <Canvas camera={{ position: [2, 2, 2] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#4f46e5" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}
