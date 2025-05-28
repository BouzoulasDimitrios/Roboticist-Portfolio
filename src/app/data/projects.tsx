export interface Project {
  slug: string;
  title: string;
  description: string;
  detailedDescription: string;
  imageUrl?: string;
  published: boolean;
}

export const projects: Project[] = [
  {
    slug: "Project1",
    title: "Project 1",
    description: "Project description",
    detailedDescription:
      "extended description",
    imageUrl: "/images/projects/project_img.png",
    published: true,
  },
  {
    slug: "Project2",
    title: "Interactive 3D Crane Inspection Robot",
    description: "Automated defect detection for overhead cranes.",
    detailedDescription:
      "Full description, images, CAD models, and patent details.",
    imageUrl: "/images/projects/crane-robot.png",
    published: true, // not published yet
  },
  {
    slug: "Project3",
    title: "Optimized CAD Layouts for Aerospace",
    description: "AI-driven hangar layout optimizations.",
    detailedDescription:
      "Detailed explanation, approach, images, and visualizations.",
    imageUrl: "/images/projects/aerospace-layout.png",
    published: true,
  },

];
