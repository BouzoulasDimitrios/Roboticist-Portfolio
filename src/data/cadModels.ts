export interface CADModel {
  title: string;
  description: string;
  grabCadUrl: string;
  modelPath: string; // Path to local .glb file
}

export const cadModels: CADModel[] = [
  {
    title: "Robotic Arm Assembly",
    description: "6-DOF robotic arm designed for precision manipulation.",
    grabCadUrl: "https://grabcad.com/library/robotic-arm-assembly",
    modelPath: "/models/Duck2.glb",
  },
  {
    title: "Autonomous Drone Frame",
    description: "Optimized lightweight drone frame for autonomous navigation.",
    grabCadUrl: "https://grabcad.com/library/autonomous-drone-frame",
    modelPath: "/models/Duck.glb",
  },
  {
    title: "Underwater Inspection Rover",
    description: "Pressure-rated rover for hull inspections and sonar mapping.",
    grabCadUrl: "https://grabcad.com/library/underwater-inspection-rover",
    modelPath: "/models/Duck2.glb",
  },
  {
    title: "Quadruped Research Platform",
    description: "Four-legged robot concept with swappable sensor payloads.",
    grabCadUrl: "https://grabcad.com/library/quadruped-research-platform",
    modelPath: "/models/Duck.glb",
  },
  // Add more models here...
];
