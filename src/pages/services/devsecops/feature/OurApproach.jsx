import React from 'react'

export default function OurApproach() {
    return (
        <div className="min-h-screen bg-white pb-30 px-20 border-b-2 border-[#030605]">
            <div className="max-w-6xl mx-auto relative">
                {/* Vertical Line - starts from top of section */}
                <div className="absolute left-10 top-0 w-0.5 h-[90%] bg-[#FE9C5E]"></div>

                {/* Title */}
                <h2 className="text-6xl font-bold text-black mb-20 pt-20 ml-30">
                    Our Approach
                </h2>

                {/* Timeline Container */}
                <div className="relative">

                    {/* Timeline Items */}
                    <div className="space-y-20">
                        {/* First Item */}
                        <div className="flex items-start gap-12">
                            {/* Circle Node */}
                            <div className="relative z-10 flex-shrink-0">
                                <div className="w-[78px] h-[78px] bg-[#383838] rounded-full border-4 border-white flex items-center justify-center"
                                    style={{
                                        boxShadow: '0 0 4px 8px rgba(255, 98, 0, 0.87)'
                                    }}>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-2">
                                <p className="text-xl text-black leading-[46px]">
                                    Capilarity helps you embed security seamlessly across the entire software development lifecycle. From the first commit to production release, every stage is protected with automated checks that keep your code and infrastructure resilient.
                                </p>
                            </div>
                        </div>

                        {/* Second Item */}
                        <div className="flex items-start gap-12">
                            {/* Circle Node */}
                            <div className="relative z-10 flex-shrink-0">
                                <div className="w-[78px] h-[78px] bg-[#383838] rounded-full border-4 border-white flex items-center justify-center"
                                    style={{
                                        boxShadow: '0 0 4px 8px rgba(255, 98, 0, 0.87)'
                                    }}>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-2">
                                <p className="text-xl text-black leading-[46px]">
                                    By shifting security left, vulnerabilities are detected and resolved early, long before they can reach production and cause costly delays. At the same time, secure baselines and integrated threat modeling ensure your infrastructure is hardened from day one.
                                </p>
                            </div>
                        </div>

                        {/* Third Item */}
                        <div className="flex items-start gap-12">
                            {/* Circle Node */}
                            <div className="relative z-10 flex-shrink-0">
                                <div className="w-[78px] h-[78px] bg-[#383838] rounded-full border-4 border-white flex items-center justify-center"
                                    style={{
                                        boxShadow: '0 0 4px 8px rgba(255, 98, 0, 0.87)'
                                    }}>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-2">
                                <p className="text-xl text-black leading-[46px]">
                                    Most importantly, security never slows you down. Automated guardrails keep pipelines fast and compliant, so your teams can release features with confidence, knowing every build is validated against security and regulatory requirements before it goes live.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
