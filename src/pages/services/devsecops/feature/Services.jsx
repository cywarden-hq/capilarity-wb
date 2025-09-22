import React from 'react'
import Reveal from '../../../../components/Reveal'

export default function Services() {
    return (
        <div className="min-h-screen bg-[#001140] flex flex-col items-center justify-center px-5 md:px-10 lg:px-0 lg:pl-30 py-8 md:py-12 lg:py-15">
            {/* Main container */}
            <div className="w-full mb-12 md:mb-16 lg:mb-20">
                {/* Main heading */}
                <Reveal animation="slideUp" delay={200} duration="normal" easing="elegant">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-white text-center lg:text-left leading-tight tracking-tight mb-12 md:mb-16 lg:mb-20">
                        Managed DevSecOps Services.
                    </h1>
                </Reveal>
                {/* Main content area */}
                <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-30">

                    {/* Left side - Image */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                        <Reveal animation="slideRight" delay={400} duration="normal" easing="elegant">
                            <img src="/images/devsecops/services.svg" alt="DevSecOps Services" className="w-full max-w-md lg:max-w-none h-auto" />
                        </Reveal>
                    </div>

                    {/* Right side - Content cards */}
                    <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-10">
                        <Reveal animation="slideLeft" delay={600} duration="normal" easing="elegant">
                            <div className="bg-white rounded-2xl px-6 md:px-10 lg:px-15 py-4 md:py-5 hover:scale-105 hover:-translate-x-2 transition-all duration-300">
                                <p className="text-base text-justify md:text-lg lg:text-xl leading-relaxed text-text-gray font-normal m-0">
                                    Compliance and monitoring happen continuously delivering audit ready reports and real, time protection without slowing down delivery.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal animation="slideLeft" delay={800} duration="normal" easing="elegant">
                            <div className="bg-white rounded-2xl px-6 md:px-10 lg:px-15 py-4 md:py-5 hover:scale-105 hover:-translate-x-2 transition-all duration-300">
                                <p className="text-base text-justify md:text-lg lg:text-xl leading-relaxed text-text-gray font-normal m-0">
                                    Secrets stay protected in encrypted vaults, while streamlined operations cut unnecessary tool costs and keep security spend under control.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal animation="slideLeft" delay={1000} duration="normal" easing="elegant">
                            <div className="bg-white rounded-2xl px-6 md:px-10 lg:px-15 py-4 md:py-5 hover:scale-105 hover:-translate-x-2 transition-all duration-300">
                                <p className="text-base text-justify md:text-lg lg:text-xl leading-relaxed text-text-gray font-normal m-0">
                                    Security is built into the pipeline from the start, with code scans, dependency checks, and container security running automatically as you deploy.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    );
}
