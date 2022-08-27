import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "../public/Assets/gt7.jpeg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaDiscord,
  FaGithub,
  FaLinkedinIn,
  FaSlack,
  FaWhatsapp,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "w-full h-16 border-b bg-black border-white duration-1000 easy-in fixed z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link href="/">
          <a>
            <Image
              src={image}
              alt="/"
              width="40"
              height="40"
              className="rounded-full cursor-pointer"
            />
          </a>
        </Link>

        {/*  */}

        <div className="">
          <ul className="hidden md:flex">
            <li className="pl-4 font-bold text-sm hover:text-gray-400 active:text-blue-300">
              <Link href="/">Home</Link>
            </li>
            <li className="pl-4 font-bold text-sm hover:text-gray-400 active:text-blue-300">
              <Link href="#about">About</Link>
            </li>
            <li className="pl-4 font-bold text-sm hover:text-gray-400 active:text-blue-300">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="pl-4 font-bold text-sm hover:text-gray-400 active:text-blue-300">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/*  */}

        <div onClick={handClick} className="md:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* modal */}

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/80" : ""
        }
      >
        {/* Side Drawer Menu */}

        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen  bg-black border-r rounded-r-3xl p-5 ease-in duration-500"
              : "fixed left-[-100%] h-screen top-0 p-5 ease-out duration-700 bg-black"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <Link href="/">
                <a>
                  <Image
                    src={image}
                    alt="/"
                    width="40"
                    height="40"
                    className="rounded-full cursor-pointer"
                  />
                </a>
              </Link>

              {/* MOBILE VEIW */}

              <div
                onClick={handClick}
                className="rounded-full shadow bg-black shadow-slate-500 p-2 cursor-pointer"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>

            {/*  */}

            <div className="border-b border-gray-400 py-4">
              <p className="w-[90%] sm:w-[90%] md:w-full py-2">
                Let&#39; build something legendary together
              </p>
            </div>

            <div className="flex flex-col py-4 ">
              <ul className="font-bold space-y-1">+
                <li className="text-sm" onClick={handleClose}>
                  <Link href="#home">Home</Link>
                </li>
                <li className="text-sm" onClick={handleClose}>
                  <Link href="#about">About</Link>
                </li>
                <li className="text-sm" onClick={handleClose}>
                  <Link href="#skills">Skills</Link>
                </li>
                <li className="text-sm" onClick={handleClose}>
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/*  */}

            <div className="bottom-0 sm:bottom-0 absolute ">
              <p className="uppercase tracking-widest text-[#fff] font-bold">
                Let&apos; Connect
              </p>


              <div className="flex items-center justify-between py-3 text-slate-300 space-x-4 w-full sm:w-[80%]">
                {/* GITHUB ICON LINK */}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/best2025j"
                  onClick={handleClose}
                >
                  <div className="rounded-full shadow-sm bg-gradient-to-r from-[#2e2d2d] to-[#16161b] hover:scale-105 easy-in duration-300 p-2 sm:p-4 cursor-pointer">
                    <FaGithub />
                  </div>
                </a>

                {/* LINKENDIN ICON LINK */}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/audu-godstime"
                  onClick={handleClose}
                >
                  <div className="rounded-full bg-blue-600 hover:scale-105 easy-in duration-300 p-2 sm:p-4 cursor-pointer">
                    <FaLinkedinIn />
                  </div>
                </a>

                {/* DISCORD ICON LINK  */}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://discord.gg/AHyCM78g"
                  onClick={handleClose}
                >
                  <div className="rounded-full bg-[#304cb3] hover:scale-105 easy-in duration-300 p-2 sm:p-4 cursor-pointer">
                    <FaDiscord />
                  </div>
                </a>

                {/* WHATSAPP ICON LINK  */}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/09012902537"
                  onClick={handleClose}
                >
                  <div className="rounded-full bg-green-600 hover:scale-105 easy-in duration-300 p-2 sm:p-4 cursor-pointer">
                    <FaWhatsapp className="" />
                  </div>
                </a>

                {/* SLACK ICON LINK */}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://gt-work-workspace.slack.com/archives/D03BJKPE6KY"
                  onClick={handleClose}
                >
                  <div className="rounded-full  bg-gradient-to-r from-[#5651e5] to-[#0d348a] hover:scale-105 easy-in duration-300 p-2 sm:p-4 cursor-pointer">
                    <FaSlack />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
