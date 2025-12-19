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
    slug: "project-1",
    title: "Project 1",
    description: "Use this slot to summarize the primary or flagship initiative.",
    detailedDescription: "Provide an extended narrative, bullet points, media, or results for Project 1.",
    imageUrl: "/images/projects/project_img.png",
    published: true,
  },
  {
    slug: "project-2",
    title: "Project 2",
    description: "Outline another key effort—software, hardware, research, or competition entry.",
    detailedDescription: "Add context, methodology, and outcomes for Project 2.",
    imageUrl: "/images/projects/crane-robot.png",
    published: true,
  },
  {
    slug: "project-3",
    title: "Project 3",
    description: "Highlight a work-in-progress or exploratory concept.",
    detailedDescription: "Explain goals, progress, lessons learned, and any relevant media for Project 3.",
    imageUrl: "/images/projects/aerospace-layout.png",
    published: true,
  },

];
