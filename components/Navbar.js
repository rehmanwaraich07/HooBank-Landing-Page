"use client";
import Image from "next/image";

import { logo, menu, close } from "../public/assets";
import { navLinks } from "@/constants";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full py-6 flex justify-between items-center navbar">
      <Image
        src={logo}
        alt="logo"
        width={124}
        height={32}
        className="object-contain"
        priority
      />

      <ul className="list-none sm:flex hidden justify-end items-center space-x-10 flex-1">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`font-poppins font-normal text-[16px] text-white cursor-pointer`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex justify-end items-center flex-1 cursor-pointer">
        <Image
          src={`${toggle ? "/assets/close.svg" : "/assets/menu.svg"}`}
          alt="menu"
          width={28}
          height={28}
          className="object-contain"
          onClick={() => setToggle((prev) => !prev)}
          priority
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient min-w-[140px] absolute top-20 right-0 mx-4 my-2 rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-center items-center space-y-4 flex-1">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`font-poppins font-normal text-[16px] text-white cursor-pointer`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
