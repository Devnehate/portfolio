import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/chatapp.webp"
          title="AI Chat App"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/uberclone.png"
          title="Uber"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/ecommerce.jpg"
          title="E-Commerce Application"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <a href="https://github.com/Devnehate" className="flex flex-row items-center gap-3 button-primary cursor-pointer rounded-lg min-w-52 justify-center mt-10">
        <button className="py-2 text-center text-white">
          More Projects
        </button>
        <ArrowTopRightOnSquareIcon className="text-[#cbbdf5] h-5 w-5" />
      </a>
    </div>
  );
};

export default Projects;