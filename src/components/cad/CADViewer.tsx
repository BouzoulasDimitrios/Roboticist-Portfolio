"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

function Model({ url, scale = 1 }: { url: string; scale?: number }) {
  const { scene } = useGLTF(url);
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  return <primitive object={clonedScene} scale={scale} />;
}

type Vec3 = [number, number, number];

const vecEquals = (a: Vec3, b: Vec3) => a.every((value, index) => value === b[index]);
const DEFAULT_CAMERA_POSITION: Vec3 = [1, 1, 2.5];
const DEFAULT_TARGET: Vec3 = [0, 0, 0];

interface CameraState {
  position: Vec3;
  target: Vec3;
}

function SceneContents({
  modelPath,
  target,
  scale,
  onCameraChange,
}: {
  modelPath: string;
  target: Vec3;
  scale?: number;
  onCameraChange?: (state: CameraState) => void;
}) {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const { camera } = useThree();
  const prevTargetRef = useRef<Vec3>(target);
  const initializedRef = useRef(false);

  const notifyCameraChange = useCallback(() => {
    if (!onCameraChange) return;
    const nextState: CameraState = {
      position: [camera.position.x, camera.position.y, camera.position.z],
      target: [
        controlsRef.current?.target.x ?? 0,
        controlsRef.current?.target.y ?? 0,
        controlsRef.current?.target.z ?? 0,
      ],
    };
    onCameraChange(nextState);
  }, [camera, onCameraChange]);

  useEffect(() => {
    let changed = false;
    if (controlsRef.current) {
      const prevTarget = prevTargetRef.current;
      changed = !vecEquals(prevTarget, target);

      if (changed || !initializedRef.current) {
        controlsRef.current.target.set(target[0], target[1], target[2]);
        controlsRef.current.update();
        prevTargetRef.current = target;
      }
    }
    if (!initializedRef.current) {
      initializedRef.current = true;
      notifyCameraChange();
    } else if (changed) {
      notifyCameraChange();
    }
  }, [target, notifyCameraChange]);

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <Model url={modelPath} scale={scale} />
      <OrbitControls ref={controlsRef} target={target} onChange={notifyCameraChange} />
    </>
  );
}

const formatVec = (vec: Vec3) => `[${vec.map((value) => value.toFixed(2)).join(", ")}]`;

export default function CADViewer({
  modelPath,
  cameraPosition = DEFAULT_CAMERA_POSITION,
  target = DEFAULT_TARGET,
  scale = 1,
  showCameraDebug = true,
}: {
  modelPath: string;
  cameraPosition?: Vec3;
  target?: Vec3;
  scale?: number;
  showCameraDebug?: boolean;
}) {
  const [cameraState, setCameraState] = useState<CameraState>(() => ({
    position: cameraPosition,
    target,
  }));

  useEffect(() => {
    if (!showCameraDebug) {
      return;
    }

    setCameraState((prev) => {
      const samePosition = vecEquals(prev.position, cameraPosition);
      const sameTarget = vecEquals(prev.target, target);
      if (samePosition && sameTarget) {
        return prev;
      }
      return { position: cameraPosition, target };
    });
  }, [cameraPosition, target, showCameraDebug]);

  const handleCameraChange = useCallback((state: CameraState) => {
    setCameraState(state);
  }, []);

  return (
    <div className="w-full">
      <div className="relative aspect-square max-h-[28rem] w-full overflow-hidden rounded border bg-gray-100 shadow-md">
        <Canvas camera={{ position: cameraPosition }}>
          <SceneContents
            modelPath={modelPath}
            target={target}
            scale={scale}
            onCameraChange={showCameraDebug ? handleCameraChange : undefined}
          />
        </Canvas>
        {showCameraDebug && (
          <div className="absolute bottom-2 left-2 rounded border border-gray-800 bg-gray-950/70 px-2 py-1 text-[10px] font-mono text-gray-100 shadow">
            <div>camera: {formatVec(cameraState.position)}</div>
            <div>target: {formatVec(cameraState.target)}</div>
          </div>
        )}
      </div>
    </div>
  );
}
