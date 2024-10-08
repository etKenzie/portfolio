// import Image from "next/image";

import Experiences from "@/components/sections/Experiences";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="overflow-auto scrollbar-hidden">
      <Hero />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  );
}
