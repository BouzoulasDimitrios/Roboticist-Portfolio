export interface Project {
  slug: string;
  title: string;
  description: string;
  detailedDescription: string;
  imageUrl?: string;
  externalUrl?: string;
  published: boolean;
}

const CARD_PLACEHOLDER = "/images/card-placeholder.svg";

export const projects: Project[] = [
  {
    slug: "project-1",
    title: "Project 1",
    description: "Summarize your flagship project in one or two lines.",
    detailedDescription: "Provide an extended narrative, bullet points, media, or results for Project 1.",
    imageUrl: CARD_PLACEHOLDER,
    externalUrl: "https://github.com/username/project-1",
    published: true,
  },
  {
    slug: "project-2",
    title: "Project 2",
    description: "Outline another key effort—software, hardware, research, or competition entry.",
    detailedDescription: "Add context, methodology, and outcomes for Project 2.",
    imageUrl: CARD_PLACEHOLDER,
    externalUrl: "https://github.com/username/project-2",
    published: true,
  },
  {
    slug: "project-3",
    title: "Project 3",
    description: "Highlight a work-in-progress or exploratory concept.",
    detailedDescription: "Explain goals, progress, lessons learned, and any relevant media for Project 3.",
    imageUrl: CARD_PLACEHOLDER,
    externalUrl: "https://github.com/username/project-3",
    published: true,
  },
];
