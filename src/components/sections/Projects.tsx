import React from "react";
import Project from "../elements/Project";

const Projects = () => {
  const projects = [
    {
      title: "Cashmere Health",
      stack: ["Next", "React", "MongoDB", "Figma"],
      description:
        "A website to simplify the process of getting a doctor’s diagnosis. Patients talk to the web conversational flow which automatically generates a report to medical professionals.",
      img: "/icons/cashmere.png",
      url: "https://www.cashmerehealth.com/",
    },
    {
      title: "Maze Navigator",
      stack: ["Android Studio", "Java"],
      description:
        "3D Maze Application, incorporating multiple methods of traversal (robot or manually). With user-friendly maze graphical interface allowing for user controls.",
      img: "/icons/maze.svg",
      url: "https://github.com/etKenzie/Maze_Navigator",
    },
    {
      title: "HVAC Systems",
      stack: ["Python", "LightGBM", "Pandas", "SciKit-Learn"],
      description:
        "Project to estimate Energy output of buildings from building dimensions and environmental variables.",
      img: "/icons/temperature.svg",
      url: "https://github.com/etKenzie/HVAC-Systems",
    },
  ];

  return (
    <section>
      <div className="max-container padding-container flex flex-col gap-16 py-16 lg:py-24 overflow-visible">
        <h2 className="text-4xl font-bold text-center font-section">
          Projects
        </h2>
        <div className="flex flex-col gap-16">
          {projects.map((item, index) => (
            <Project
              key={index}
              title={item.title}
              stack={item.stack}
              image={item.img}
              description={item.description}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
