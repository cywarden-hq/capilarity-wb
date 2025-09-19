import React from 'react'

export default function Hero() {
    return (
        <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
            <img src="/images/ai/hero-tr.svg" alt="AI Development" className="absolute top-0 right-0" />
            <img src="/images/ai/hero-bl.svg" alt="AI Development" className="absolute bottom-0 left-0" />

            {/* Content */}
            <div className="relative z-10 text-center px-8 mt-20 max-w-4xl mx-auto">
                {/* Main Title */}
                <h1 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                    AI Development
                </h1>

                {/* Subtitle */}
                <h2 className="text-2xl text-[#C6C6C6] lg:text-3xl font-semibold mb-12">
                    Let's Build the AI That Gives You an Edge.
                </h2>

                {/* Body Text */}
                <div className="text-center max-w-4xl mx-auto mb-12 text-lg lg:text-xl text-[#C6C6C6] leading-[65px]">
                    <p>We don't just write code, we partner with you to create intelligent, practical, and scalable <br />
                    AI solutions that solve real world problems and drive real growth. At Capilarity, we turn <br />
                    your biggest challenges into your most powerful advantages.
                    </p>
                </div>

                {/* Call to Action Button */}
                <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold border-2 border-white cursor-pointer hover:scale-105 hover:text-orange-500 hover:border-2 hover:border-orange-500 transition-all duration-300">
                    Start Your AI Project
                </button>
            </div>
        </div>
    )
}