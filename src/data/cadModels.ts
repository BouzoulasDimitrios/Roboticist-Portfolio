export interface CADModel {
  title: string;
  description: string;
  grabCadUrl: string;
  modelPath: string; // Path to local .glb file
}

export const cadModels: CADModel[] = [
  {
    title: "Model 1",
    description: "Describe your primary CAD model or assembly here.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/Duck.glb",
  },
  {
    title: "Model 2",
    description: "Add context for another concept, prototype, or mechanism.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/Duck.glb",
  },
  {
    title: "Model 3",
    description: "Use this slot for a yet-to-be published or experimental CAD file.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/Duck.glb",
  },
  {
    title: "Model 4",
    description: "Showcase an additional mechanism, chassis, or tooling concept.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/Duck.glb",
  },
  // Add more models here...
];
