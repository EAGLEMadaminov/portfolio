import React from "react";
import BlogCard from "../components/Helper/BlogCard";

const Blog = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="text-center">
        <p className="heading__mini">My Blog</p>
        <h1 className="heading__primary">
          My Latest <span className="text-yellow-300">Blog</span> and news
        </h1>
      </div>
      <div className="w-[80%] mx-auto pt-[3rem] items-center md:pt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
        <div data-aos="zoom-in" data-aos-anchor-palcement="top-bottom">
          <BlogCard
            title="Fullstack Developer Roadmap"
            comments="4"
            date="24 January 2024"
            image="https://github.com/SajalTalukder/portfolio_yt_2024_starter/blob/main/public/images/b1.jpg?raw=true"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-palcement="top-bottom"
          data-aos-delay="200"
        >
          <BlogCard
            title="Starting with React Js"
            comments="8"
            date="26 January 2024"
            image="https://github.com/SajalTalukder/portfolio_yt_2024_starter/blob/main/public/images/b2.jpg?raw=true"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-palcement="top-bottom"
          data-aos-delay="400"
        >
          <BlogCard
            title="Time Managment in Tech Job"
            comments="4"
            date="29 January 2024"
            image="https://github.com/SajalTalukder/portfolio_yt_2024_starter/blob/main/public/images/b3.jpg?raw=true"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
