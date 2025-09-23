import React from "react";
import Reveal from "../../../components/Reveal";

export default function Hero() {
    return (
        <div className="relative h-full lg:min-h-screen bg-[#010035] overflow-hidden">
            {/* Background Images */}
            <img
                src="/images/partner/hero_bg_left.svg"
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <img
                src="/images/partner/hero_bg_right.svg"
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Content */}
            <div className="relative z-20 text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-60 py-30 md:py-40 lg:py-50 h-full lg:min-h-screen">
                {/* Main Title */}
                <Reveal animation="slideUp" delay={200} duration="normal" easing="elegant">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-9xl font-semibold mb-6 sm:mb-8 md:mb-10 text-center leading-tight">
                        Partner With Us
                    </h1>
                </Reveal>

                {/* Subtitle */}
                <Reveal animation="slideLeft" delay={400} duration="normal" easing="elegant">
                    <h2 className="text-lg sm:text-lg md:text-3xl lg:text-3xl xl:text-4xl font-regular mb-4 sm:mb-6 md:mb-8 lg:mb-8 xl:mb-10 text-center max-w-4xl">
                        Let's Build a Safer Digital Future Together
                    </h2>
                </Reveal>

                {/* Description */}
                <Reveal animation="slideRight" delay={600} duration="slow" easing="smooth">
                    <p className="text-gray-400 font-light text-xs sm:text-xs md:text-lg lg:text-lg xl:text-lg leading-6 sm:leading-7 md:leading-8 lg:leading-8 xl:leading-[40px] text-center max-w-5xl mx-auto">
                        At Capilarity, we believe cybersecurity works best when it's a shared mission. The digital world is evolving fast, and no single organization can tackle today's threats alone. That's why we've built the Capilarity Partner Program, a community where collaboration drives stronger, smarter defenses.
                    </p>
                </Reveal>
            </div>
        </div>
    );
}
