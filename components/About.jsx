import Image from "next/image";
import React from "react";
import AboutImg from "../public/Assets/px1.jpeg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-auto px-4 flex items-center pt-16 sm:pt-40">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest font-bold text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 font-serif">Who I Am</h2>
          <p className="py-2 text-gray-400">I am not your average developer</p>
          <p className="py-2 ">
            I have spent the last 5 years in home services, working as a
            professional house keeper and also a driver for years. later on i
            quited. I have always had a knack for technology and working with
            computers since <b className="text-blue-600">2016</b>. In <b className="text-blue-600">2021-oct-3</b> I started working
            with HTML and CSS to make some minor edits on a website that I was
            operating. What I thought was just a few small edits turned into a
            love for programming.Because i spent most of my time practising on
            how to code more better than before.
          </p>
          <p className="py-2 text-slate-300">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I am now spending my time
            building projects with <b className="text-green-600">React JS, Next JS</b> and
            learning new technologies.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow shadow-gray-500 rounded-3xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-3xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
