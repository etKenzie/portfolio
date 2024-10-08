"use client";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa";
import { RainbowButton } from "../ui/rainbow-button";

const Footer = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("etkenzie@gmail.com");
  };

  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "/Kenzie_CV.pdf";
    link.setAttribute("download", "Kenzie_CV.pdf"); // Set download attribute
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section>
      <div className="max-container h-screen flex flex-col gap-3 justify-center items-center text-center">
        <div className="font-inter text-[18px] md:text-[20px] font-[400] leading-[150%] md:w-2/5 ">
          Feel free to reach out if you are looking for a developer, have a
          query, or simply want to connect!
        </div>
        <div className="flex font-contact gap-2 items-center justify-center text-center">
          <MdOutlineEmail className="" />
          <div className="">etkenzie@gmail.com</div>
          <button
            onClick={copyToClipboard}
            className="ml-2 p-1 hover:bg-gray-200 rounded-full transition-colors duration-200"
            title="Copy email"
          >
            <FaRegCopy className="" />
          </button>
        </div>
        <div className="h-10 mt-4">
          <RainbowButton onClick={() => handleClick()}>
            <div className="font-semibold">Download Resume</div>
          </RainbowButton>
        </div>
      </div>
    </section>
  );
};

export default Footer;
