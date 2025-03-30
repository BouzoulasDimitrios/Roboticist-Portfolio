import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/app/data/projects";

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
