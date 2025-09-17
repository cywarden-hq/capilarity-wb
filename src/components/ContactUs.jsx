import React from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

// Import all images (you'll need to ensure these files exist in your project)
import group3 from "/images/contact_us/group-3.svg";
import group4 from "/images/contact_us/group-4.svg";
import image_top_right from "/images/contact_us/image-top-right.svg";
import image_top_left from "/images/contact_us/image-top-left.svg";
import image_bottom_left from "/images/contact_us/image-bottom-left.svg";
import image_bottom_right from "/images/contact_us/image-bottom-right.svg";

const ContactUs = () => {
  return (
    <section className="relative w-full min-h-[300px] sm:min-h-[300px] lg:min-h-[500px] overflow-hidden bg-orange-50/50 border border-solid border-transparent px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Reveal animation="slideRight" duration="fast" delay={100}>
          <img
            className="absolute w-32 sm:w-48 lg:w-80 h-8 sm:h-12 lg:h-14 top-0 -left-2 sm:-left-4 lg:-left-7"
            alt="Decorative group element"
            src={group3}
          />
        </Reveal>
        <Reveal animation="slideLeft" duration="fast" delay={200}>
          <img
            className="absolute w-12 sm:w-16 lg:w-20 h-8 sm:h-12 lg:h-14 top-8 sm:top-12 lg:top-16 right-4 sm:right-8 lg:right-16"
            alt="Decorative group element"
            src={image_top_right}
          />
        </Reveal>
        <Reveal animation="slideRight" duration="fast" delay={300}>
          <img
            className="absolute w-8 sm:w-12 lg:w-14 h-4 sm:h-6 lg:h-8 top-16 sm:top-20 lg:top-24 left-4 sm:left-8 lg:left-16"
            alt="Decorative image element"
            src={image_top_left}
          />
        </Reveal>
        {/* <Reveal animation="slideLeft" duration="normal" delay={1000}> */}
          <img
            className="absolute w-42 sm:w-58 lg:w-100 h-8 sm:h-12 lg:h-14 bottom-0 -right-7 sm:-right-9 lg:-right-15"
            alt="Decorative group element"
            src={group4}
          />
        {/* </Reveal> */}
        {/* <Reveal animation="slideLeft" duration="normal" delay={600}> */}
          <img
            className="absolute w-8 sm:w-12 lg:w-16 h-6 sm:h-8 lg:h-10 bottom-16 sm:bottom-20 lg:bottom-24 right-8 sm:right-12 lg:right-68"
            src={image_bottom_right}
            alt="Communication"
          />
        {/* </Reveal> */}
        {/* <Reveal animation="slideRight" duration="normal" delay={1400}> */}
          <img
            className="absolute w-12 sm:w-16 lg:w-20 h-6 sm:h-8 lg:h-10 bottom-8 sm:bottom-12 lg:bottom-16 left-4 sm:left-8 lg:left-36"
            src={image_bottom_left}
            alt="Document"
          />
        {/* </Reveal> */}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
        {/* Title */}
        <Reveal animation="slideUp" duration="fast" delay={100}>
          <h1 className="mb-6 sm:mb-8 lg:mb-12 text-orange-600 font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-[-0.96px] leading-tight">
            Contact Us Today
          </h1>
        </Reveal>
        {/* Description */}
        <Reveal animation="slideUp" duration="fast" delay={200}>
          <p className="mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto [font-family:'Inter-Regular',Helvetica] font-normal text-[#656565] text-base sm:text-lg lg:text-xl xl:text-2xl tracking-[0] leading-relaxed px-4">
            Request a 1-Week Cloud Security Assessment to analyze your current
            security posture across architecture, network, identity, data, and
            tools, providing actionable recommendations to strengthen your
            defenses.
          </p>
        </Reveal>
        {/* CTA Button */}
        <Reveal animation="slideRight" duration="normal" delay={300}>
          <Link
            to="/get-in-touch"
            className="group inline-flex items-center justify-center w-38 sm:w-46 lg:w-54 h-12 sm:h-14 lg:h-16 rounded-full border-2 border-orange-200 hover:border-orange-500 hover:bg-orange-500 hover:scale-105 transition-all duration-300 ease-out bg-white/80 backdrop-blur-sm"
          >
            <span className="font-medium text-[#595959e6] group-hover:text-white text-lg sm:text-xl lg:text-2xl tracking-[0] leading-none">
              Get In Touch
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactUs;