import React from "react";
import Image, { StaticImageData } from "next/image";

// Define the interface for the props
interface HeroProps {
  backdrop: string | StaticImageData; 
  title: string;
}

const Hero: React.FC<HeroProps> = ({ backdrop, title }) => {
  return (
    <section className="relative container h-[600px]">
      <div
        className="absolute top-0 left-0 w-full h-full z-[-1]"
      >
        <Image
          src={backdrop}
          alt="background"
          objectFit="cover"
          layout="fill"
          quality={100}
          className="object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-[-1]"></div>

      <div
        className="flex flex-col h-full items-center justify-center px-12 gap-5 z-10 font-bold text-7xl text-center text-white"
      >
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default Hero;
