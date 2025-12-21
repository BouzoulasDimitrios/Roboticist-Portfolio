"use client";

import Image from "next/image";
import Link from "next/link";
import CADViewer from "@/components/cad/CADViewer";

const HERO_CAD_CAMERA_POSITION: [number, number, number] = [-212.42, 124.12, -284.01];
const HERO_CAD_TARGET: [number, number, number] = [-3.64, -43.68, -42.44];

// image files
const CARD_PLACEHOLDER = "/images/card-placeholder.svg";
const thesis_architecture_image = "/images/thesis_architecture/architecture.png";
const object_reconstruction_image = "/images/sfm_hackathon/rl.png";
const junction_image = "/images/junction/drone_moving_advanced.gif";
const bsc_thesis = "/images/bsc_thesis/bsc_thesis.jpg";
const novia = "/images/novia/opcua-fmu-simulation.png";
const aboat = "/images/aboat/aboat.png";
const KTH = "/images/KTH/KTH.png"; 
const thesis_img = "/images/thesis_images/thesis_images.png";
const defense_hackathon = "/images/defense_hackathon/cdefense.jpeg";
const ocid = "/images/ocid/ocid.png";
const bfmc = "/images/bfmc/bfmc.jpg";
const profile = "/images/profile/profile.jpeg";

//education
const bachelor_degree_image = "/images/bachelors_graduation/graduation_cropped.jpeg";
const cpp_summer = "/images/cpp_summer/cpp_summer.jpeg";
const oxford = "/images/oxford/oxford.jpeg";
const msc = "/images/msc/msc_cropped.jpeg";


//for projects not published yet simply remove the hyperlink and linklabel and add a note field
/**
remove:
  href: "/projects",
  linkLabel: "Explore Project →",
add:
  note: "Yet to be published",
 */
const projectCards = [
  {
    title: "Research: Low-Light Pedestrian Detection",
    description: "Developed and a pipeline for automated pedestrian labeling in low-light conditions using thermal and RGB image pairs.",
    href: "https://github.com/BouzoulasDimitrios/IR-RGB-autoamed-low-light-pedestrian-labelling",
    linkLabel: "Explore Project →",
    image: thesis_architecture_image,
  },
  {
    title: "Hackathon: Drone Tracking and Trajectory Prediction",
    description: "During Junction 2025 our team developed a system for drone detection, tracking, and propeller RPM measurement using raw event camera footage.",
    href: "https://github.com/BouzoulasDimitrios/Junction-2025-academic-menaces/tree/main",
    linkLabel: "Explore Project →",
    image: junction_image,
  },
  {
    title: "Hackathon: 3D Object Reconstruction",
    description: "Using a webcam, a robotic arm, and a rotating base, for data gathering, structure from motion was used to create 3D models of objects.",
    href: "https://github.com/BouzoulasDimitrios/Aalto-AI-and-Robotics-Oct-25",
    linkLabel: "Explore Project →",
    image: object_reconstruction_image,
  },
];

const workExperiences = [


  { title: "Aalto University: PhD Researcher", 
    description: <>Working on autonomous vehicle perception in adverse weather conditions. Current research targets automated labelling in low-light conditions
    implemented on a real research vehicle.<br/>
    From ~August 2025 to present.<br/>
    Master's thesis worker:<br/>
    From ~November 2024 to ~August 2025.
    </>, 
    image: thesis_img },
  
  { title: "KTH Royal Institute of Technology: Exchange Researcher", 
    description: <>Worked on applying and testing optimization algorithms evaluating real 
    time compliance on moving-horizon and simultaneous input-and-state estimation problems.<br/> 
    From ~August 2024 to ~October 2024.
    </>, 
    image: KTH },
  
  { title: "Novia University: Project Researcher (Machine Learning)", 
    // description: "Worked on perception, machine learning, and optimization tasks related to maritime applications\
    // contributed to the development of " + (asfd)[https://github.com/BouzoulasDimitrios/Aalto-AI-and-Robotics-Oct-25],
      description: (
    <>
      Worked on perception, machine learning, and optimization tasks related to maritime applications.
      Contributed to the development of 
      <a
        href="https://github.com/Novia-RDI-Seafaring/mh-sise-py"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#1a73e8", textDecoration: "underline" }}
      >
        MH-SISE 
      </a>
      
       and  
      <a
        href="https://github.com/Novia-RDI-Seafaring/FMUiL"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#1a73e8", textDecoration: "underline" }}
      >
        FMUiL
      </a>
      .<br/>
    From ~October 2022 to ~June 2025.
    </>
  ),
      image: novia },
  
  { title: "Abo Akademi: Embeded Systems Developer", 
  description:<> Worked on the development and advancement of Abo Akademi's autonomous boat project 'Aboat'. \
  improved existing autonomy stack, added tests, and developed an original dynamic positionining algorithm for the boat.<br/> From ~March 2022 to ~October 2022.</>, 
  image: aboat },

  { title: "University of Peloponnese: Lab Assistant", 
  description: <>Assisted in experiments, 3D printing application, equipment maintenance and development of 
  lab resources for material strength testing related applications. <br/>From ~February 2019 to ~February 2022.</>, 
  image: bsc_thesis },

  // { title: "Employment", description: "Short description.", image: CARD_PLACEHOLDER },
  // { title: "Employment", description: "Short description.", image: CARD_PLACEHOLDER },
  // { title: "Employment", description: "Short description.", image: CARD_PLACEHOLDER },
];

const competitionCards = [
  { title: "Junction 2025", 
    description: <>Placement: 1st <br/> Our team developed a system for drone detection, 
    tracking, and individual propeller RPM measurement using raw event camera footage.<br/>
    Github:       <a
        href="https://github.com/BouzoulasDimitrios/Junction-2025-academic-menaces"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#1a73e8", textDecoration: "underline" }}
      >link</a>
    </>
    , 
    image: junction_image },
    
  { title: "Aalto Robotics & AI Hackathon", 
    description: <>Placement: - | Nomination won: "Best Github Repo" <br/> Using a webcam, a robotic arm,
     and a rotating base, for data gathering, structure from motion was used to create 3D models of objects.<br/>
     Github:       <a
        href="https://github.com/BouzoulasDimitrios/Aalto-AI-and-Robotics-Oct-25"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#1a73e8", textDecoration: "underline" }}
      >link</a>
     </>, 
    image:  object_reconstruction_image},
  
  { title: "Aalto Defense Hackathon", 
    description: <>Placement: 3rd <br/> Our team developed an app for real-time communication and resource sharing 
    between civilians and government for times of crisis.<br/>
    Github: confidential
    </>,  
    image: defense_hackathon },

  { title: "Bosch future mobility challenge (BFMC) 2023", 
    description: <>Placement: 6th/80 <br/>Role: Team leader<br/> Our team developed an autonomous 1/10 scale vehicle autonomous capabilities. 
    My responsibilities were coordinating the team and integrating componenets to the architecture.
    Main contributions: Location based navigation module, traffic logic module, sensor setup, object localization.<br/>
    Github: confidential
    </>,  
    image: bfmc },


  ];

const publications = [
  { title: "Automatic Labelling for Low-Light Pedestrian Detection", 
    description: <>Using IR-RGB image pairs a pipeline was developed that is 
    capable of producing labels for the RGB images that outperform ground 
    truth labels in low-light pedestriand detection tasks in most cases 
    </>, 
    image: thesis_architecture_image },
  
    { title: "On the Real-Time Compliance of Moving-Horizon Simultaneous Input-and-State Estimation Problems", 
    description: <>  This paper evaluates whether moving-horizon simultaneous input-and-state estimation (MH-SISE) 
    can meet strict real-time constraints for fast 
    dynamical systems by using solver code generation instead of conventional numerical optimization. 
    </>, 
    image: KTH },

  { title: "Overhead Crane Inspection Device", 
    description: <> This study presents a portable overhead-crane inspection device that combines a robotic arm, web-based camera streaming, 
    and a machine-learning audio pre-screening method to improve safety and reduce inspection time. 
    In trials, it successfully inspected 14 of 20 target components without requiring a manlift, 
    with future work proposed around OPC UA–based automation and expanding the dataset to strengthen ML performance.
    </>, 
    image: ocid },
];


const education = [

  { title: "MSc: Mechanical Engineering - Aalto University", 
    description: <>GPA: 4.82/5<br/>
    Acomplishments: Dean's List 2024 & 2025<br/>
    Minor: Computer Science<br/>
    Primary focus during the degree was autonomous mobile robotics. Involving a range of tasks, such as perception, state estimation, control, and system integration. <br/>  
    </>, 
    image: msc },


  { title: "Summer School: Machine Learning on Representation Learning and Generative AI - Oxford University", 
    description: <>Organized by: AI for Global Goals <br/>
    The summer school covered a range of topics regarding generative AI and representation learning application in a diverse set of fields. <br/> 
    </>, 
    image: oxford },


  { title: "Summer School: Software design using C++ from the inventor of C++ - Aarhus University", 
    description: <> The summer school went through a diverse range of topics regarding modern C++ software design and best practices taught by Bjarne Stroustrup, the inventor of C++. <br/> 
    </>, 
    image: cpp_summer },


  { title: "BSc in Mechanical Engineering - University of Peloponnese", 
    description: <>GPA: 7.8/10 <br/> 
    Acomplishments: Highest GPA in my graduation class (Valedictorian equivelent) <br/>
    Main focus: Embedded systems, Electronics, 3D printing applications, CAD design, and material strength testing. <br/>
    </>, 
    image: bachelor_degree_image },
  // { title: "Overhead Crane Inspection Device", 
  //   description: <> <br/> 
  //   </>, 
  //   image: ocid },
];


const patentCards = [
  { title: "Overhead Crane Inspection Device", 
    description: <> The development of the device took place during the mechatronics project course at Aalto University, 
    the device enables the remote inspection of overhead cranes, allows for data recording and has the ability to perform audio based evaluation of 
    the crane using audio recordings.<br/>
    Serial No. FI 20247053, Finnish Patent and Registration Office (Pending)<br/> 
    </>, 
    image: ocid },
];

export default function Homepage() {
  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Hero Section */}
      <section className="project-card flex flex-col md:flex-row md:items-start gap-6 p-6">
        <Image
          src= {profile}
          alt="Profile picture"
          width={144}
          height={144}
          className="w-36 h-36 rounded-full object-cover shadow-md"
        />
        <div className="flex flex-col justify-center gap-4 w-full md:pr-36">
          <h1 className="text-3xl font-semibold mb-2">Hi, I'm Dimitrios Bouzoulas.</h1>
          <h2 className="text-xl font-semibold mb-2">
            Robotics Engineering | Autonomous Systems | CAD Design
          </h2>
          <p className="font-medium">
            Welcome to my personal portfolio. Here you'll find my latest projects, interact with CAD models, and
            get insights into my engineering journey.
          </p>
          <div>
            <p className="font-semibold mb-3">Signature CAD build:</p>
            <CADViewer modelPath="/models/tesla_2018_model_3.glb" cameraPosition={HERO_CAD_CAMERA_POSITION} target={HERO_CAD_TARGET} />
          </div>
        </div>
      </section>

      <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow">Recent Work</h2>
      <section className="grid md:grid-cols-3 gap-8">
        {projectCards.map((project, index) => (
          <div key={`${project.title}-${index}`} className="project-card flex flex-col gap-4">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              width={400}
              height={240}
              className="w-full h-40 md:h-48 object-contain rounded-md bg-gray-900/40"
            />
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="font-semibold">{project.description}</p>
            {project.href ? (
              <Link href={project.href} className="text-indigo-600 hover:underline font-medium">
                {project.linkLabel}
              </Link>
            ) : (
              <p className="text-indigo-600 font-medium">{project.note}</p>
            )}
          </div>
        ))}
      </section>

      {/* Quick-links Section */}
      <section className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <Link href="/projects" className="quick-link-btn">
          All Projects
        </Link>
        <Link href="/cad-models" className="quick-link-btn">
          Interactive CAD Models
        </Link>
        <Link href="/contact" className="quick-link-btn">
          Contact
        </Link>
      </section>

      <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow">Work Experience</h2>
      <section className="grid md:grid-cols-3 gap-8">
        {workExperiences.map((experience, index) => (
          <div key={`${experience.title}-${index}`} className="project-card flex flex-col gap-4">
            <Image
              src={experience.image}
              alt={`${experience.title} preview`}
              width={400}
              height={240}
              className="w-full h-40 md:h-48 object-contain rounded-md bg-gray-900/40"
            />
            <h3 className="text-2xl font-semibold">{experience.title}</h3>
            <p className="font-semibold">{experience.description}</p>
          </div>
        ))}
      </section>

      <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow">Competitions & Hackathons</h2>
      <section className="grid md:grid-cols-3 gap-8">
        {competitionCards.map((competition, index) => (
          <div key={`${competition.title}-${index}`} className="project-card flex flex-col gap-4">
            <Image
              src={competition.image}
              alt={`${competition.title} preview`}
              width={400}
              height={240}
              className="w-full h-40 md:h-48 object-contain rounded-md bg-gray-900/40"
            />
            <h3 className="text-2xl font-semibold">{competition.title}</h3>
            <p className="font-semibold">{competition.description}</p>
          </div>
        ))}
      </section>


      <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow">Recent Publications (more on Google Scholar: <a
        href="https://scholar.google.com/citations?user=RYevT2AAAAAJ&hl=el&authuser=1"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#1a73e8", textDecoration: "underline" }}
      >link</a>):
      </h2>
      <section className="grid md:grid-cols-3 gap-8">
        {publications.map((publication, index) => (
          <div key={`${publication.title}-${index}`} className="project-card flex flex-col gap-4">
            <Image
              src={publication.image}
              alt={`${publication.title} preview`}
              width={400}
              height={240}
              className="w-full h-40 md:h-48 object-contain rounded-md bg-gray-900/40"
            />
            <h3 className="text-2xl font-semibold">{publication.title}</h3>
            <p className="font-semibold">{publication.description}</p>
          </div>
        ))}
      </section>


      <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow">Education:
      </h2>
      <section className="grid md:grid-cols-3 gap-8">
        {education.map((educationItem, index) => (
          <div key={`${educationItem.title}-${index}`} className="project-card flex flex-col gap-4">
            <Image
              src={educationItem.image}
              alt={`${educationItem.title} preview`}
              width={400}
              height={240}
              className="w-full h-40 md:h-48 object-contain rounded-md bg-gray-900/40"
            />
            <h3 className="text-2xl font-semibold">{educationItem.title}</h3>
            <p className="font-semibold">{educationItem.description}</p>
          </div>
        ))}
      </section>


      <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow">Patents</h2>
      <section className="grid md:grid-cols-3 gap-8">
        {patentCards.map((patent, index) => (
          <div key={`${patent.title}-${index}`} className="project-card flex flex-col gap-4">
            <Image
              src={patent.image}
              alt={`${patent.title} preview`}
              width={400}
              height={240}
              className="w-full h-40 md:h-48 object-contain rounded-md bg-gray-900/40"
            />
            <h3 className="text-2xl font-semibold">{patent.title}</h3>
            <p className="font-semibold">{patent.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
