import React from 'react'

export default function WhyPartner() {
    return (
        <div className="min-h-screen bg-white py-40 px-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl lg:text-6xl font-semibold text-black mb-8">
                        Why Partner With Capilarity?
                    </h2>
                </div>

                {/* Four Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Card 1: Shared Growth */}
                    <div className="relative overflow-hidden group hover:scale-105 transition-all duration-300">
                        <div className="absolute inset-0 bg-black/60 z-10"></div>
                        <div className="relative z-20 p-8 w-[312px] h-[450px] flex flex-col justify-start">
                            <h3 className="text-4xl font-regular text-white mb-4 leading-[51px]">
                                Shared <br /> Growth
                            </h3>
                            <hr className="w-full border-white mb-4" />
                            <p className="text-white text-lg font-light leading-[40px]">
                                Together, we unlock new opportunities to serve clients with innovative, future-ready security solutions.
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                            <img src="/images/partners/partner1.svg" className="w-full h-full object-cover" alt="Shared Growth" />
                        </div>
                    </div>

                    {/* Card 2: Resilience at Scale */}
                    <div className="relative overflow-hidden group hover:scale-105 transition-all duration-300">
                        <div className="absolute inset-0 bg-black/60 z-10"></div>
                        <div className="relative z-20 p-8 w-[312px] h-[450px] flex flex-col justify-start">
                            <h3 className="text-4xl font-regular text-white mb-4 leading-[51px]">
                                Resilience at Scale
                            </h3>
                            <hr className="w-full border-white mb-4" />
                            <p className="text-white text-lg font-light leading-[40px]">
                                As threats shift, we help you and your clients stay agile, resilient, and ahead of attackers.
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                            <img src="/images/partners/partner2.svg" className="w-full h-full object-cover" alt="Resilience at Scale" />
                        </div>
                    </div>

                    {/* Card 3: Trusted Expertise */}
                    <div className="relative overflow-hidden group hover:scale-105 transition-all duration-300">
                        <div className="absolute inset-0 bg-black/60 z-10"></div>
                        <div className="relative z-20 p-8 w-[312px] h-[450px] flex flex-col justify-start">
                            <h3 className="text-4xl font-regular text-white mb-4 leading-[51px]">
                                Trusted Expertise
                            </h3>
                            <hr className="w-full border-white mb-4" />
                            <p className="text-white text-lg font-light leading-[40px]">
                                Our team brings deep cybersecurity knowledge and hands-on experience, helping you strengthen your offerings.
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                            <img src="/images/partners/partner3.svg" className="w-full h-full object-cover" alt="Trusted Expertise" />
                        </div>
                    </div>

                    {/* Card 4: Seamless Collaboration - Highlighted with blue border */}
                    <div className="relative overflow-hidden group hover:scale-105 transition-all duration-300">
                        <div className="absolute inset-0 bg-black/60 z-10"></div>
                        <div className="relative z-20 p-8 w-[312px] h-[450px] flex flex-col justify-start">
                            <h3 className="text-4xl font-regular text-white mb-4 leading-[51px]">
                                Seamless Collaboration
                            </h3>
                            <hr className="w-full border-white mb-4" />
                            <p className="text-white text-lg font-light leading-[40px]">
                                From technical integrations to joint go-to-market strategies, we make partnership simple and impactful.
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                            <img src="/images/partners/partner4.svg" className="w-full h-full object-cover" alt="Seamless Collaboration" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
