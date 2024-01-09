"use client"

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 mt-40 w-full z-[20]"
    >
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex flex-col gap-6 md:mt-6 text-3xl md:text-6xl font-bold text-white max-w-[600px] w-full md:w-auto md:mr-4"
      >
        <span>
          Providing
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            the best{" "}
          </span>
          project experience
        </span>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[600px] w-full"
        >
          I&apos;m a Software Engineer with expertise in Website and Software development. Explore my projects and skills.
        </motion.p>
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full md:w-auto h-full justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
