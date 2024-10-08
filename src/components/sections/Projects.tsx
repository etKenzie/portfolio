import React from "react";
import Project2 from "../elements/Project2";

const Projects = () => {
  const projects = [
    {
      title: "Cashmere Health",
      stack: ["Next", "React", "MongoDB", "Figma"],
      description:
        "A website to simplify the process of getting a doctor’s diagnosis. Patients talk to the web conversational flow which automatically generates a report to medical professionals ",
      img: "/icons/cashmere.png",
      url: "https://www.cashmerehealth.com/",
    },
    {
      title: "Maze Navigator",
      stack: ["Android Studio", "Java"],
      description:
        "3D Maze Application, incorporating multiple methods of traversal (robot or manually). With user-friendly maze graphical interface allowing for user controls ",
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
      <div className="max-container padding-container flex flex-col gap-24 py-10 pb-32 lg:py-20 overflow-visible">
        <div className="self-center font-section">Projects</div>
        <div className="flex flex-col gap-20">
          {projects.map((item, index) => (
            <Project2
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
