import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="flex justify-between w-full items-start" h-full>
      <div>
        <h1>hello</h1>
      </div>
      <div className="relative">
        <Image
          src="/image.png"
          width={500}
          height={500}
          quality={100}
          alt="/"
        />
        <ul className="flex absolute top-0 space-x-4 items-center">
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
        </ul>
      </div>{" "}
    </div>
  );
}
