import React from "react";
import ProjectCard from "../sub/ProjectCard";

import Impeto from "@/components/assets/projects/impeto.png";

import JDConstrucoes from "@/components/assets/projects/JDconstrucoes.png";
import JDDashboard from "@/components/assets/projects/JDDashboard.png";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mb-20 md:mb-32 z-40"
      id="projects"
    >
      <h1 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-3xl md:text-[40px]">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src={JDConstrucoes.src}
          title="JDConstrucoes Website"
          description="Built a Next.js website for JDConstrucoes showcasing construction projects, contact details, and the company's process."
        />

        <ProjectCard
          src={Impeto.src}
          title="Ímpeto E-commerce"
          description="Developed a full Next.js e-commerce with product categories, Stripe payments, order tracking, and more."
        />

        <ProjectCard
          src={JDDashboard.src}
          title="JDConstrucoes Admin Dashboard"
          description="Created a Next.js admin dashboard for JDConstrucoes with privileges, image management, email automation, feedback tracking, and more."
        />
      </div>
    </div>
  )
}

export default Projects