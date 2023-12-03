import Image from "next/image";
import React, { useState } from "react";
import AboutImg from "../public/Assets/px1.jpeg";
import TabButton from "./TabButton";
import { title } from "process";

const About = () => {
  const Data = [
    {
      title: "Education",
      id: "Education",
      content: (
        <ul className="list-disc pl-2">
          <li>kwara state polytechnic</li>
        </ul>
      ),
    },

    {
      title: "Certifications",
      id: "Certifications",
      content: (
        <ul className="list-disc pl-2">
          <li> certisfied udemy course</li>
          <li> certisfied udemy course</li>
        </ul>
      ),
    },
  ];

    const [tab, setTab] = useState("skills");
    // const [isPending, startTransition] = useTransition();

    // const handleTabChange = (id) => {
    //   startTransition(() => {
    //     setTab(id);
    //   });
    // };

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
          <p className="py-2 text-slate-300 w-[432px]">
            I am a front-end web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, nextjs, HTML, CSS, and Git. I
            am a quick learner and I am always looking to expand my knowledge
            and skill set. I am a team player and I am excited to work with
            others to create amazing applications.
          </p>

          <div className="md:grid grid-cols-1 md:grid-cols-2 py-10 gap-20 h-full w-full hidden">
            {Data.map((item, index) => (
              <div className="space-y-2 " key={index}>
                <TabButton
                  selectTab={() => handleTabChange("skills")}
                  active={tab === "skills"}
                >
                  {item.title}
                </TabButton>
                <h6>{item.content}</h6>
              </div>
            ))}
          </div>

          <div className="mt-8">
            {Data.map((t) => t.id === tab).content}
          </div>
        </div>

        <div className="w-full h-auto m-auto shadow shadow-gray-500 rounded-3xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-3xl h-20 w-[5100px]" alt="/" quality={100}  />
        </div>
      </div>
    </div>
  );
};

export default About;
