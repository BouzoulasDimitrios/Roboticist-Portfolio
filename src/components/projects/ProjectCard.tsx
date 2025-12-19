"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/app/data/projects";

const CARD_PLACEHOLDER = "/images/card-placeholder.svg";

export default function ProjectCard({
  project,
  cardId,
}: {
  project: Project;
  cardId?: string;
}) {
  const previewSrc = project.imageUrl ?? CARD_PLACEHOLDER;

  return (
    <article id={cardId} className="project-card flex flex-col gap-4 scroll-mt-24">
      <Image
        src={previewSrc}
        alt={`${project.title} preview`}
        width={800}
        height={450}
        className="w-full h-48 object-cover rounded-md"
      />

      <div>
        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        {project.published ? (
          <Link href={`/projects/${project.slug}`} className="text-indigo-600 hover:underline font-semibold">
            Explore Project &rarr;
          </Link>
        ) : (
          <p className="text-gray-500 italic">Yet to be published</p>
        )}
      </div>
    </article>
  );
}
