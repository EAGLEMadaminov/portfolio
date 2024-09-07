import React, { useEffect, useState } from "react";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      }
      if (window.scrollY < 90) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
  }, []);

  const stickyStyle = navSticky ? "bg-[#212428] shadow-gray-900 shadow-sm" : "";

  return (
    <div
      className={`fixed w-full z-[1000] transition-all duration-300 ${stickyStyle}`}
    >
      <div className="flex items-center h-[12vh] justify-between w-[80%] mx-auto">
        <div className="font-logo text-white text-[18px]">
          <span className="text-[30px] md:text-[40px] text-yellow-400">MJ</span>
          Tenacious
        </div>
        <ul className="md:flex hidden items-center space-x-10">
          <li>
            <a className="nav__link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <Bars3CenterLeftIcon
          onClick={openNav}
          className="h-[2.3rem] rotate-180 w-[2.3rem] text-white cursor-pointer md:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;
