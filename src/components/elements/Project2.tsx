"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import ShimmerButton from "../ui/shimmer-button";

interface ProjectProps {
  title: string;
  stack: string[];
  image: string;
  description: string;
  url: string;
}

const Project2: React.FC<ProjectProps> = ({
  title,
  stack,
  image,
  description,
  url,
}) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const handleClick = (url: string) => {
    window.open(url);
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-opacity duration-1000 ease-in-out ${
        isInView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="md:w-1/3">
          <Image src={image} alt={title} width={300} height={300} />
        </div>
        <div className="md:w-2/3">
          <h3 className="font-heading text-2xl mb-2">{title}</h3>
          <div className="flex gap-3 font-playfair text-[18px] md:text-[20px]">
            {stack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded "
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="font-text mt-2 ">{description}</p>
          <ShimmerButton
            className="shadow-2xl md:w-56 mt-3 md:h-10 w-full"
            borderRadius="10px"
            onClick={() => handleClick(url)}
          >
            <span className="whitespace-pre-wrap text-center text-sm font-inter text-[16px] lg:text-[16px] rounded-xl leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Visit
            </span>
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
};

export default Project2;
