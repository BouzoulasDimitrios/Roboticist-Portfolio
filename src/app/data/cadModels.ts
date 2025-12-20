export interface CADModel {
  title: string;
  description: string;
  grabCadUrl: string;
  modelPath: string; // Path to local .glb file
}

export const cadModels: CADModel[] = [
  {
    title: "Aboat Autonomous Boat",
    description: "Describe your primary CAD model or assembly here.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/aboat.glb",
  },
  {
    title: "2 DoF Robotic Arm",
    description: "Add context for another concept, prototype, or mechanism.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/basic_robotic_arm_glb.glb",
  },
  {
    title: "BMX Bike",
    description: "Use this slot for a yet-to-be published or experimental CAD file.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/bmx_bike_glb.glb",
  },
  {
    title: "1-6 DoF Modular Robotic Arm",
    description: "Showcase an additional mechanism, chassis, or tooling concept.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/multiple_degree_modular_robot_arm_glb.glb",
  },
  // Add more models here...
];
