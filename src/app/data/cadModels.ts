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
    title: "Aboat Autonomous Boat",
    description: "CAD model of the Aboat autonomous boat I worked on. The model was aimed towards showcasing\
    the boat and potential simulation work.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/aboat.glb",
    cameraPosition: [15.88, 36.35, -0.05],
    target: [-3.74, 12.63, -1.07],
    scale: 0.02,
  },
  
  {
    title: "BMX Bike",
    description: "During the process of me learning solidworks, this project helped me gain a \
    better understanding of the software.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/bmx_bike_glb.glb",
    cameraPosition: [-0.47, 0.75, 1.13],
    target: [0.46, 0.34, 0.03],
  },
  {
    title: "1-6 DoF Modular Robotic Arm",
    description: "This robotic arm was developed for educational purposes, currently it's\
    being used in my home university by students to learn robotics, \
    the design allows for fast changes in the number of degrees of freedom as the pieces work like 'lego'.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/multiple_degree_modular_robot_arm_glb.glb",
    cameraPosition: [-0.10, 0.41, 0.23],
    target: [-0.10, 0.0, 0.25],
  },
  
  {
    title: "Modular Robot Arm Prototype",
    description: "This project was done as a prototype to my future work. It achieved it's goal of being\
    minimalistic and modular.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/sample_robotic_arm.glb",
    cameraPosition: [0.16, 0.2, 0.3],
    target: [0.09, 0.18, 0.09],
  },
  
  
  {
    title: "Modular Robot Arm Prototype",
    description: "During my projects the need for standard parts was encountered, after designing them\
     I made them open source to help other engineers avoid the trouble of designing them themselves.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/standard_servo_glb.glb",
    cameraPosition: [0.0, 0.08, 0.15],
    target: [0.02, 0.06, 0.1],
  },

  {
    title: "2 DoF Robotic Arm",
    description: "This project was done through a tutorial at the time of me learning solidworks, it helped\
    me understand the value of templates in the form of 2D sketches, and how to organize and plan somewhat larger designs.",
    grabCadUrl: "https://grabcad.com",
    modelPath: "/models/basic_robotic_arm_glb.glb",
    cameraPosition: [0.46, 0.3, -0.03],
    target: [-0.66, 0, 0],
  },
  // Add more models here...
];
