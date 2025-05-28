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
    modelPath: "/models/robotic-arm.glb",
  },
  {
    title: "Autonomous Drone Frame",
    description: "Optimized lightweight drone frame for autonomous navigation.",
    grabCadUrl: "https://grabcad.com/library/autonomous-drone-frame",
    modelPath: "/models/drone-frame.glb",
  },
  // Add more models here...
];
