import React from 'react'

export default function Services() {
    return (
        <div className="min-h-screen bg-[#001140] flex flex-col items-center justify-center pl-10 lg:pl-30 py-15 font-inter">
            {/* Main container */}
            <div className="w-full mb-20">
                {/* Main heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white text-left leading-tight tracking-tight mb-20">
                    Managed DevSecOps Services.
                </h1>

                {/* Main content area */}
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-30">

                    {/* Left side - Image */}
                    <div>
                        <img src="/images/devsecops/services.svg" alt="DevSecOps Services" className="w-full h-full" />
                    </div>

                    {/* Right side - Content cards */}
                    <div className="flex-1 flex flex-col gap-10">
                        <div className="bg-white/95 backdrop-blur-[10px] rounded-tl-4xl rounded-bl-4xl px-15 py-5 hover:scale-105 hover:-translate-x-2 transition-all duration-300">
                            <p className="text-xl leading-relaxed text-text-gray font-normal m-0">
                                Compliance and monitoring happen continuously delivering audit ready reports and real, time protection without slowing down delivery.
                            </p>
                        </div>

                        <div className="bg-white/95 backdrop-blur-[10px] rounded-tl-4xl rounded-bl-4xl px-15 py-5 hover:scale-105 hover:-translate-x-2 transition-all duration-300">
                            <p className="text-xl leading-relaxed text-text-gray font-normal m-0">
                                Secrets stay protected in encrypted vaults, while streamlined operations cut unnecessary tool costs and keep security spend under control.
                            </p>
                        </div>

                        <div className="bg-white/95 backdrop-blur-[10px] rounded-tl-4xl rounded-bl-4xl px-15 py-5 hover:scale-105 hover:-translate-x-2 transition-all duration-300">
                            <p className="text-xl leading-relaxed text-text-gray font-normal m-0">
                                Security is built into the pipeline from the start, with code scans, dependency checks, and container security running automatically as you deploy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
