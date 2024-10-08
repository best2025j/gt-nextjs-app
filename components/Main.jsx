import React from "react";
import {
  FaDiscord,
  FaGithub,
  FaLinkedinIn,
  FaSlack,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div id="home" className="w-full text-center h-screen pt-16">
      <div className="max-w-[1240px] h-full justify-center items-center mx-auto p-2 flex">
        <div className="space-y-2">
          <p className="md:text-sm tracking-widest text-xs">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>

          <h1 className="text-slate-400 text">
            Hi, I&#39;m <span className="text-[#ffff]">God&#39;stime</span>
          </h1>

          <h1 className=" text-blue-600">
            <span>I&#39;m </span>
            <TypeAnimation
              speed={20}
              wrapper="span"
              repeat={Infinity}
              sequence={[
                "A Front-End Web Developer",
                2000,
                "A Forex Trader",
                200,
              ]}
            />
            {/* A Front-End Web Developer */}
          </h1>

          <p className=" text-gray-600 sm:max-w-full m-auto text-xs md:text-base">
            I&apos;m focused on building responsive front-end web applications
            while i learn back-end technologies later on.
          </p>

          {/* ICONS */}
          <h1 className="text-gray-600 py-4 text-sm md:text-3xl capitalize text-bold">social media you can reach out to me</h1>
          <div className="flex items-center md:justify-between justify-center max-w-xl m-auto py-4 space-x-1 sm:space-x-2 text-slate-300">
            <a href="https://github.com/best2025j">
              <div className="rounded-full bg-gradient-to-r from-[#2e2d2d] to-[#16161b] p-3 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>

            {/*  */}

            <a href="https://www.linkedin.com/in/audu-godstime">
              <div className="rounded-full bg-blue-600  p-3 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn className="" />
              </div>
            </a>

            {/*  */}

            <a href="https://discord.gg/AHyCM78g">
              <div className="rounded-full bg-[#304cb3]  p-3 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaDiscord className="" />
              </div>
            </a>

            {/*  */}

            <a href="https://wa.me/09012902537">
              <div className="rounded-full bg-green-600  p-3 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaWhatsapp className="" />
              </div>
            </a>

            {/*  */}
            <a href="https://x.com/gt2025j">
              <div className="rounded-full  bg-gradient-to-r from-[#5651e5] to-[#0d348a] p-3 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTwitter />
              </div>
            </a>

            {/*  */}

            <a href="https://gt-work-workspace.slack.com/archives/D03BJKPE6KY">
              <div className="rounded-full  bg-gradient-to-r from-[#5651e5] to-[#0d348a] p-3 sm:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaSlack />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
