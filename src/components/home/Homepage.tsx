"use client";

import Link from "next/link";

export default function Homepage() {
  return (
    <div className="flex flex-col gap-12 pb-20">
        
      {/* Hero Section */}
      <section className="project-card">
        <h1 className="text-2xl font-semibold mb-2">Hi, I'm Dimitrios.</h1>
        <h2 className="text-2xl font-semibold mb-2">
          Robotics Engineer | Autonomous Systems & CAD Design
        </h2>
        <p className="font-semibold mb-2">
          Welcome to my personal portfolio. Here you'll find my latest projects,
          interact with CAD models, and get insights into my engineering journey.
        </p>
      </section>
        <h1>Recent Projects:</h1>
      {/* Highlighted Projects */}
      <section className="grid md:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="project-card">
          <h3 className="text-2xl font-semibold mb-2">Autonomous Navigation for Cars (ROS 2)</h3>
          <p className="font-semibold mb-2">
            Developed a robust 2D SLAM solution integrating camera, IMU, and GPS data for real-time autonomous navigation.
          </p>
          <Link href="/projects" className="text-indigo-600 hover:underline">
            Explore Project &rarr;
          </Link>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3 className="text-2xl font-semibold mb-2">Interactive 3D Crane Inspection Robot</h3>
          <p className="text-semibold mb-2">
            Designed and patented an overhead crane inspection device featuring automated defect detection.
          </p>
          <p className="text-indigo-600 hover">
            Yet to be published
          </p>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3 className="text-2xl font-semibold mb-2">Optimized CAD Layouts for Aerospace</h3>
          <p className="font-semibold mb-2">
            Implemented AI-driven algorithms to optimize hangar layouts, enhancing workspace efficiency.
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
        <Link href="/about" className="quick-link-btn">
          About Me
        </Link>
        <Link href="/contact" className="quick-link-btn">
          Contact
        </Link>
      </section>

    </div>
  );
}
