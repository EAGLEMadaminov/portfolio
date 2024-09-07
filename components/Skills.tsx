import React from "react";
import SkillCard from "./Helper/SkillCard";

const Skills = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black ">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
        <div className="col-span-3">
          <p className="heading__mini">My Skills</p>
          <h1 className="heading__primary">
            Let&apos;s Explor Popular{" "}
            <span className="text-yellow-300">Skills</span> & Experience
          </h1>
          <p className="text-white text-[15px] opacity-70 my-[1.5rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, saepe inventore. Maxime veritatis architecto voluptate!
            Laboriosam corporis quaerat qui incidunt tempora, est accusamus
            mollitia ipsa.
          </p>
          <button className="relative flex w-40 h-[50px] items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
            <span className="relative z-10">Learn More</span>
          </button>
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 items-center gap-[1rem]">
            <div data-aos="flip-left" data-aos-anchor-palcement="top-center">
              <SkillCard
                title="HTML"
                image="https://raw.githubusercontent.com/SajalTalukder/portfolio_yt_2024_starter/de448d945a36d6d73303d15694680c7a0157497a/public/images/html.svg"
                percent="90%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-palcement="top-center"
              data-aos-delay="200"
            >
              <SkillCard
                title="CSS"
                image="https://raw.githubusercontent.com/SajalTalukder/portfolio_yt_2024_starter/de448d945a36d6d73303d15694680c7a0157497a/public/images/css.svg"
                percent="80%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-palcement="top-center"
              data-aos-delay="400"
            >
              <SkillCard
                title="JavaScript"
                image="https://raw.githubusercontent.com/SajalTalukder/portfolio_yt_2024_starter/de448d945a36d6d73303d15694680c7a0157497a/public/images/js.svg"
                percent="77%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-palcement="top-center"
              data-aos-delay="600"
            >
              <SkillCard
                title="Typescript"
                image="https://raw.githubusercontent.com/SajalTalukder/portfolio_yt_2024_starter/de448d945a36d6d73303d15694680c7a0157497a/public/images/ts.svg"
                percent="60%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-palcement="top-center"
              data-aos-delay="800"
            >
              <SkillCard
                title="React"
                image="https://raw.githubusercontent.com/SajalTalukder/portfolio_yt_2024_starter/de448d945a36d6d73303d15694680c7a0157497a/public/images/react.svg"
                percent="90%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-palcement="top-center"
              data-aos-delay="1000"
            >
              <SkillCard
                title="Redux"
                image="https://www.svgrepo.com/show/303557/redux-logo.svg"
                percent="70%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-palcement="top-center"
              data-aos-delay="1200"
            >
              <SkillCard
                title="Node JS"
                image="https://raw.githubusercontent.com/SajalTalukder/portfolio_yt_2024_starter/de448d945a36d6d73303d15694680c7a0157497a/public/images/node.svg"
                percent="70%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-palcement="top-center"
              data-aos-delay="1400"
            >
              <SkillCard
                title="MongoDB"
                image="https://raw.githubusercontent.com/SajalTalukder/portfolio_yt_2024_starter/de448d945a36d6d73303d15694680c7a0157497a/public/images/mongo.svg"
                percent="65%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
