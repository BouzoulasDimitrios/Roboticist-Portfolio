"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  return <primitive object={clonedScene} scale={1} />;
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
  onCameraChange,
}: {
  modelPath: string;
  target: Vec3;
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
      <Model url={modelPath} />
      <OrbitControls ref={controlsRef} target={target} onChange={notifyCameraChange} />
    </>
  );
}

const formatVec = (vec: Vec3) => `[${vec.map((value) => value.toFixed(2)).join(", ")}]`;

export default function CADViewer({
  modelPath,
  cameraPosition = DEFAULT_CAMERA_POSITION,
  target = DEFAULT_TARGET,
  showCameraDebug = false,
}: {
  modelPath: string;
  cameraPosition?: Vec3;
  target?: Vec3;
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
      <div className="aspect-square max-h-[28rem] w-full border rounded shadow-md bg-gray-100">
        <Canvas camera={{ position: cameraPosition }}>
          <SceneContents
            modelPath={modelPath}
            target={target}
            onCameraChange={showCameraDebug ? handleCameraChange : undefined}
          />
        </Canvas>
      </div>
      {showCameraDebug && (
        <div className="mt-2 rounded border bg-white/80 p-3 text-[11px] font-mono text-gray-700">
          <p>
            <span className="font-semibold">cameraPosition</span> = {formatVec(cameraState.position)}
          </p>
          <p>
            <span className="font-semibold">target</span> = {formatVec(cameraState.target)}
          </p>
        </div>
      )}
    </div>
  );
}
