"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
// import ShimmerButton from "../ui/shimmer-button";

interface Props {
  date: string;
  role: string;
  description: string;
  logo?: string;
}

const Experience: React.FC<Props> = ({ date, role, description, logo }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  // const handleClick = (url: string) => {
  //   window.open(url);
  // };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`flex justify-between transition-opacity duration-1000 ease-in-out align-center ${
        isInView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col">
        <div className="flex items-center ml-1 mb-1">
          <Image src={`${logo}`} alt={`${logo}`} width={200} height={200} />
        </div>
        <div className="font-heading ">{role}</div>
        <div className="flex gap-3 font-playfair text-[20px]">
          <div
            //   onClick={() => handleClick(item.title, item.content)}
            className={``}
          >
            {date}
          </div>
        </div>

        <div className="font-text mt-2 lg:w-3/5">{description}</div>
        {/* <Button
          type="button"
          title="Visit"
          className="w-40 mt-3 border-black bg-black px-8 py-2 text-white font-inter text-[14px] lg:text-[16px] rounded-xl"
          onClick={() => handleClick(url)}
        /> */}
        {/* <ShimmerButton
          className="shadow-2xl lg:w-56 mt-3 lg:h-10"
          borderRadius="10px"
          onClick={() => handleClick(url)}
        >
          <span className="whitespace-pre-wrap text-center text-sm font-inter text-[16px] lg:text-[16px] rounded-xl leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Visit
          </span>
        </ShimmerButton> */}
      </div>
    </div>
  );
};

export default Experience;
