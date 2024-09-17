import Image from "next/image";
import React, { useState } from "react";
import AboutImg from "../public/Assets/px1.jpeg";
import TabButton from "./TabButton";

const About = () => {
  const Data = [
    {
      title: "Education",
      id: "Education",
      content: (
        <ul className="list-disc pl-2">
          <li>kwara state polytechnic</li>
          <li>kwara state university</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "Certifications",
      content: (
        <ul className="list-disc pl-2">
          <li> certified udemy course</li>
          <li> certified udemy course</li>
        </ul>
      ),
    },
  ];

  const [tab, setTab] = useState(null);

  const handleTabChange = (id) => {
    setTab(id === tab ? null : id); // Toggle tab visibility
  };

  return (
    <div
      id="about"
      className="w-full md:h-auto px-4 flex items-center pt-16 sm:pt-40"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 max-w-xl">
          <p className="uppercase text-xl tracking-widest font-bold text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 font-serif">Who I Am</h2>
          <p className="py-2 text-gray-400">I am not your average developer</p>
          <p className="py-2 text-slate-300 md:w-[432px] text-sm md:text-base">
            I am a front-end web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, nextjs, HTML, CSS, and Git. I
            am a quick learner and I am always looking to expand my knowledge
            and skill set. I am a team player and I am excited to work with
            others to create amazing applications.
          </p>

          <div className="md:grid grid-cols-1 md:grid-cols-2 py-10 gap-20 h-full w-full">
            {Data.map((item) => (
              <div className="space-y-2" key={item.id}>
                <TabButton
                  selectTab={() => handleTabChange(item.id)}
                  active={tab === item.id}
                >
                  {item.title}
                </TabButton>
                {tab === item.id && <h6>{item.content}</h6>}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-auto m-auto shadow shadow-gray-500 rounded-3xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-2xl" alt="/" quality={100} />
        </div>
      </div>
    </div>
  );
};

export default About;
