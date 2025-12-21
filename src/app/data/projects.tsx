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
    slug: "StrainGaugeMeasurementDevice",
    title: "Strain Gauge Measurement Device",
    description: "The device was developed as part of my BSc thesis project. It is able to measure 3 strain gauges simultaneously,\
    store the data, and display it in a user-friendly GUI phone application.",
    detailedDescription: "Explain goals, progress, lessons learned, and any relevant media for Project 3.",
    imageUrl: bsc_thesis,
    externalUrl: "https://github.com/BouzoulasDimitrios/Strain-measuring-device/",
    published: true,
  },
  {
    slug: "ROS1AutonomousBot",
    title: "ROS 1 Autonomous Bot",
    description: "This project was developed during my time learning ROS1. It involves an autonomous robot capable of navigating \
    and avoiding obstacles using LIDAR. and performing SLAM for mapping and localization.",
    detailedDescription: "Explain goals, progress, lessons learned, and any relevant media for Project 3.",
    imageUrl: ros1bot,
    externalUrl: "https://github.com/BouzoulasDimitrios/ROS-autonomous-bot",
    published: true,
  },
  {
    slug: "PIDTuner",
    title: "PID Tuner for Students",
    description: "This project was aimed towards helping students understand and tune PID controllers. \
    additionally, it allowed me to practice my skills with the fasthtml framework.",
    detailedDescription: "Explain goals, progress, lessons learned, and any relevant media for Project 3.",
    externalUrl: "https://github.com/BouzoulasDimitrios/PID-Tuner",
    imageUrl: pid,
    published: true,
  },
  {
    slug: "2DNeatCarGame",
    title: "2D Neat Car Game",
    description: "Using the NEAT algorithm, this project involved training AI agents to autonomously navigate a 2D car game environment. \
    The game is a simple top-down racing scenario where the AI learns to avoid vehicles going slower than itself using a 5 ray lidar sensor.\
    This project helped me understand how to tune an evolutionary algorithm and apply it to a practical problem. ",
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

  {
    slug: "StockPricePredictionApp",
    title: "Stock price prediction app",
    description: "A simple LSTM based app for predicting stock prices one day into the future, more specifically the next closing price.",
    detailedDescription: "Explain goals, progress, lessons learned, and any relevant media for Project 3.",
    imageUrl: "/images/stocks/stocks.gif",
    externalUrl: "https://github.com/BouzoulasDimitrios/Stock-price-prediction-app",
    published: true,
  },
  
  {
    slug: "GameOfLifeSFML",
    title: "Conway's Game of Life",
    description: "This functioned as a practice project to familiarize myself with the SFML library.",
    detailedDescription: "Explain goals, progress, lessons learned, and any relevant media for Project 3.",
    imageUrl: "/images/gol/gol.gif",
    externalUrl: "https://github.com/BouzoulasDimitrios/Game-of-Life",
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
