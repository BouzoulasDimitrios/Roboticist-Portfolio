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
    slug: "autonomous-navigation-ros2",
    title: "Autonomous Navigation for Cars (ROS 2)",
    description: "Robust 2D SLAM solution integrating camera, IMU, and GPS.",
    detailedDescription:
      "Detailed explanation, results, images, and technical specifics about the ROS 2 SLAM project.",
    imageUrl: "/images/projects/ros2-navigation.png",
    published: true,
  },
  {
    slug: "crane-inspection-robot",
    title: "Interactive 3D Crane Inspection Robot",
    description: "Automated defect detection for overhead cranes.",
    detailedDescription:
      "Full description, images, CAD models, and patent details.",
    imageUrl: "/images/projects/crane-robot.png",
    published: false, // not published yet
  },
  {
    slug: "optimized-aerospace-layouts",
    title: "Optimized CAD Layouts for Aerospace",
    description: "AI-driven hangar layout optimizations.",
    detailedDescription:
      "Detailed explanation, approach, images, and visualizations.",
    imageUrl: "/images/projects/aerospace-layout.png",
    published: true,
  },
];
