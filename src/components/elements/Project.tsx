"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";

interface Props {
  title: string;
  stack: string[];
  description: string;
  image?: string;
  url: string;
}

const Project = ({ title, stack, url, image, description }: Props) => {
  const handleClick = (url: string) => {
    window.open(url);
  };

  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <div className="font-heading ">{title}</div>
        <div className="flex gap-3 font-playfair text-[20px]">
          {stack.map((item, index) => (
            <div
              key={index}
              //   onClick={() => handleClick(item.title, item.content)}
              className={``}
            >
              <div>{item}</div>
            </div>
          ))}
        </div>

        <div className="font-text mt-2 lg:w-3/5">{description}</div>
        <Button
          type="button"
          title="Visit"
          className="w-40 mt-3 border-black bg-black px-8 py-2 text-white font-inter text-[14px] lg:text-[16px] rounded-xl"
          onClick={() => handleClick(url)}
        />
      </div>
      <div className="flex items-center">
        <Image src={`${image}`} alt={`${image}`} width={180} height={180} />
      </div>
    </div>
  );
};

export default Project;
