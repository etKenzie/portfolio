"use client";
import Image from "next/image";
import React from "react";

interface ButtonProps {
  type: "button" | "submit";
  title: string;
  icon?: string;
  className: string;
  onClick?: () => void;
}

const Button = ({ type, title, icon, className, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 border ${className}`}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className=" whitespace-nowrap cursor-pointer">{title} </label>
    </button>
  );
};

export default Button;
