"use client";

import Link from "next/link";

export default function Homepage() {
  return (
    <div className="flex flex-col gap-12 pb-20">
        
      {/* Hero Section */}
      <section className="project-card flex flex-col md:flex-row items-center gap-6 p-6">
      <img
        src="/images/profile.png"
        alt="Profile picture"
        className="w-36 h-36 rounded-full object-cover shadow-md"
      />
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-semibold mb-2">Hi, I'm NAME.</h1>
        <h2 className="text-xl font-semibold mb-2">
          Robotics Engineering | Autonomous Systems | CAD Design
        </h2>
        <p className="font-medium">
          Welcome to my personal portfolio. Here you'll find my latest projects,
          interact with CAD models, and get insights into my engineering journey.
        </p>
      </div>
    </section>

        <h1>Recent Projects:</h1>
      {/* Highlighted Projects */}
      <section className="grid md:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="project-card">
          <h3 className="text-2xl font-semibold mb-2">Project name</h3>
          <p className="font-semibold mb-2">
            Short project description.
          </p>
          <Link href="/projects" className="text-indigo-600 hover:underline">
            Explore Project &rarr;
          </Link>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3 className="text-2xl font-semibold mb-2">Project name</h3>
          <p className="text-semibold mb-2">
            Short project description.
          </p>
          <p className="text-indigo-600 hover">
            Yet to be published
          </p>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3 className="text-2xl font-semibold mb-2">Project name</h3>
          <p className="font-semibold mb-2">
            Short project description.
          </p>
          <Link href="/projects" className="text-indigo-600 hover:underline">
            Explore Project &rarr;
          </Link>
        </div>
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

      <h1>Work Experience:</h1>

      <section className="grid md:grid-cols-3 gap-8">
        {/* Employment 1 */}
        <div className="project-card">
          <h3 className="text-2xl font-semibold mb-2">Employment</h3>
          <p className="font-semibold mb-2">
            Short description.
          </p>
        </div>

        {/* Employment 2 */}
        <div className="project-card">
          <h3 className="text-2xl font-semibold mb-2">Employment</h3>
          <p className="text-semibold mb-2">
            Short description.
          </p>
        </div>

        {/* Employment 3 */}
        <div className="project-card">
          <h3 className="text-2xl font-semibold mb-2">Employment</h3>
          <p className="font-semibold mb-2">
            Short description.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {/* Employment 1 */}
        <div className="project-card">
          <h3 className="text-2xl font-semibold mb-2">Employment</h3>
          <p className="font-semibold mb-2">
            Short description.
          </p>
        </div>

        {/* Employment 2 */}
        <div className="project-card">
          <h3 className="text-2xl font-semibold mb-2">Employment</h3>
          <p className="text-semibold mb-2">
            Short description.
          </p>
        </div>

        {/* Employment 3 */}
        <div className="project-card">
          <h3 className="text-2xl font-semibold mb-2">Employment </h3>
          <p className="font-semibold mb-2">
            Short description.
          </p>
        </div>
      </section>

      <h1>Competitions:</h1>
        <section className="grid md:grid-cols-3 gap-8">
          {/* Competition 1 */}
          <div className="project-card">
            <h3 className="text-2xl font-semibold mb-2">Competition</h3>
            <p className="font-semibold mb-2">
              Description, placement.
            </p>
          </div>

          {/* Competition 2 */}
          <div className="project-card">
            <h3 className="text-2xl font-semibold mb-2">Competition</h3>
            <p className="text-semibold mb-2">
              Description, placement.
            </p>
          </div>

          {/* Competition 3 */}
          <div className="project-card">
            <h3 className="text-2xl font-semibold mb-2">Competition</h3>
            <p className="font-semibold mb-2">
              Description, placement.
            </p>
          </div>
        </section>

      <h1>Patents:</h1>
        <section className="grid md:grid-cols-3 gap-8">
          {/* Patent 1 */}
          <div className="project-card">
            <h3 className="text-2xl font-semibold mb-2">Patent</h3>
            <p className="font-semibold mb-2">
              Description.
            </p>
          </div>

          {/* Patent 2 */}
          <div className="project-card">
            <h3 className="text-2xl font-semibold mb-2">Patent</h3>
            <p className="text-semibold mb-2">
              Description.
            </p>
          </div>

          {/* Patent 3 */}
          <div className="project-card">
            <h3 className="text-2xl font-semibold mb-2">Patent</h3>
            <p className="font-semibold mb-2">
              Description.
            </p>
          </div>
        </section>


    </div>
  );
}
