import React from 'react'
import Reveal from '../../../components/Reveal'

export default function WhyPartner() {
    return (
        <div className="min-h-screen bg-white py-16 sm:py-20 md:py-32 lg:py-40 px-10 sm:px-15 md:px-20 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <Reveal animation="slideUp" delay={200} duration="normal" easing="elegant">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 sm:mb-8">
                            Why Partner With Capilarity?
                        </h2>
                    </Reveal>
                </div>

                {/* Four Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">

                    {/* Card 1: Shared Growth */}
                    <Reveal animation="slideLeft" delay={400} duration="normal" easing="smooth">
                        <div className="relative overflow-hidden group hover:scale-105 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl">
                            <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/50 transition-all duration-300"></div>
                            <div className="relative z-20 p-4 sm:p-6 md:p-6 lg:p-6 xl:p-8 w-full h-[350px] sm:h-[400px] md:h-[420px] lg:h-[420px] xl:h-[450px] flex flex-col justify-start">
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-regular text-white mb-3 sm:mb-4 leading-tight">
                                    Shared <br /> Growth
                                </h3>
                                <hr className="w-full border-1 border-white mb-3 sm:mb-4" />
                                <p className="text-white text-sm sm:text-base lg:text-lg font-light leading-relaxed">
                                    Together, we unlock new opportunities to serve clients with innovative, future-ready security solutions.
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                                <img src="/images/partners/partner1.svg" className="w-full h-full object-cover" alt="Shared Growth" />
                            </div>
                        </div>
                    </Reveal>

                    {/* Card 2: Resilience at Scale */}
                    <Reveal animation="slideUp" delay={600} duration="normal" easing="smooth">
                        <div className="relative overflow-hidden group hover:scale-105 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl">
                            <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/50 transition-all duration-300"></div>
                            <div className="relative z-20 p-4 sm:p-6 md:p-6 lg:p-6 xl:p-8 w-full h-[350px] sm:h-[400px] md:h-[420px] lg:h-[420px] xl:h-[450px] flex flex-col justify-start">
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-regular text-white mb-3 sm:mb-4 leading-tight">
                                    Resilience at Scale
                                </h3>
                                <hr className="w-full border-1 border-white mb-3 sm:mb-4" />
                                <p className="text-white text-sm sm:text-base lg:text-lg font-light leading-relaxed">
                                    As threats shift, we help you and your clients stay agile, resilient, and ahead of attackers.
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                                <img src="/images/partners/partner2.svg" className="w-full h-full object-cover" alt="Resilience at Scale" />
                            </div>
                        </div>
                    </Reveal>

                    {/* Card 3: Trusted Expertise */}
                    <Reveal animation="slideRight" delay={800} duration="normal" easing="smooth">
                        <div className="relative overflow-hidden group hover:scale-105 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl">
                            <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/50 transition-all duration-300"></div>
                            <div className="relative z-20 p-4 sm:p-6 md:p-6 lg:p-6 xl:p-8 w-full h-[350px] sm:h-[400px] md:h-[420px] lg:h-[420px] xl:h-[450px] flex flex-col justify-start">
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-regular text-white mb-3 sm:mb-4 leading-tight">
                                    Trusted Expertise
                                </h3>
                                <hr className="w-full border-1 border-white mb-3 sm:mb-4" />
                                <p className="text-white text-sm sm:text-base lg:text-lg font-light leading-relaxed">
                                    Our team brings deep cybersecurity knowledge and hands-on experience, helping you strengthen your offerings.
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                                <img src="/images/partners/partner3.svg" className="w-full h-full object-cover" alt="Trusted Expertise" />
                            </div>
                        </div>
                    </Reveal>

                    {/* Card 4: Seamless Collaboration */}
                    <Reveal animation="slideLeft" delay={1000} duration="normal" easing="smooth">
                        <div className="relative overflow-hidden group hover:scale-105 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl">
                            <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/50 transition-all duration-300"></div>
                            <div className="relative z-20 p-4 sm:p-6 md:p-6 lg:p-6 xl:p-8 w-full h-[350px] sm:h-[400px] md:h-[420px] lg:h-[420px] xl:h-[450px] flex flex-col justify-start">
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-regular text-white mb-3 sm:mb-4 leading-tight">
                                    Seamless Collaboration
                                </h3>
                                <hr className="w-full border-1 border-white mb-3 sm:mb-4" />
                                <p className="text-white text-sm sm:text-base lg:text-lg font-light leading-relaxed">
                                    From technical integrations to joint go-to-market strategies, we make partnership simple and impactful.
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                                <img src="/images/partners/partner4.svg" className="w-full h-full object-cover" alt="Seamless Collaboration" />
                            </div>
                        </div>
                    </Reveal>

                </div>
            </div>
        </div>
    )
}
