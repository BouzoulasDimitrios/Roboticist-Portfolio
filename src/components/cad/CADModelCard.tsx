"use client";

import Link from "next/link";
import CADViewer from "./CADViewer";
import { CADModel } from "@/app/data/cadModels";

export default function CADModelCard({ model }: { model: CADModel }) {
  return (
    <section className="project-card flex flex-col gap-4 p-6 shadow-lg">
      <h2 className="text-2xl font-semibold">{model.title}</h2>
      <p className="text-gray-700">{model.description}</p>
      <Link
        href={model.grabCadUrl}
        target="_blank"
        className="text-indigo-600 hover:underline font-semibold"
      >
        View on GrabCAD →
      </Link>
      <CADViewer modelPath={model.modelPath} />
    </section>
  );
}
