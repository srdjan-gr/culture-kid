import React from "react";
import { Slider } from "@/components";

const Hero = () => {
  return (
    <section className="w-full my-8">
      <div className="max-w-full px-3 sm:px-0 sm:max-w-xl md:max-w-4xl xl:max-w-6xl m-auto mb-28">
        <h1 className="text-5xl font-karla_font">Featured Paintings</h1>
      </div>

      <Slider />
    </section>
  );
};

export default Hero;
