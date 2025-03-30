import { projects } from "@/app/data/projects"; 
import { notFound } from "next/navigation";

export default function ProjectDetails({ params }: { params: { slug: string } }) {
  const project = projects.find((proj) => proj.slug === params.slug);

  if (!project || !project.published) {
    return notFound();
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg">{project.detailedDescription}</p>
      {/* Optionally include images, videos, or interactive CAD here */}
    </main>
  );
}
