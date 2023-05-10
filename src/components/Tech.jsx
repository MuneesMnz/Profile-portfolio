import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  const technologies = [
    {
      name: "HTML 5",
      icon: "html.png",
    },
    {
      name: "CSS 3",
      icon: "css.png",
    },
    {
      name: "JavaScript",
      icon: "javascript.png",
    },
    {
      name: "TypeScript",
      icon: "typescript.png",
    },
    {
      name: "React JS",
      icon: "reactjs.png",
    },
    {
      name: "Redux Toolkit",
      icon: "redux.png",
    },
    {
      name: "Tailwind CSS",
      icon: "tailwind.png",
    },
    {
      name: "Node JS",
      icon: "nodejs.png",
    },
    {
      name: "MongoDB",
      icon: "mongodb.png",
    },

    {
      name: "git",
      icon: "git.png",
    },
    {
      name: "figma",
      icon: "figma.png",
    },
    {
      name: "docker",
      icon: "docker.png",
    },
  ];
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => {
        return (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, "");
