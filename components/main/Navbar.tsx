"use client"

import { Socials } from "@/constants";
import { useState } from "react";

import { CiMenuBurger } from "react-icons/ci";
import { MenuMobile } from "./menuMobile";

const Navbar = () => {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)

  return (
    <>
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a
            href="#about-me"
            className="h-auto w-auto hidden flex-row items-center sm:flex"
          >
            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
              Space Portfolio
            </span>
          </a>

          <CiMenuBurger
            size={27}
            onClick={() => setMenuIsVisible(true)}
            className="cursor-pointer sm:hidden text-white flex justify-start"
          />

          <div className=" h-full flex-row items-center justify-between hidden sm:w-[500px] sm:flex">
            <div className="flex items-center justify-around w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-white">
              <a href="#about-me" className="cursor-pointer hover:text-sky-500 transition duration-75">
                About me
              </a>
              <a href="#skills" className="cursor-pointer hover:text-sky-500 transition duration-75">
                Skills
              </a>
              <a href="#projects" className="cursor-pointer hover:text-sky-500 transition duration-75">
                Projects
              </a>
              <a href="#contact" className="cursor-pointer hover:text-sky-500 transition duration-75">
                Contact
              </a>
            </div>
          </div>

          <div className="flex flex-row gap-5">
            {Socials.map(({ social, link }) => (
              <div key={link}>
                <a
                  className="text-white cursor-pointer hover:text-zinc-300 transition duration-100"
                  href={link}
                >
                  {social}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
    </>
  )
}

export default Navbar