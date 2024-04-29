import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mb-20 md:mb-32 z-40"
      id="projects"
    >
      <h1 className="font-semibold text-transparent bg-clip-text 
      bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-3xl 
      md:text-[40px]">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row 
      justify-center items-center gap-10 px-10">
        <ProjectCard
          src={""}
          title="Project 01"
          description="example project 01"
        />

        <ProjectCard
          src={""}
          title="Project 02"
          description="example project 02"
        />

        <ProjectCard
          src={""}
          title="Project 03"
          description="example project 03"
        />
      </div>
    </div>
  )
}

export default Projects