"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CADViewer from "./CADViewer";
import { CADModel } from "@/app/data/cadModels";

export default function CADModelCard({
  model,
  cardId,
}: {
  model: CADModel;
  cardId?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const cameraPosition = model.cameraPosition
    ? [model.cameraPosition.x, model.cameraPosition.y, model.cameraPosition.z]
    : undefined;
  const target = model.target ? [model.target.x, model.target.y, model.target.z] : undefined;
  const scale = model.scale;

  useEffect(() => {
    if (!containerRef.current || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <section id={cardId} className="project-card flex flex-col gap-4 p-6 shadow-lg scroll-mt-24 text-white">
      <h2 className="text-2xl font-semibold">{model.title}</h2>
      <p className="text-gray-200">{model.description}</p>
      <Link href={model.grabCadUrl} target="_blank" className="text-indigo-300 hover:underline font-semibold">
        View on GrabCAD →
      </Link>
      <div ref={containerRef}>
        {isVisible ? (
          <CADViewer modelPath={model.modelPath} cameraPosition={cameraPosition} target={target} scale={scale} />
        ) : (
          <div className="w-full aspect-square max-h-[28rem] rounded border bg-gray-100 shadow-md" />
        )}
      </div>
    </section>
  );
}
