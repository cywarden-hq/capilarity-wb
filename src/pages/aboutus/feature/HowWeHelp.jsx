import React from 'react'
import Reveal from '../../../components/Reveal'

export default function HowWeHelp() {
    return (
        <div className="relative min-h-screen bg-white py-8 md:py-16 lg:py-30 px-4 md:px-8 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Header Content */}
                <div className="flex flex-col gap-8 md:gap-12 lg:gap-20 mb-8 md:mb-12 lg:mb-16">
                    <Reveal animation="slideUp" delay={200} duration="normal" easing="elegant">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-black text-center lg:text-left">
                            How We Can Help
                        </h2>
                    </Reveal>
                    <Reveal animation="fadeIn" delay={400} duration="normal" easing="smooth">
                        <p className="text-base md:text-lg lg:text-xl text-black text-center font-normal leading-[1.5] md:leading-[1.6] lg:leading-[37px]">
                            At Capilarity, we accelerate your mission-critical digital transformations, empowering your business to stay ahead in an ever-changing market. Leveraging the world's leading technologies across infrastructure, applications, data, and security, we help you:
                        </p>
                    </Reveal>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-20">
                    
                    {/* Card 1: Drive Growth */}
                    <Reveal animation="scaleUp" delay={400} duration="normal" easing="elegant">
                        <div className="bg-[#FFF3EC] p-6 md:p-10 lg:pl-15 lg:pr-15 lg:pt-10 rounded-xl md:rounded-2xl hover:scale-102 transition-all duration-300 ease-out">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 lg:mb-10">
                                Drive Growth
                            </h3>
                            <p className="text-base md:text-lg lg:text-2xl text-black leading-[1.4] md:leading-[1.5] lg:leading-[30px] mb-4 md:mb-6">
                                Unlock new opportunities and scale your business with confidence.
                            </p>
                            <div className="w-full h-32 md:h-40 lg:h-48 rounded-lg flex items-center justify-end">
                                <img src="/images/aboutus/howwehelp1.svg" alt="Drive Growth" className="h-full w-auto object-contain" />
                            </div>
                        </div>
                    </Reveal>

                    {/* Card 2: Future-Proof Operations */}
                    <Reveal animation="scaleUp" delay={600} duration="normal" easing="elegant">
                        <div className="bg-[#E4F0FF] p-6 md:p-10 lg:pl-15 lg:pr-15 lg:pt-10 rounded-xl md:rounded-2xl hover:scale-102 transition-all duration-300 ease-out">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 lg:mb-10">
                                Future-Proof Operations
                            </h3>
                            <p className="text-base md:text-lg lg:text-2xl text-black leading-[1.4] md:leading-[1.5] lg:leading-[30px] mb-4 md:mb-6">
                                Build resilience and adaptability for the challenges of tomorrow.
                            </p>
                            <div className="w-full h-32 md:h-40 lg:h-48 rounded-lg flex items-center justify-end">
                                <img src="/images/aboutus/howwehelp2.svg" alt="Future-Proof Operations" className="h-full w-auto object-contain" />
                            </div>
                        </div>
                    </Reveal>

                    {/* Card 3: Enhance Customer Excellence */}
                    <Reveal animation="scaleUp" delay={300} duration="normal" easing="elegant">
                        <div className="bg-[#E4F0FF] p-6 md:p-10 lg:pl-15 lg:pr-15 lg:pt-10 rounded-xl md:rounded-2xl hover:scale-102 transition-all duration-300 ease-out">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 lg:mb-10">
                                Enhance Customer Excellence
                            </h3>
                            <p className="text-base md:text-lg lg:text-2xl text-black leading-[1.4] md:leading-[1.5] lg:leading-[30px] mb-4 md:mb-6">
                                Deliver seamless, reliable experiences that delight your customers.
                            </p>
                            <div className="w-full h-32 md:h-40 lg:h-48 rounded-lg flex items-center justify-end">
                                <img src="/images/aboutus/howwehelp3.svg" alt="Enhance Customer Excellence" className="h-full w-auto object-contain" />
                            </div>
                        </div>
                    </Reveal>

                    {/* Card 4: Mitigate Risk */}
                    <Reveal animation="scaleUp" delay={500} duration="normal" easing="elegant">
                        <div className="bg-[#FFF3EC] p-6 md:p-10 lg:pl-15 lg:pr-15 lg:pt-10 rounded-xl md:rounded-2xl hover:scale-102 transition-all duration-300 ease-out">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 md:mb-6 lg:mb-10">
                                Mitigate Risk
                            </h3>
                            <p className="text-base md:text-lg lg:text-2xl text-black leading-[1.4] md:leading-[1.5] lg:leading-[30px] mb-4 md:mb-6">
                                Navigate uncertainty with secure, robust, and agile solutions.
                            </p>
                            <div className="w-full h-32 md:h-40 lg:h-48 rounded-lg flex items-center justify-end">
                                <img src="/images/aboutus/howwehelp4.svg" alt="Mitigate Risk" className="h-full w-auto object-contain" />
                            </div>
                        </div>
                    </Reveal>

                </div>
            </div>
        </div>
    )
}
