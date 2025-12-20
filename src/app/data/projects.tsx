export interface Project {
  slug: string;
  title: string;
  description: string;
  detailedDescription: string;
  imageUrl?: string;
  externalUrl?: string;
  published: boolean;
}

const pong = "/images/pong/pong.gif";
const cars = "/images/cars/cars.gif";
const pid = "/images/pid/pid.gif";
const ros1bot = "/images/ros1bot/ros1bot.png";
const bsc_thesis = "/images/bsc_thesis/bsc_thesis.jpg";

export const projects: Project[] = [
  {
    slug: "project-3",
    title: "Strain Gauge Measurement Device",
    description: "Highlight a work-in-progress or exploratory concept.",
    detailedDescription: "Explain goals, progress, lessons learned, and any relevant media for Project 3.",
    imageUrl: bsc_thesis,
    externalUrl: "https://github.com/BouzoulasDimitrios/Strain-measuring-device/",
    published: true,
  },
  {
    slug: "project-3",
    title: "ROS 1 Autonomous Bot",
    description: "Highlight a work-in-progress or exploratory concept.",
    detailedDescription: "Explain goals, progress, lessons learned, and any relevant media for Project 3.",
    imageUrl: ros1bot,
    externalUrl: "https://github.com/BouzoulasDimitrios/ROS-autonomous-bot",
    published: true,
  },
  {
    slug: "project-3",
    title: "PID Tuner for Students",
    description: "Highlight a work-in-progress or exploratory concept.",
    detailedDescription: "Explain goals, progress, lessons learned, and any relevant media for Project 3.",
    externalUrl: "https://github.com/BouzoulasDimitrios/PID-Tuner",
    imageUrl: pid,
    published: true,
  },
  {
    slug: "",
    title: "2D Neat Car Game",
    description: "Outline another key effort—software, hardware, research, or competition entry.",
    detailedDescription: "Add context, methodology, and outcomes for Project 2.",
    imageUrl: cars,
    externalUrl: "https://github.com/BouzoulasDimitrios/Neat-2D-car-game",
    published: true,
  },
  {
    slug: "pong",
    title: "Qlearning Pong in SFML & C++",
    description: "The project utilized C++, SFML, and Q-learning to implement a reinforcement learning agent capable of playing Pong.\
    the agent did not use deep learning techniques but instead relied on a Q-table to learn optimal actions based on the game state.",
    detailedDescription: "Provide an extended narrative, bullet points, media, or results for Project 1.",
    imageUrl: pong,
    externalUrl: "https://github.com/BouzoulasDimitrios/Qlearning-Pong-Workshop-in-Cpp",
    published: true,
  },
  // {
  //   slug: "project-3",
  //   title: "Project 3",
  //   description: "Highlight a work-in-progress or exploratory concept.",
  //   detailedDescription: "Explain goals, progress, lessons learned, and any relevant media for Project 3.",
  //   imageUrl: "/images/projects/aerospace-layout.png",
  //   published: true,
  // },

];
