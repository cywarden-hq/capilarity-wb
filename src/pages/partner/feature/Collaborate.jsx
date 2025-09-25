import React from 'react'
import Reveal from '../../../components/Reveal'
import { Link } from 'react-router'

export default function Collaborate() {
    return (
        <div className="relative min-h-screen bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
            {/* Background Image */}
            <img
                src="/images/partner/collaborate.svg"
                alt="Collaborate Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center py-16 sm:py-20">
                <Reveal animation="slideUp" delay={200} duration="normal" easing="elegant">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold text-black mb-6 sm:mb-8">
                        Ready to Collaborate?
                    </h2>
                </Reveal>
                <Reveal animation="fadeIn" delay={400} duration="normal" easing="smooth">
                    <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl text-black mb-8 sm:mb-12 max-w-2xl leading-relaxed px-4">
                        Let's explore how we can work together to secure the future.
                    </p>
                </Reveal>
                <Reveal animation="scaleUp" delay={600} duration="normal" easing="elegant">
                    <Link to="/get-in-touch">
                        <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white hover:scale-105 hover:border-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 group relative overflow-hidden">
                            <span className="relative z-10">Get In Touch</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </Link>
                </Reveal>
            </div>
        </div>
    )
}
