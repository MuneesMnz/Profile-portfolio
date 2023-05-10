import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import styles from "../styles";
import { Tilt } from "react-tilt";

const Works = () => {
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: "carrent.png",
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: "jobit.png",
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: "tripguide.png",
      source_code_link: "https://github.com/",
    },
  ];
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis
          amet porro natus, esse, repellat quo sit deserunt quis accusantium
          voluptates pariatur. Molestiae molestias magnam architecto ducimus
          corrupti, consequatur blanditiis repellendus! Suscipit quo nemo
          eligendi laboriosam, dolorem vitae eius sequi.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            >
              <Tilt
                options={{ max: 45, scale: 1, speed: 450 }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
              >
                <div className="relative w-full h-[230px]">
                  <img
                    src={require(`../assets/Images/${project.image}`)}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                    <div
                      onClick={() =>
                        window.open(project.source_code_link, "_blank")
                      }
                      className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    >
                      <img
                        src={require("../assets/github.png")}
                        alt="github"
                        className="w-1/2 h-1/2 object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5 ">
                  <h3 className="text-white font-bold text-xl tracking-wider ">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-secondary text-[14px]">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => {
                    return (
                      <p key={tag.name} className={`text-14px ${tag.color}`}>
                        #{tag.name}
                      </p>
                    );
                  })}
                </div>
              </Tilt>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
