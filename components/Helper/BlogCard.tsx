import Image from "next/image";
import React from "react";
import {
  CalendarIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";

interface Props {
  title: string;
  date: string;
  comments: string;
  image: string;
}

const BlogCard = ({ title, date, comments, image }: Props) => {
  return (
    <div className="bg-gray-900">
      <div>
        <Image
          src={`${image}`}
          alt={title}
          width={300}
          height={300}
          className="object-cover w-[100%] h-[100%]"
        />
      </div>
      <div className="p-4">
        <div className="mt-[1rem] mb-[1rem] px-3 py-1 bg-gray-800 w-full flex items-center space-x-2 rounded-lg">
          <CalendarIcon className="w-[1rem] h-[1rem] text-yellow-400" />
          <p className="text-white text-[14px] opacity-85">{date}</p>
        </div>
        <h1 className="text-[20px] opacity-85 hover:text-yellow-400 transition-all duration-200 text-white cursor-pointer underline font-semibold">
          {title}
        </h1>
        <div className="flex items-center mt-[2rem] justify-between">
          <div className="flex items-center space-x-3">
            <ChatBubbleLeftRightIcon className="w-[1.2rem] h-[1.2rem] text-yellow-400" />
            <p className="text-[15px] text-white opacity-85">
              {comments} Comments
            </p>
          </div>
          <button className="text-[15px] hover:text-yellow-500 transition-all duration-150 text-white font-semibold underline">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
