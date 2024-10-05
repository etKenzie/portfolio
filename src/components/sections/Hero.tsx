"use client";
import Image from "next/image";
import React, { useState } from "react";

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
        "I have experience working with APIs, QA testing, and collaborating closely with my peers. Now actively looking for a new role",
    },
    {
      title: "Co-workers",
      content:
        "Happy to start working with you! If you ever need help feel free to reach out and hope it is alright if I do the same",
    },
    {
      title: "Future Boss",
      content:
        "Definitely for sure 100% doing work for real right now. No distractions in any possible way certainly for sure",
    },

    {
      title: "Friends",
      content:
        "Why are you on here??! Contact me over messages or whatsapp to meet up if we have not met up in a while :)",
    },
  ];

  const icons = [
    {
      path: "/icons/github.svg",
      label: "github",
      url: "https://github.com/etKenzie",
      className: "",
    },
    {
      path: "/icons/linkedin.svg",
      label: "linkedin",
      url: "https://www.linkedin.com/in/kenzie-evan/",
      className: "",
    },
    {
      path: "/icons/email.svg",
      label: "email",
      url: "mailto:etkenzie@gmail.com",
      className: "",
    },
    {
      path: "/icons/resume.svg",
      label: "resume",
      url: "/Kenzie_CV.pdf",
      className: "",
    },
  ];

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
      <div className="max-container padding-container flex flex-col lg:flex-row gap-4 mb-14 py-32 3xl:py-48 overflow-visible min-h-screen">
        <div className="flex flex-col">
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
        <div className="flex lg:flex-col gap-4  w-32">
          {icons.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick2(item.url)}
              className={`cursor-pointer ${item.className}`}
            >
              {
                <Image
                  src={`${item.path}`}
                  alt={`${item.label}`}
                  width={35}
                  height={35}
                />
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
