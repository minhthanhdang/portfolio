

import { ProjectCard } from "./project-card"

const PROJECTS = [
  {
    title: "Total School Platform",
    description1: "Content Management System & Website Builder",
    description2: "Swinburne Capstone Project",
    details: [
      "A web-based solution for schools in Bangladesh.",
      "Our team researched and designed a user-friendly system for non-technical school administrators to manage their teachers, students, and teaching content.",
      "Simple website builder system that translates text content into a fully functional multi-page website.",
      "Implemented front-end with React, back-end with Python and FastAPI."
    ],
    link: null,
    date: "March 2024 - Present"
  },
  {
    title: "Drawing Gameplay",
    description1: "TikTok TechJam Hackathon 2024",
    description2: "Top 9 finalists Australia & New Zealand",
    details: [
      "A web-based streaming platform and multiplayer drawing application.",
      "Leveraged WebRTC and WebSocket technology to build a one-to-many live streaming application.",
      "Developed a web-based multiplayer drawing feature using HTML Canvas and SocketIO.",
    ],
    link: null,
    date: "June 2024 - August 2024"
  },
  {
    title: "AI Academic Feedback Assistant",
    description1: "HackAI - Dell & NVIDIA Challenge",
    description2: "",
    details: [
      "An NVIDIA AI Workbench native application that automates academic marking and feedback workflow in a medium GPU environment. Developed with Docker, Phi-3, Gradio, and LangChain.",
      "Applied prompt engineering with Phi-3-mini-4k-instruct to read documents, correlate with marking requirements, and generate detailed feedback.",
      "Built a single page application front-end with Gradio.",
      "Containerized and automated build process with Docker & NVIDIA AI Workbench scripts."
    ],
    link: null,
    date: "August 2024 – October 2024"
  },
  {
    title: "VCT Esports Manager",
    description1: "VCT Esports Manager Challenge – AWS x Riot Games Hackathon",
    description2: "",
    details: [
      "Engineered an AI Chatbot web-application to answer specific questions about Valorant and visualize professional players’ statistics and in-game performance.",
      "Constructed a pipeline to process ~1TB of data of JSON formatted events into relational data.",
      "Built an AI Agent with AWS Bedrock using Claude 3 Sonnet with routing to Lambda function for retrieving data in S3 bucket and to Serverless OpenSearch Vector Store for RAG.",
      "Front-end developed with Next, Tailwind, deployed a cost-effective and highly available solution on AWS EC2 and domain management with Route53 hosted zones."
    ],
    link: null,
    date: "October 2024"
  }
]

export const ProjectSection = () => {
  return (
    <div className="w-full">
      <div className="font-bold text-[28px]">
        Recent Projects
      </div>
      <div className="mt-4 flex flex-col gap-5">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description1={project.description1}
            description2={project.description2}
            details={project.details}
            link={project.link}
            date={project.date}
          />
        ))}
      </div>
    </div>
  )
}