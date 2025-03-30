"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/models/Duck.glb");
  return <primitive object={scene} scale={1.5} />;
}

export default function CADModel() {
  return (
    <Canvas camera={{ position: [1, 1, 2] }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
}
