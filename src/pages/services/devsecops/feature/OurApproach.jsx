import React from 'react'
import Reveal from '../../../../components/Reveal'

export default function OurApproach() {
    return (
        <div className="min-h-screen bg-white pb-16 md:pb-20 lg:pb-30 px-4 md:px-8 lg:px-20 border-b-2 border-[#030605]">
            <div className="max-w-6xl mx-auto relative">
                {/* Vertical Line - starts from top of section */}
                {/* <Reveal animation="slideUp" delay={200} duration="slow" easing="elegant"> */}
                    <div className="absolute left-4 md:left-8 lg:left-10 top-0 w-0.5 h-[90%] bg-[#FE9C5E]"></div>
                {/* </Reveal> */}

                {/* Title */}
                <Reveal animation="slideUp" delay={200} duration="normal" easing="elegant">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-12 md:mb-16 lg:mb-20 pt-12 md:pt-16 lg:pt-20 ml-8 md:ml-16 lg:ml-30">
                        Our Approach
                    </h2>
                </Reveal>

                {/* Timeline Container */}
                <div className="relative">

                    {/* Timeline Items */}
                    <div className="space-y-12 md:space-y-16 lg:space-y-20">
                        {/* First Item */}
                        <Reveal animation="slideRight" delay={300} duration="normal" easing="elegant">
                            <div className="flex items-start gap-6 md:gap-8 lg:gap-12">
                                {/* Circle Node */}
                                <div className="relative z-10 flex-shrink-0">
                                    <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[78px] lg:h-[78px] bg-[#383838] rounded-full border-2 md:border-4 border-white flex items-center justify-center"
                                        style={{
                                            boxShadow: '0 0 4px 8px rgba(255, 98, 0, 0.87)'
                                        }}>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-1 md:pt-2">
                                    <p className="text-base md:text-lg lg:text-xl text-black leading-[1.4] md:leading-[1.6] lg:leading-[46px]">
                                        Capilarity helps you embed security seamlessly across the entire software development lifecycle. From the first commit to production release, every stage is protected with automated checks that keep your code and infrastructure resilient.
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        {/* Second Item */}
                        <Reveal animation="slideRight" delay={400} duration="normal" easing="elegant">
                            <div className="flex items-start gap-6 md:gap-8 lg:gap-12">
                                {/* Circle Node */}
                                <div className="relative z-10 flex-shrink-0">
                                    <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[78px] lg:h-[78px] bg-[#383838] rounded-full border-2 md:border-4 border-white flex items-center justify-center"
                                        style={{
                                            boxShadow: '0 0 4px 8px rgba(255, 98, 0, 0.87)'
                                        }}>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-1 md:pt-2">
                                    <p className="text-base md:text-lg lg:text-xl text-black leading-[1.4] md:leading-[1.6] lg:leading-[46px]">
                                        By shifting security left, vulnerabilities are detected and resolved early, long before they can reach production and cause costly delays. At the same time, secure baselines and integrated threat modeling ensure your infrastructure is hardened from day one.
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        {/* Third Item */}
                        <Reveal animation="slideRight" delay={500} duration="normal" easing="elegant">
                            <div className="flex items-start gap-6 md:gap-8 lg:gap-12">
                                {/* Circle Node */}
                                <div className="relative z-10 flex-shrink-0">
                                    <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[78px] lg:h-[78px] bg-[#383838] rounded-full border-2 md:border-4 border-white flex items-center justify-center"
                                        style={{
                                            boxShadow: '0 0 4px 8px rgba(255, 98, 0, 0.87)'
                                        }}>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-1 md:pt-2">
                                    <p className="text-base md:text-lg lg:text-xl text-black leading-[1.4] md:leading-[1.6] lg:leading-[46px]">
                                        Most importantly, security never slows you down. Automated guardrails keep pipelines fast and compliant, so your teams can release features with confidence, knowing every build is validated against security and regulatory requirements before it goes live.
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
