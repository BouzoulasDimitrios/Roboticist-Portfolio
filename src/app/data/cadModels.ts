export interface CADModel {
  title: string;
  description: string;
  grabCadUrl: string;
  cameraPosition  ?: { x: number; y: number; z: number };
  target          ?: { x: number; y: number; z: number };
  modelPath: string; // Path to local .glb file
}

export const cadModels: CADModel[] = [
  {
    title: "Aboat Autonomous Boat",
    description: "Describe your primary CAD model or assembly here.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/aboat.glb",
    cameraPosition: { x: 0, y: 2, z: 5 },
    target: { x: 0, y: 0, z: 0 },
  },
  {
    title: "2 DoF Robotic Arm",
    description: "Add context for another concept, prototype, or mechanism.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/basic_robotic_arm_glb.glb",
    cameraPosition: { x: 0.46, y: 0.30, z: -0.03 },
    target: { x: -0.66, y: 0, z: 0 },
  },
  {
    title: "BMX Bike",
    description: "Use this slot for a yet-to-be published or experimental CAD file.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/bmx_bike_glb.glb",
    cameraPosition: { x: -0.47, y: 0.75, z: 1.13 },
    target: { x: 0.46, y: 0.34, z: 0.03 },
  },
  {
    title: "1-6 DoF Modular Robotic Arm",
    description: "Showcase an additional mechanism, chassis, or tooling concept.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/multiple_degree_modular_robot_arm_glb.glb",
    cameraPosition: { x: -0.10, y: 0.41, z: 0.23 },
    target: { x: -0.10, y: 0.00, z: 0.25 },
  },
  // Add more models here...
];
