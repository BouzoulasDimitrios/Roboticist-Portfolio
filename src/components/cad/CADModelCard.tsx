"use client";

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
  const cameraPosition = model.cameraPosition
    ? [model.cameraPosition.x, model.cameraPosition.y, model.cameraPosition.z]
    : undefined;
  const target = model.target ? [model.target.x, model.target.y, model.target.z] : undefined;

  return (
    <section id={cardId} className="project-card flex flex-col gap-4 p-6 shadow-lg scroll-mt-24">
      <h2 className="text-2xl font-semibold">{model.title}</h2>
      <p className="text-gray-700">{model.description}</p>
      <Link href={model.grabCadUrl} target="_blank" className="text-indigo-600 hover:underline font-semibold">
        View on GrabCAD →
      </Link>
      <CADViewer modelPath={model.modelPath} cameraPosition={cameraPosition} target={target} />
    </section>
  );
}
