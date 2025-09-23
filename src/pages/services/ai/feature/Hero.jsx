import React from 'react'
import { Link } from 'react-router'
import Reveal from '../../../../components/Reveal'

export default function Hero() {
    return (
        <div className="relative h-[600px] md:min-h-screen bg-black flex items-center justify-center overflow-hidden">
            {/* Background Images - Responsive */}
            <Reveal animation="fadeIn" duration="slow" delay={100}>
                <img src="/images/ai/hero-tr.svg" alt="AI Development" className="absolute top-0 right-0" />
            </Reveal>
            <Reveal animation="fadeIn" duration="slow" delay={200}>
                <img src="/images/ai/hero-bl.svg" alt="AI Development" className="absolute bottom-0 left-0" />
            </Reveal>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 max-w-7xl mx-auto">
                {/* Main Title */}
                <Reveal animation="fadeIn" duration="normal" delay={100}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
                        AI Development
                    </h1>
                </Reveal>
                
                {/* Subtitle */}
                <Reveal animation="slideUp" duration="normal" delay={300}>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#C6C6C6] font-semibold mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2">
                        Let's Build the AI That Gives You an Edge.
                    </h2>
                </Reveal>
                
                {/* Body Text */}
                <Reveal animation="slideUp" duration="normal" delay={400}>
                    <div className="text-center max-w-5xl mx-auto mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base md:text-lg lg:text-xl text-[#C6C6C6] leading-relaxed sm:leading-loose md:leading-[2.5rem] lg:leading-[3rem] px-2">
                        <p>
                            We don't just write code, we partner with you to create intelligent, practical, and scalable 
                            <span className="hidden sm:inline"> AI solutions that solve real world problems and drive real growth. At Capilarity, we turn </span>
                            <span className="sm:hidden"> AI solutions that solve real world problems and drive real growth. At Capilarity, we turn </span>
                            your biggest challenges into your most powerful advantages.
                        </p>
                    </div>
                </Reveal>

                {/* Call to Action Button */}
                <Reveal animation="slideUp" duration="normal" delay={500}>
                    <Link to="/get-in-touch">
                        <button className="bg-white text-black px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-semibold border-2 border-white cursor-pointer hover:scale-105 hover:text-orange-500 hover:border-2 hover:border-orange-500 transition-all duration-300 w-full sm:w-auto">
                            Start Your AI Project
                        </button>
                    </Link>
                </Reveal>
            </div>
        </div>
    )
}