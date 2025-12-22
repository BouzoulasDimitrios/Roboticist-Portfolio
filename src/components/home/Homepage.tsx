"use client";

import Image from "next/image";
import Link from "next/link";
import CADViewer from "@/components/cad/CADViewer";

const HERO_CAD_CAMERA_POSITION: [number, number, number] = [1, 1, 2.5];
const HERO_CAD_TARGET: [number, number, number] = [0, 0, 0];

const CARD_PLACEHOLDER = "/images/card-placeholder.svg";
const PROFILE_IMAGE = "/images/profile.png";


//for projects not published yet simply remove the hyperlink and linklabel and add a note field
/**
remove:
  href: "/projects",
  linkLabel: "Explore Project →",
add:
  note: "Yet to be published",
 */
const projectCards = [
  {
    title: "Project 1",
    description: "Give a short overview of your first featured build.",
    href: "https://github.com/username/project-1",
    linkLabel: "Explore Project →",
    image: CARD_PLACEHOLDER,
  },
  {
    title: "Project 2",
    description: "Share key highlights or impact for the second project.",
    href: "https://github.com/username/project-2",
    linkLabel: "Explore Project →",
    image: CARD_PLACEHOLDER,
  },
  {
    title: "Project 3",
    description: "Describe another showcase-worthy effort or prototype.",
    href: "https://github.com/username/project-3",
    linkLabel: "Explore Project →",
    image: CARD_PLACEHOLDER,
  },
];

const workExperiences = [
  {
    title: "Research Assistant",
    description: <>Describe your research contributions, focus areas, and outcomes.</>,
    image: CARD_PLACEHOLDER,
  },
  {
    title: "Engineering Intern",
    description: <>Summarize an internship or industry placement experience.</>,
    image: CARD_PLACEHOLDER,
  },
  {
    title: "Lab Technician",
    description: <>Outline responsibilities that show hands-on technical work.</>,
    image: CARD_PLACEHOLDER,
  },
  {
    title: "Startup Experience",
    description: <>Highlight any early-stage product or prototyping work.</>,
    image: CARD_PLACEHOLDER,
  },
  {
    title: "Teaching Assistant",
    description: <>Note teaching, mentoring, or workshop support roles.</>,
    image: CARD_PLACEHOLDER,
  },
  {
    title: "Freelance Projects",
    description: <>Mention client work, consulting, or independent contracts.</>,
    image: CARD_PLACEHOLDER,
  },
];

const competitionCards = [
  {
    title: "Hackathon Challenge",
    description: <>Placement: 1st <br />Built a prototype under a tight deadline.</>,
    image: CARD_PLACEHOLDER,
  },
  {
    title: "Robotics Challenge",
    description: <>Placement: Finalist <br />Delivered a demo robot and presentation.</>,
    image: CARD_PLACEHOLDER,
  },
  {
    title: "Innovation Sprint",
    description: <>Placement: Top 5 <br />Created a proof-of-concept solution.</>,
    image: CARD_PLACEHOLDER,
  },
];

const publications = [
  {
    title: "Publication Title",
    description: <>Summarize a key paper, article, or technical report.</>,
    image: CARD_PLACEHOLDER,
  },
  {
    title: "Conference Paper",
    description: <>Highlight research outcomes and contributions.</>,
    image: CARD_PLACEHOLDER,
  },
  {
    title: "Technical Report",
    description: <>Provide a brief overview of the report's focus.</>,
    image: CARD_PLACEHOLDER,
  },
];


const education = [
  {
    title: "MSc in Engineering",
    description: <>Add key achievements, focus areas, and dates.</>,
    image: CARD_PLACEHOLDER,
  },
  {
    title: "Specialized Summer School",
    description: <>Summarize a notable short course or certificate.</>,
    image: CARD_PLACEHOLDER,
  },
  {
    title: "Professional Workshop",
    description: <>List a workshop, bootcamp, or certification program.</>,
    image: CARD_PLACEHOLDER,
  },
  {
    title: "BSc in Engineering",
    description: <>Share program highlights and outcomes.</>,
    image: CARD_PLACEHOLDER,
  },
];


const patentCards = [
  {
    title: "Patent Title",
    description: <>Summarize a patent or provisional filing.</>,
    image: CARD_PLACEHOLDER,
  },
];

export default function Homepage() {
  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Hero Section */}
      <section className="project-card flex flex-col md:flex-row md:items-start gap-6 p-6">
        <Image
          src={PROFILE_IMAGE}
          alt="Profile picture"
          width={144}
          height={144}
          className="w-36 h-36 rounded-full object-cover shadow-md"
        />
        <div className="flex flex-col justify-center gap-4 w-full md:pr-36">
          <h1 className="text-3xl font-semibold mb-2">Hi, I'm YOUR NAME.</h1>
          <h2 className="text-xl font-semibold mb-2">
            Robotics Engineering | Autonomous Systems | CAD Design
          </h2>
          <p className="font-medium">
            Welcome to my portfolio. Here you'll find featured projects, interactive CAD models, and highlights
            from my engineering journey. Replace this paragraph with a short bio, current focus, and interests.
          </p>
          <div>
            <p className="font-semibold mb-3">Signature CAD build:</p>
            <CADViewer modelPath="/models/Duck.glb" cameraPosition={HERO_CAD_CAMERA_POSITION} target={HERO_CAD_TARGET} />
          </div>
        </div>
      </section>

      <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow">Recent Projects</h2>
      <section className="grid md:grid-cols-3 gap-8">
        {projectCards.map((project, index) => (
          <div key={`${project.title}-${index}`} className="project-card flex flex-col gap-4">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              width={400}
              height={240}
              className="w-full h-40 md:h-48 object-contain rounded-md bg-gray-900/40"
            />
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="font-semibold">{project.description}</p>
            {project.href ? (
              <Link href={project.href} className="text-indigo-600 hover:underline font-medium">
                {project.linkLabel}
              </Link>
            ) : (
              <p className="text-indigo-600 font-medium">{project.note}</p>
            )}
          </div>
        ))}
      </section>

      {/* Quick-links Section */}
      <section className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <Link href="/projects" className="quick-link-btn">
          All Projects
        </Link>
        <Link href="/cad-models" className="quick-link-btn">
          Interactive CAD Models
        </Link>
        <Link href="/contact" className="quick-link-btn">
          Contact
        </Link>
      </section>

      <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow">Work Experience</h2>
      <section className="grid md:grid-cols-3 gap-8">
        {workExperiences.map((experience, index) => (
          <div key={`${experience.title}-${index}`} className="project-card flex flex-col gap-4">
            <Image
              src={experience.image}
              alt={`${experience.title} preview`}
              width={400}
              height={240}
              className="w-full h-40 md:h-48 object-contain rounded-md bg-gray-900/40"
            />
            <h3 className="text-2xl font-semibold">{experience.title}</h3>
            <p className="font-semibold">{experience.description}</p>
          </div>
        ))}
      </section>

      <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow">Competitions</h2>
      <section className="grid md:grid-cols-3 gap-8">
        {competitionCards.map((competition, index) => (
          <div key={`${competition.title}-${index}`} className="project-card flex flex-col gap-4">
            <Image
              src={competition.image}
              alt={`${competition.title} preview`}
              width={400}
              height={240}
              className="w-full h-40 md:h-48 object-contain rounded-md bg-gray-900/40"
            />
            <h3 className="text-2xl font-semibold">{competition.title}</h3>
            <p className="font-semibold">{competition.description}</p>
          </div>
        ))}
      </section>


      <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow">Publications</h2>
      <section className="grid md:grid-cols-3 gap-8">
        {publications.map((publication, index) => (
          <div key={`${publication.title}-${index}`} className="project-card flex flex-col gap-4">
            <Image
              src={publication.image}
              alt={`${publication.title} preview`}
              width={400}
              height={240}
              className="w-full h-40 md:h-48 object-contain rounded-md bg-gray-900/40"
            />
            <h3 className="text-2xl font-semibold">{publication.title}</h3>
            <p className="font-semibold">{publication.description}</p>
          </div>
        ))}
      </section>


      <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow">Education:
      </h2>
      <section className="grid md:grid-cols-3 gap-8">
        {education.map((educationItem, index) => (
          <div key={`${educationItem.title}-${index}`} className="project-card flex flex-col gap-4">
            <Image
              src={educationItem.image}
              alt={`${educationItem.title} preview`}
              width={400}
              height={240}
              className="w-full h-40 md:h-48 object-contain rounded-md bg-gray-900/40"
            />
            <h3 className="text-2xl font-semibold">{educationItem.title}</h3>
            <p className="font-semibold">{educationItem.description}</p>
          </div>
        ))}
      </section>


      <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow">Patents</h2>
      <section className="grid md:grid-cols-3 gap-8">
        {patentCards.map((patent, index) => (
          <div key={`${patent.title}-${index}`} className="project-card flex flex-col gap-4">
            <Image
              src={patent.image}
              alt={`${patent.title} preview`}
              width={400}
              height={240}
              className="w-full h-40 md:h-48 object-contain rounded-md bg-gray-900/40"
            />
            <h3 className="text-2xl font-semibold">{patent.title}</h3>
            <p className="font-semibold">{patent.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
