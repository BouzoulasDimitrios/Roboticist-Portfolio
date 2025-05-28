import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";

// Import individual project contents
import Project1 from "./content/Project1";
import Project2 from "./content/Project3";
import Project3 from "./content/Project2";

const projectContentMap: { [key: string]: JSX.Element } = {
  "Project1": <Project1 />,
  "Project2": <Project2 />,
  "Project3": <Project3 />,
};

export default function ProjectDetails({ params }: { params: { slug: string } }) {
  const project = projects.find((proj) => proj.slug === params.slug);

  if (!project || !project.published) {
    return notFound();
  }

  return (
    <main className="container mx-auto px-4 py-10">
      {projectContentMap[params.slug]}
    </main>
  );
}
