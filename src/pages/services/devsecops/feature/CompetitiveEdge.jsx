import React from 'react'
import Reveal from '../../../../components/Reveal'

export default function CompetitiveEdge() {
    return (
        <div className="min-h-screen bg-white py-16 md:py-24 lg:py-50 px-4 md:px-8 lg:px-20 xl:px-40 relative">
            {/* Background Image - Hidden on mobile, visible on desktop */}
            <Reveal animation="fadeIn" delay={200} duration="slow" easing="smooth">
                <img
                    src="/images/devsecops/competitive_edge.svg"
                    alt="Competitive Edge"
                    className="hidden lg:block absolute items-center bottom-30 left-0"
                />
            </Reveal>
            <div className="w-full mx-auto">
                <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
                    {/* Title Section */}
                    <Reveal animation="slideUp" delay={200} duration="normal" easing="elegant">
                        <div className="w-full">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-8 md:mb-12 lg:mb-16 leading-tight">
                                Why choose our service, <br />
                                Competitive Edge of Capilarity
                            </h2>
                        </div>
                    </Reveal>

                    {/* Content Section */}
                    <div className="relative w-full flex flex-col gap-8 md:gap-16 lg:gap-20 xl:gap-30">
                        {/* First Paragraph */}
                        <Reveal animation="slideLeft" delay={300} duration="normal" easing="elegant">
                            <div className="relative lg:ml-[30%]">
                                <div className="pl-4 md:pl-6 lg:pl-8 py-4 md:py-5 lg:py-6 rounded-lg lg:rounded-none"
                                    style={{
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                    }}>
                                    <p className="text-base md:text-lg lg:text-xl text-black leading-[1.4] md:leading-[1.6] lg:leading-[47px]">
                                        At Capilarity, we don't just hand over tools, we take responsibility for outcomes. Our Managed DevSecOps services are designed to own the entire security lifecycle, so your teams can focus on innovation, customer experience, and business growth.
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        {/* Second Paragraph */}
                        <Reveal animation="slideLeft" delay={400} duration="normal" easing="elegant">
                            <div className="relative lg:ml-[40%]">
                                <div className="pl-4 md:pl-6 lg:pl-8 py-4 md:py-5 lg:py-6 rounded-lg lg:rounded-none"
                                    style={{
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                    }}>
                                    <p className="text-base md:text-lg lg:text-xl text-black leading-[1.4] md:leading-[1.6] lg:leading-[47px]">
                                        With our team running the operations, you eliminate the constant burden of patching while gaining confidence that every release is protected by enterprise level security.
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        {/* Third Paragraph */}
                        <Reveal animation="slideLeft" delay={700} duration="normal" easing="elegant">
                            <div className="relative lg:ml-[50%]">
                                <div className="pl-4 md:pl-6 lg:pl-8 py-4 md:py-5 lg:py-6 rounded-lg lg:rounded-none"
                                    style={{
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                    }}>
                                    <p className="text-base md:text-lg lg:text-xl text-black leading-[1.4] md:leading-[1.6] lg:leading-[47px]">
                                        We embed security into your pipelines from the beginning, catching risks before they become costly issues and ensuring compliance without slowing down delivery.
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    )
}
