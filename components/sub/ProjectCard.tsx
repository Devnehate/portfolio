import Image from "next/image";
import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full max-h-64 object-cover"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <a href={link} className="flex items-center mt-4 text-blue-500 hover:underline">
          <span>View Project</span>
          <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;