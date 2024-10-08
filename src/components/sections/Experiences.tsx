import React from "react";
import Experience from "../elements/Experience";

const Experiences = () => {
  const experiences = [
    {
      logo: "/icons/bitmain.png",
      date: "May - July 2023",
      role: "Machine Leaning Intern",
      description:
        "I enhanced AI image models for better detail and lighting, and built APIs using Golang, AWS, and SQL to enable user interaction with the models. I also optimized the data pipeline with scripts for selective image processing, competitive research, and model testing.",
    },
    {
      logo: "/icons/sunterra.png",
      date: "July - October 2022",
      role: "Software Developer QA Intern",
      description:
        "I optimized automated testing protocols for 100+ APIs using Postman, Jenkins, and JSON. Additionally, I improved code performance through code reviews and expanded test coverage for JSON data validation.",
    },
    {
      logo: "/icons/tokopandai.png",
      date: "July - October 2021",
      role: "Software Developer Intern",
      description:
        "I built a mobile and web app using MySQL, Node.js, and Svelte, allowing unbankable mom-and-pop stores to make digital invoice payments via e-wallets and rewards systems. This increased on-time payments by 25% and improved data quality.",
    },
  ];
  return (
    <section>
      <div className="max-container padding-container flex flex-col gap-24 py-10 pb-32 lg:py-20 overflow-visible">
        <div className="self-center font-section">Experiences</div>
        <div className="flex flex-col gap-20">
          {experiences.map((item, index) => (
            <Experience
              key={index}
              logo={item.logo}
              date={item.date}
              description={item.description}
              role={item.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
