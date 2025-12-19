import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/app/data/projects";

export default function ProjectsPage() {
  return (
    <main className="px-4 py-10 flex gap-8">
      <aside className="bg-gray-900/90 text-white border border-gray-800 rounded-lg px-4 py-6 h-fit sticky top-24 min-w-[220px]">
        <h2 className="text-lg font-semibold mb-4">Projects</h2>
        <nav aria-label="Project quick links">
          <ul className="space-y-2">
            {projects.map((project) => (
              <li key={project.slug}>
                <a
                  href={`#${project.slug}`}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-800 transition-colors"
                >
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-4xl flex flex-col gap-10">
          <div>
            <h1 className="text-4xl font-bold mb-6">My Projects</h1>
            <p className="text-gray-600">
              Explore featured engineering efforts, interactive demos, and behind-the-scenes details.
            </p>
          </div>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} cardId={project.slug} />
          ))}
        </div>
      </div>
    </main>
  );
}
