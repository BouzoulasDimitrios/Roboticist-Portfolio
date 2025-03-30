import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";

// Import individual project contents
import AutonomousNavigationContent from "./content/autonomous-navigation-ros2";
import CraneInspectionRobotContent from "./content/crane-inspection-robot";
import OptimizedAerospaceLayoutsContent from "./content/optimized-aerospace-layouts";

const projectContentMap: { [key: string]: JSX.Element } = {
  "autonomous-navigation-ros2": <AutonomousNavigationContent />,
  "crane-inspection-robot": <CraneInspectionRobotContent />,
  "optimized-aerospace-layouts": <OptimizedAerospaceLayoutsContent />,
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
