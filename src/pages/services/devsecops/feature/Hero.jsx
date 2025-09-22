import React from 'react'
import Reveal from '../../../../components/Reveal'

export default function Hero() {
    return (
        <div className="flex flex-col">
            {/* Mobile Layout */}
            <div className="lg:hidden relative bg-black min-h-screen w-full flex flex-col gap-5 justify-center items-end py-8">
                <div className="w-full max-w-md bg-[#FF9B2F] items-left rounded-tr-[100px] p-8 mb-8">
                    <Reveal animation="slideRight" delay={200} duration="normal" easing="elegant">
                        <h1 className="text-white text-3xl md:text-4xl font-normal text-center leading-tight mb-4">
                            Managed DevSecOps Services
                        </h1>
                    </Reveal>
                    <Reveal animation="slideRight" delay={400} duration="normal" easing="elegant">
                        <p className="text-[#2F2F2F] text-base md:text-lg font-normal text-center leading-relaxed">
                            Accelerate innovation without compromising security, reliability, or compliance.
                        </p>
                    </Reveal>
                </div>
                <div className="w-full max-w-sm rounded-tl-[100px] overflow-hidden">
                    <Reveal animation="slideLeft" delay={400} duration="normal" easing="elegant">
                        <img src="/images/devsecops/hero_bg.svg" alt="DevSecOps" className="w-full h-auto object-cover" />
                    </Reveal>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block relative bg-black min-h-screen w-full">
                <div className="h-[85%] w-[65%] bg-[#FF9B2F] rounded-tr-[500px] absolute bottom-0 left-0">
                    <Reveal animation="slideRight" delay={200} duration="normal" easing="elegant">
                        <h1 className="text-white text-6xl xl:text-8xl font-normal text-left pl-15 pt-10 leading-tight">
                            Managed <br />
                            DevSecOps <br />
                            Services
                        </h1>
                    </Reveal>
                    <Reveal animation="slideRight" delay={400} duration="normal" easing="elegant">
                        <p className="text-[#2F2F2F] text-xl xl:text-2xl font-normal text-left pl-15 pt-5 leading-none">
                            Accelerate innovation without <br /> compromising security, reliability, or compliance.
                        </p>
                    </Reveal>
                </div>

                <div className="h-[70%] w-[60%] mb-8 rounded-bl-[300px] absolute bottom-0 right-0 p-[4px] bg-gradient-to-r from-[#E005FD]/40 via-[#FFFFFF]/50 to-[#FFFFFF]/50">
                    <div className="w-full h-full rounded-bl-[300px] overflow-hidden">
                        <Reveal animation="slideLeft" delay={400} duration="normal" easing="elegant">
                            <img src="/images/devsecops/hero_bg.svg" alt="DevSecOps" className="w-full h-full object-cover rounded-bl-[300px]" />
                        </Reveal>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative bg-white min-h-screen px-4 md:px-8 lg:pr-20 pb-20 lg:pb-40">
                <div className="relative border-gray-200 border-2 p-6 md:p-12 lg:p-20">
                    <div className="hidden lg:block absolute -top-40 left-20 flex justify-center items-center z-10">
                        <Reveal animation="slideUp" delay={600} duration="normal" easing="elegant">
                            <img
                                src="/images/devsecops/hero_bg_middle.svg"
                                alt="DevSecOps Hero"
                                className="w-full h-full"
                            />
                        </Reveal>
                    </div>

                    <Reveal animation="fadeIn" delay={600} duration="normal" easing="elegant">
                        <p className="text-base md:text-lg lg:text-xl font-normal text-[#030303] lg:pl-[30%] leading-[1.6] md:leading-[1.8] lg:leading-[200%]">
                            At Capilarity, we embed security into every stage of your software delivery pipeline not as an afterthought, but as a foundation. Our Managed DevSecOps service combines automation, compliance, and expert operations so you can innovate quickly without compromising security.
                        </p>
                    </Reveal>
                    <div className="hidden lg:block absolute -bottom-105 right-0">
                        <Reveal animation="slideUp" delay={800} duration="normal" easing="elegant">
                            <img src="/images/devsecops/hero_bg_bottom.svg" alt="DevSecOps" className="w-full h-full object-cover filter" />
                        </Reveal>
                    </div>
                </div>
                <div className="px-4 md:px-8 lg:px-20">
                    <Reveal animation="slideUp" delay={600} duration="normal" easing="elegant">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-left font-normal text-[#030303] pt-8 md:pt-12 lg:pt-20 leading-[1.2] md:leading-[1.4] lg:leading-[200%]">
                            Why DevSecOps Matters
                        </h1>
                    </Reveal>
                    <Reveal animation="fadeIn" delay={800} duration="normal" easing="elegant">
                        <p className="text-base md:text-lg lg:text-xl font-normal text-[#030303] pt-4 md:pt-6 lg:pt-5 pr-0 lg:pr-[25%] leading-[1.6] md:leading-[1.8] lg:leading-[200%]">
                            Traditional security often slows down delivery and still leaves critical gaps.
                            Capilarity's DevSecOps approach turns security into an enabler,
                            woven directly into your development lifecycle instead of standing in the way.

                            <br /> <br />

                            Catch risks early by flagging vulnerabilities right at commit time, when fixes are fastest and cheapest.
                            Keep pipelines moving with automated scans and validations that maintain speed without compromising compliance.

                            <br /> <br />

                            Bring developers, operations, and security onto a single integrated workflow, breaking down silos and empowering teams to move faster together.
                            With built-in security guardrails, you can release features frequently and confidently, knowing your applications are resilient from the start.
                        </p>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}
