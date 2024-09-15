"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  // {
  //   prefix: "",
  //   metric: "Users",
  //   value: "100",
  // },
  {
    metric: "Awards",
    value: "5",
  },
  {
    metric: "Years",
    value: "3",
  },
];

// ... (other imports)

const AchievementsSection = () => {
  return (
    <div className="py-4 px-4 md:gap-16 md:py-16 md:px-16 max-w-[1240px] mx-auto">
      <div className="sm:border-[#33353F] sm:border rounded-full md:py-8 px-16 flex flex-col md:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  animateToNumber={parseInt(achievement.value.replace(/,/g, ''))} // Remove commas if present
                  includeComma // Use this prop to include commas
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;

