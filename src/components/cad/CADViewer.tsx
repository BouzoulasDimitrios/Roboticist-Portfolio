"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1} />;
}

export default function CADViewer({ modelPath }: { modelPath: string }) {
  return (
    <div className="w-full h-72 border rounded shadow-md bg-gray-100">
      <Canvas camera={{ position: [1, 1, 2.5] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <Model url={modelPath} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
