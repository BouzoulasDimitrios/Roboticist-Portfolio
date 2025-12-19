"use client";

import Image from "next/image";
import Link from "next/link";
import CADViewer from "@/components/cad/CADViewer";

const CARD_PLACEHOLDER = "/images/card-placeholder.svg";
const HERO_CAD_CAMERA_POSITION: [number, number, number] = [-212.42, 124.12, -284.01];
const HERO_CAD_TARGET: [number, number, number] = [-3.64, -43.68, -42.44];

const projectCards = [
  {
    title: "Project 1",
    description: "Give a short overview of your first featured build.",
    href: "/projects",
    linkLabel: "Explore Project →",
    image: CARD_PLACEHOLDER,
  },
  {
    title: "Project 2",
    description: "Share key highlights or impact for the second project.",
    note: "Yet to be published",
    image: CARD_PLACEHOLDER,
  },
  {
    title: "Project 3",
    description: "Describe another showcase-worthy effort or prototype.",
    href: "/projects",
    linkLabel: "Explore Project →",
    image: CARD_PLACEHOLDER,
  },
];

const workExperiences = [
  { title: "Employment", description: "Short description.", image: CARD_PLACEHOLDER },
  { title: "Employment", description: "Short description.", image: CARD_PLACEHOLDER },
  { title: "Employment", description: "Short description.", image: CARD_PLACEHOLDER },
  { title: "Employment", description: "Short description.", image: CARD_PLACEHOLDER },
  { title: "Employment", description: "Short description.", image: CARD_PLACEHOLDER },
  { title: "Employment", description: "Short description.", image: CARD_PLACEHOLDER },
];

const competitionCards = [
  { title: "Competition", description: "Description, placement.", image: CARD_PLACEHOLDER },
  { title: "Competition", description: "Description, placement.", image: CARD_PLACEHOLDER },
  { title: "Competition", description: "Description, placement.", image: CARD_PLACEHOLDER },
];

const patentCards = [
  { title: "Patent", description: "Description.", image: CARD_PLACEHOLDER },
  { title: "Patent", description: "Description.", image: CARD_PLACEHOLDER },
  { title: "Patent", description: "Description.", image: CARD_PLACEHOLDER },
];

export default function Homepage() {
  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Hero Section */}
      <section className="project-card flex flex-col md:flex-row md:items-start gap-6 p-6">
        <Image
          src="/images/profile.png"
          alt="Profile picture"
          width={144}
          height={144}
          className="w-36 h-36 rounded-full object-cover shadow-md"
        />
        <div className="flex flex-col justify-center gap-4 w-full md:pr-36">
          <h1 className="text-3xl font-semibold mb-2">Hi, I'm NAME.</h1>
          <h2 className="text-xl font-semibold mb-2">
            Robotics Engineering | Autonomous Systems | CAD Design
          </h2>
          <p className="font-medium">
            Welcome to my personal portfolio. Here you'll find my latest projects, interact with CAD models, and
            get insights into my engineering journey.
          </p>
          <div>
            <p className="font-semibold mb-3">Signature CAD build:</p>
            <CADViewer modelPath="/models/tesla_2018_model_3.glb" cameraPosition={HERO_CAD_CAMERA_POSITION} target={HERO_CAD_TARGET} />
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
              className="w-full h-40 md:h-48 object-cover rounded-md"
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
              className="w-full h-40 md:h-48 object-cover rounded-md"
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
              className="w-full h-40 md:h-48 object-cover rounded-md"
            />
            <h3 className="text-2xl font-semibold">{competition.title}</h3>
            <p className="font-semibold">{competition.description}</p>
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
              className="w-full h-40 md:h-48 object-cover rounded-md"
            />
            <h3 className="text-2xl font-semibold">{patent.title}</h3>
            <p className="font-semibold">{patent.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
