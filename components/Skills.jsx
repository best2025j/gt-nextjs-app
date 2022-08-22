import React from "react";
import Html from "../public/Assets/skills/html.png";
import Css from "../public/Assets/skills/css.png";
import Javascript from "../public/Assets/skills/javascript.png";
import ReactImg from "../public/Assets/skills/react.png";
import Tailwind from "../public/Assets/skills/tailwind.png";
import Github from "../public/Assets/skills/github1.png";
import Firebase from "../public/Assets/skills/firebase.png";
import NextJS from "../public/Assets/skills/nextjs.png";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-auto sm:px-4 px-4 sm:py-40 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase font-bold text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4 font-serif">What I Can Do</h2>
        {/*  */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:p-6 p-3 shadow-gray-600 bg-white text-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="sm:p-6 p-3 shadow-gray-600 bg-white text-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="sm:p-6 p-3 shadow-gray-600 bg-white text-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Javascript} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="sm:p-6 p-3 shadow-gray-600 bg-white text-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="sm:p-6 p-3 shadow-gray-600 bg-white text-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="sm:p-6 p-3 shadow-gray-600 bg-white text-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Firebase} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="sm:p-6 p-3 shadow-gray-600 bg-white text-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="sm:p-6 p-3 shadow-gray-600 bg-white text-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextJS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
