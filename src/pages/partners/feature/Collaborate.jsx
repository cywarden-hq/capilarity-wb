import React from 'react'

export default function Collaborate() {
    return (
        <div className="relative min-h-screen bg-white px-20 overflow-hidden">
            {/* Background Image */}
            <img
                src="/images/partners/collaborate.svg"
                alt="Collaborate Background"
                className="absolute inset-0 w-full h-full"
            />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
                <h2 className="text-5xl lg:text-4xl font-semibold text-black mb-8">
                    Ready to Collaborate?
                </h2>
                <p className="text-xl text-black mb-12 max-w-2xl leading-relaxed">
                    Let's explore how we can work together to secure the future.
                </p>
                <button className="bg-white text-black px-8 py-2 rounded-full text-lg font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                    Get In Touch
                </button>
            </div>
        </div>
    )
}
