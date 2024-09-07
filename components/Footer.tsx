import React from "react";
import { MapIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
        <div>
          <div className="font-logo text-white text-[18px] ">
            <span className="text-[30px] md:text-[40px] text-yellow-400">
              MJ
            </span>
            Tenacious
          </div>
          <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            dolores dolore rem quas. Facere cumque non perferendis a recusandae.
            Corporis dolore esse excepturi doloribus ipsa amet et architecto
            quisquam tempore!
          </h1>
          <p className="mt-[1.3rem] text-yellow-300 underline font-semibold">
            javohirweb99@gmail.com
          </p>
        </div>
        <div className="md:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px] ">
            Quicj link
          </h1>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
            About
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
            Services
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
            Project
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
            Contact
          </p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px] ">
            Address
          </h1>
          <div className="flex items-center mt-[1rem] space-x-1">
            <MapIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px] text-white opacity-75 font-normal">
              Tashkent, Mirzo Ulug&apos;bek
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-1">
            <EnvelopeIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px] text-white opacity-75 font-normal">
              javokhirmadaminov25@gmail.com
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-1">
            <PhoneIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px] text-white opacity-75 font-normal">
              +99894 610 31 10
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70">
        &#169; Copyright webdev eagle 2024
      </div>
    </div>
  );
};

export default Footer;
