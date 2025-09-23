import React from "react";
import WhoWeAre from "./WhoWeAre";
import WhyChooseUs from "./WhyChooseUs";
import WhyCapilarity from "./WhyCapilarity";
import ScrollingBanner from "./ScrollingBanner";
import Reveal from "../../components/Reveal";

const WhyUs = () => {
  return (
    <main className="bg-white overflow-hidden w-full relative">
      <header className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] xl:h-screen bg-[#04102B] flex items-center justify-center">
        <Reveal animation="fadeIn" duration="normal" delay={100}>
          <img
            src="/images/why-us/hero_bg.svg"
            alt="Background image for why us section"
            className="absolute top-0 left-0 w-full h-full lg:object-cover"
          />
        </Reveal>
        <Reveal animation="slideUp" duration="normal" delay={100}>
          <h1 className="text-[#FBB040] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center font-semibold px-4">Why Us</h1>
        </Reveal>
      </header>
      <WhoWeAre />
      <WhyChooseUs />
      <WhyCapilarity />
      <ScrollingBanner />
    </main>
  );
};

export default WhyUs;
