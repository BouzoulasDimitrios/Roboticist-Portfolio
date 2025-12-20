export interface CADModel {
  title: string;
  description: string;
  grabCadUrl: string;
  cameraPosition?: [number, number, number];
  target?: [number, number, number];
  scale?: number;
  modelPath: string; // Path to local .glb file
}

export const cadModels: CADModel[] = [
  {
    title: "Model 1",
    description: "Describe your primary CAD model or assembly here.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/Duck.glb",
    cameraPosition: [1, 1, 2.5],
    target: [0, 0, 0],
    scale: 1,
  },
  
  {
    title: "Model 2",
    description: "Add context for another concept, prototype, or mechanism.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/Duck.glb",
    cameraPosition: [1, 1, 2.5],
    target: [0, 0, 0],
  },
  {
    title: "Model 3",
    description: "Use this slot for a yet-to-be published or experimental CAD file.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/Duck.glb",
    cameraPosition: [1, 1, 2.5],
    target: [0, 0, 0],
  },
  
  {
    title: "Model 4",
    description: "Showcase an additional mechanism, chassis, or tooling concept.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/Duck.glb",
    cameraPosition: [1, 1, 2.5],
    target: [0, 0, 0],
  },
  
  
  {
    title: "Model 5",
    description: "Highlight a component library, tool, or accessory model.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/Duck.glb",
    cameraPosition: [1, 1, 2.5],
    target: [0, 0, 0],
  },

  {
    title: "Model 6",
    description: "Describe an additional CAD asset or assembly.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/Duck.glb",
    cameraPosition: [1, 1, 2.5],
    target: [0, 0, 0],
  },
  // Add more models here...
];
