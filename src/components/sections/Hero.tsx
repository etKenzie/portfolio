"use client";

import React, { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa";

const Hero = () => {
  const introduction = [
    {
      title: "For Introduction",
      content:
        "Hello visitor, I'm Kenzie a Software Developer based in Seattle with a passion for new experiences and projects",
    },
    {
      title: "Recruiters",
      content:
        "I have experience working on APIs, Testing, and working closely with my peers. Now actively looking for a new role",
    },
    {
      title: "Co-workers",
      content:
        "Happy to start working with you! If you ever need help feel free to reach out and hope it is alright if I contact you as well",
    },
    {
      title: "Future Boss",
      content:
        "Looking forward to collaborating with you and the team! I will do my best to keep you informed and stay on task",
    },

    {
      title: "Friends",
      content:
        "Why are you on here??! Contact me over messages or whatsapp to meet up if we have not met up in a while :)",
    },
  ];

  const icons = [
    {
      icon: FiGithub,
      label: "github",
      url: "https://github.com/etKenzie",
      className: "hover:text-yellow-500",
      tooltipText: "Github",
    },
    {
      icon: FaLinkedinIn,
      label: "linkedin",
      url: "https://www.linkedin.com/in/kenzie-evan/",
      className: "hover:text-blue-500",
      tooltipText: "LinkedIn",
    },
    {
      icon: MdOutlineEmail,
      label: "email",
      url: "mailto:etkenzie@gmail.com",
      className: "hover:text-green-500",
      tooltipText: "Email",
    },
    {
      icon: FaRegFilePdf,
      label: "resume",
      url: "/Kenzie_CV.pdf",
      className: "hover:text-red-500",
      tooltipText: "Download CV",
    },
  ];

  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState(introduction[0].title);
  const [content, setContent] = useState(introduction[0].content);

  const handleClick = (title: string, content: string) => {
    setActiveTitle(title);
    setContent(content);
  };

  const handleClick2 = (url: string) => {
    if (url === "/Kenzie_CV.pdf") {
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Kenzie_CV.pdf"); // Set download attribute
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // For other URLs (like GitHub, LinkedIn, etc.), open in a new tab
      window.open(url, "_blank");
    }
  };

  return (
    <section>
      <div className="max-container padding-container lg:grid lg:grid-cols-12 lg:flex-row gap-4 mb-14 py-12 lg:py-32 3xl:py-48 overflow-visible min-h-screen">
        <div className="  lg:col-span-11">
          <div className="flex gap-3 font-option ml-1">
            {introduction.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(item.title, item.content)}
                className={`cursor-pointer ${
                  activeTitle === item.title
                    ? "text-primary font-semibold"
                    : "text-gray-600 hover:font-semibold "
                }`}
              >
                <h2>{item.title}</h2>
              </div>
            ))}
          </div>
          <div className="font-heading lg:w-9/12">{content}</div>
        </div>
        <div className="flex lg:flex-col pt-4 gap-4 w-32 items-end mt-4 md:mt-0">
          {icons.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick2(item.url)}
              onMouseEnter={() => setHoveredIcon(item.label)}
              onMouseLeave={() => setHoveredIcon(null)}
              className={`cursor-pointer `}
              style={{ width: "35px", height: "35px" }} // Ensure consistent size
            >
              <item.icon
                size={35}
                className={`fill-current ${item.className}  transition-colors duration-300 hover:scale-110`}
              />
              {hoveredIcon === item.label && (
                <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white font-semibold text-2xl rounded-lg whitespace-nowrap z-10">
                  {item.tooltipText}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
