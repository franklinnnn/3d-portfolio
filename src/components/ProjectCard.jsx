import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, Icon }) => {
  return (
    <div className="lg:w-[400px] w-full" key={project.name}>
      <div className="block-container w-12 h-12">
        <div className={`btn-back rounded-xl ${project.theme}`} />
        <div className="btn-front rounded-xl flex justify-center items-center">
          <Icon size={20} className="text-white" />
        </div>
      </div>

      <div className="mt-5 flex flex-col">
        <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
        <p className="mt-2 text-slate-500">{project.description}</p>
        <div className="mt-5 flex items-center gap-2 font-poppins">
          <Link
            to={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-secondary"
          >
            Live Link
          </Link>

          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
