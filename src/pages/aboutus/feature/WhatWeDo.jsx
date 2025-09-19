import React from 'react'

export default function WhatWeDo() {
    return (
        <div className="min-h-screen bg-white py-20 flex flex-col gap-20">
            <p className="text-xl px-40 font-normal text-center text-[#030303] leading-[200%]">
                Capilarity is a consulting and managed services firm specializing in enterprise digital infrastructure. 
                Since 2006, we’ve partnered with Fortune 500 leaders and global enterprises to architect, secure, and manage the systems powering modern business. 
                Our Agile- and DevOps-driven approach ensures every solution—sovereign cloud, zero-trust security, or large-scale AI—is delivered with reliability, scalability, and cost-efficiency. 
                As an extension of our clients’ teams, we enable resilient operations and accelerate innovation worldwide.
            </p>
            <div className="max-w-7xl">
                <div className="relative flex flex-col lg:flex-row gap-16 lg:gap-20">
                    {/* Left side - Text content */}
                    <div className="w-[85%]">
                        {/* Title */}
                        <h2 className="text-5xl pl-40 lg:text-6xl font-bold text-black mb-12 leading-tight">
                            What We Do
                        </h2>
                        
                        {/* Text content */}
                        <div className="bg-[#edf5ff] p-20 pr-40 rounded-tr-[100px] hover:scale-102 transition-all duration-300 ease-out">
                            <div className="space-y-10 text-left text-xl text-black leading-[37px]">
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
                    </div>

                    {/* Right side - Illustration placeholder */}
                    {/* <div className="lg:w-1/2 flex items-center justify-center"> */}
                    <div className="absolute top-0 -right-40">
                        <img
                            src="/images/aboutus/whatwedo.svg"
                            alt="What We Do"
                            className=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}