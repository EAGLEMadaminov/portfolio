import React from "react";
import ProjectCard from "./Helper/ProjectCard";
const Project = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900 ">
      <div className="text-center">
        <p className="heading__mini">Recent Works</p>
        <h1 className="heading__primary">
          My Best <span className="text-yellow-300">Projects</span>
        </h1>
      </div>
      <ProjectCard
        title="E-commerce website"
        tech1="React"
        tech2="Next JS"
        tech3="Tailwind"
        tech4="Typescript"
        image="https://github.com/SajalTalukder/portfolio_yt_2024_starter/blob/main/public/images/p1.png?raw=true"
      />
      <ProjectCard
        title="Portfolio Website"
        tech1="React"
        tech2="Next JS"
        tech3="Tailwind"
        tech4="Typescript"
        image="https://github.com/SajalTalukder/portfolio_yt_2024_starter/blob/main/public/images/p2.png?raw=true"
      />
      <ProjectCard
        title="Fullstack Food delivary Webapp"
        tech1="React"
        tech2="Redux"
        tech3="Node JS"
        tech4="MongoDB"
        image="https://github.com/SajalTalukder/portfolio_yt_2024_starter/blob/main/public/images/p4.png?raw=true"
      />
      <ProjectCard
        title="Travel Website"
        tech1="React"
        tech2="Redux"
        tech3="Tailwind"
        tech4="Typescript"
        image="https://github.com/SajalTalukder/portfolio_yt_2024_starter/blob/main/public/images/p3.png?raw=true"
      />
    </div>
  );
};

export default Project;
