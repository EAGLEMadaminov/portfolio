import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const NavMovile = ({ closeNav, showNav }: Props) => {
  const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      <div
        className={`${navOpenStyle} fixed top-0 transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]`}
      ></div>
      <ul
        className={` ${navOpenStyle} text-white flex items-center fixed flex-col justify-center h-[100%] transform transition-all  duration-300 delay-300 w-[60%] bg-red-600 space-y-14 z-[10006]`}
      >
        <li>
          <a className="text-25px nav__link sm:text-[30px]" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="text-25px nav__link sm:text-[30px]" href="#">
            About
          </a>
        </li>
        <li>
          <a className="text-25px nav__link sm:text-[30px]" href="#">
            Services
          </a>
        </li>
        <li>
          <a className="text-25px nav__link sm:text-[30px]" href="#">
            Blog
          </a>
        </li>
        <li>
          <a className="text-25px nav__link sm:text-[30px]" href="#">
            Contact
          </a>
        </li>
        <XMarkIcon
          onClick={closeNav}
          className="absolute top-[-1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white"
        />
      </ul>
    </div>
  );
};

export default NavMovile;
