import Image from "next/image";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaDiscord, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/Assets/contact.jpg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2x6en43",
        "template_ywya2vi",
        form.current,
        " OHYztClP2C7E3Glpw"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="w-full lg:h-auto">
      <div className="max-w-[1240px] m-auto px-4 pt-16 sm:pt-20 w-full ">
        <p className="text-xl tracking-widest uppercase font-bold text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4 font-serif">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full border border-gray-400 rounded-3xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Audu God&#39;stime</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for Remote jobs, freelance or full-time
                  positions. Contact me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-3">
                  <a
                    href="https://www.linkedin.com/in/audu-godstime"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg bg-blue-600 text-white  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>

                  <a
                    href="https://github.com/best2025j"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg bg-gradient-to-r from-[#2e2d2d] to-[#16161b] text-white  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://wa.me/09012902537"
                  >
                    <div className="rounded-full shadow-lg bg-green-500  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaWhatsapp />
                    </div>
                  </a>

                  {/*  */}
                  <a
                    href="https://discord.gg/AHyCM78g"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg bg-blue-500  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaDiscord />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          {/* FORM INPUT */}

          <div className="col-span-3 w-full h-auto border border-gray-400 rounded-3xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col gap-4 w-full py-2">
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="text-black outline-none border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="user-name"
                      // value={name}
                      // onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  {/* <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="text-black outline-none border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="user-phone"
                      // value={phone}
                      // onChange={(e) => setPhone(e.target.value)}
                    />
                  </div> */}

                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="text-black outline-none border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="user-email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="text-black outline-none border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="user-subject"
                    // value={subject}
                    // onChange={(e) => setSubject(e.target.value)}
                  />
                </div> */}
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 outline-none text-black border-gray-300"
                    rows="5"
                    name="message"
                    // value={message}
                    // onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button className="w-full p-4 text-gray-100  mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="flex justify-center py-10">
          <a href="#home">
            <div className="rounded-full shadow shadow-gray-600 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#f0eff7]" size={30} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
