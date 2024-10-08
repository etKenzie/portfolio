// import Image from "next/image";

import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="overflow-auto scrollbar-hidden">
      <Hero />
      <Projects />
    </div>
  );
}
