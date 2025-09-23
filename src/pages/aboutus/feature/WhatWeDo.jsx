import React from 'react'
import Reveal from '../../../components/Reveal'

export default function WhatWeDo() {
    return (
        <div className="min-h-screen bg-white py-8 md:py-16 lg:py-20 flex flex-col gap-8 md:gap-12 lg:gap-20">
            <Reveal animation="fadeIn" delay={200} duration="normal" easing="smooth">
                <p className="text-xs md:text-lg lg:text-xl px-4 md:px-8 lg:px-40 font-light lg:font-normal text-center text-[#030303] leading-[200%]">
                    Capilarity is a consulting and managed services firm specializing in enterprise digital infrastructure.
                    Since 2006, we've partnered with Fortune 500 leaders and global enterprises to architect, secure, and manage the systems powering modern business.
                    Our Agile and DevOps-driven approach ensures every solution sovereign cloud, zero-trust security, or large-scale AI is delivered with reliability, scalability, and cost-efficiency.
                    As an extension of our clients' teams, we enable resilient operations and accelerate innovation worldwide.
                </p>
            </Reveal>
            <div className="max-w-7xl mx-10 lg:m-0">
                <div className="relative flex flex-col lg:flex-row text-center lg:text-left gap-8 md:gap-12 lg:gap-20">
                    {/* Left side - Text content */}
                    <div className="w-full lg:w-[85%]">
                        {/* Title */}
                        <Reveal animation="slideUp" delay={400} duration="normal" easing="elegant">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl pl-0 md:pl-8 lg:pl-40 font-bold text-black mb-6 md:mb-8 lg:mb-12 leading-tight">
                                What We Do
                            </h2>
                        </Reveal>

                        {/* Text content */}
                        <Reveal animation="slideUp" delay={600} duration="slow" easing="elegant">
                            <div className="bg-[#edf5ff] p-6 md:p-12 lg:p-20 pr-6 md:pr-12 lg:pr-40 rounded-tr-[50px] md:rounded-tr-[75px] lg:rounded-tr-[100px] hover:scale-102 transition-all duration-300 ease-out">
                                <div className="space-y-6 md:space-y-8 lg:space-y-10 text-justify text-base md:text-lg lg:text-xl text-black leading-[1.5] md:leading-[1.6] lg:leading-[37px]">
                                    <p>
                                        At Capilarity, we enable enterprise-grade digital transformations across secure, compliant, and high-performing cloud environments, whether public, private, hybrid, or multi-cloud. Our end-to-end approach ensures maximum availability, efficiency and ROI, all backed by a single SLA from infrastructure to application.
                                    </p>

                                    <p>
                                        We take a consultative, value-driven approach to empower your business. From seamless migrations, FinOps optimization to advanced cybersecurity, Capilarity accelerates your digital journey while minimizing risk.
                                    </p>

                                    <p>
                                        Our solutions are tailored for enterprises in highly regulated sectors, including BFSI, Healthcare, tech driven delivering future-ready, resilient, and compliant digital infrastructure that drives measurable business outcomes.
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right side - Illustration placeholder */}
                    <div className="hidden lg:block absolute top-0 -right-40">
                        <img
                            src="/images/aboutus/whatwedo.svg"
                            alt="What We Do"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}