"use client";
import Link from "next/link";
import { Project } from "@/app/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
      <p className="mb-4">{project.description}</p>
      {project.published ? (
        <Link href={`/projects/${project.slug}`} className="text-indigo-600 hover:underline">
          Explore Project &rarr;
        </Link>
      ) : (
        <p className="text-gray-500 italic">Yet to be published</p>
      )}
    </div>
  );
}
