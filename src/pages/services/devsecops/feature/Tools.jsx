import React from 'react'
import Reveal from '../../../../components/Reveal'

export default function Tools() {
    return (
        <div className="min-h-screen bg-white py-12 md:py-16 lg:py-20">
            {/* Header Banner */}
            <Reveal animation="fadeIn" delay={200} duration="normal" easing="smooth">
                <div className="bg-[#001140] py-6 md:py-8 px-4 md:px-8 lg:px-20 xl:px-40">
                    <p className="text-white text-base md:text-lg lg:text-xl font-regular text-center leading-[1.4] md:leading-[1.6] lg:leading-[53px]">
                        Every day without Managed DevSecOps increases your risk exposure. Don't wait for the next breach, outage, or compliance penalty to strike, secure your business today.
                    </p>
                </div>
            </Reveal>

            {/* Main Content */}
            <div className="px-4 md:px-8 lg:px-20 py-12 md:py-16">
                {/* Title */}
                <Reveal animation="slideUp" delay={200} duration="normal" easing="elegant">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black text-center mb-12 md:mb-16">
                        DevSecOps Tools
                    </h2>
                </Reveal>

                {/* Tool Categories Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
                        
                        {/* Row 1 - Left: Secrets Management */}
                        <Reveal animation="scaleUp" delay={200} duration="normal" easing="elegant">
                            <div className="space-y-6 md:space-y-8 lg:space-y-10">
                                <div className="bg-[#FFEEDF] rounded-full text-center py-2 md:py-3 px-4">
                                    <h3 className="text-black text-lg md:text-xl lg:text-2xl font-regular">Secrets Management:</h3>
                                </div>
                                <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 items-center justify-center">
                                    <div className="w-24 h-16 md:w-28 md:h-18 lg:w-32 lg:h-20 flex items-center justify-center">
                                        <img src="/images/devsecops/tool1.svg" alt="HashiCorp Vault" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="w-24 h-16 md:w-28 md:h-18 lg:w-32 lg:h-20 flex items-center justify-center">
                                        <img src="/images/devsecops/tool2.svg" alt="Red Hat" className="w-full h-full object-contain" />
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Row 1 - Right: Kubernetes & Runtime Security */}
                        <Reveal animation="scaleUp" delay={300} duration="normal" easing="elegant">
                            <div className="space-y-6 md:space-y-8 lg:space-y-10">
                                <div className="bg-[#FFEEDF] rounded-full text-center py-2 md:py-3 px-4">
                                    <h3 className="text-black text-lg md:text-xl lg:text-2xl font-regular">Kubernetes & Runtime Security:</h3>
                                </div>
                                <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 items-center justify-center">
                                    <div className="w-24 h-16 md:w-28 md:h-18 lg:w-32 lg:h-20 flex items-center justify-center">
                                        <img src="/images/devsecops/tool3.svg" alt="Falco" className="w-full h-full object-contain" />
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Row 2 - Left: Code & Dependencies Security */}
                        <Reveal animation="scaleUp" delay={400} duration="normal" easing="elegant">
                            <div className="space-y-6 md:space-y-8 lg:space-y-10">
                                <div className="bg-[#FFEEDF] rounded-full text-center py-2 md:py-3 px-4">
                                    <h3 className="text-black text-lg md:text-xl lg:text-2xl font-regular">Code & Dependencies Security:</h3>
                                </div>
                                <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 items-center justify-center">
                                    <div className="w-24 h-16 md:w-28 md:h-18 lg:w-32 lg:h-20 flex items-center justify-center">
                                        <img src="/images/devsecops/tool4.svg" alt="Snyk" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="w-24 h-16 md:w-28 md:h-18 lg:w-32 lg:h-20 flex items-center justify-center">
                                        <img src="/images/devsecops/tool5.svg" alt="SonarQube" className="w-full h-full object-contain" />
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Row 2 - Right: Cloud & Posture Security */}
                        <Reveal animation="scaleUp" delay={500} duration="normal" easing="elegant">
                            <div className="space-y-6 md:space-y-8 lg:space-y-10">
                                <div className="bg-[#FFEEDF] rounded-full text-center py-2 md:py-3 px-4">
                                    <h3 className="text-black text-lg md:text-xl lg:text-2xl font-regular">Cloud & Posture Security:</h3>
                                </div>
                                <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 items-center justify-center">
                                    <div className="w-24 h-16 md:w-28 md:h-18 lg:w-32 lg:h-20 flex items-center justify-center">
                                        <img src="/images/devsecops/tool6.svg" alt="Wiz" className="w-full h-full object-contain" />
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Row 3 - Left: IaC & Container Security */}
                        <Reveal animation="scaleUp" delay={600} duration="normal" easing="elegant">
                            <div className="space-y-6 md:space-y-8 lg:space-y-10">
                                <div className="bg-[#FFEEDF] rounded-full text-center py-2 md:py-3 px-4">
                                    <h3 className="text-black text-lg md:text-xl lg:text-2xl font-regular">IaC & Container Security:</h3>
                                </div>
                                <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 items-center justify-center">
                                    <div className="w-24 h-16 md:w-28 md:h-18 lg:w-32 lg:h-20 flex items-center justify-center">
                                        <img src="/images/devsecops/tool7.svg" alt="Checkov" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="w-24 h-16 md:w-28 md:h-18 lg:w-32 lg:h-20 flex items-center justify-center">
                                        <img src="/images/devsecops/tool8.svg" alt="Aqua Trivy" className="w-full h-full object-contain" />
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Row 3 - Right: Monitoring & Detection */}
                        <Reveal animation="scaleUp" delay={700} duration="normal" easing="elegant">
                            <div className="space-y-6 md:space-y-8 lg:space-y-10">
                                <div className="bg-[#FFEEDF] rounded-full text-center py-2 md:py-3 px-4">
                                    <h3 className="text-black text-lg md:text-xl lg:text-2xl font-regular">Monitoring & Detection:</h3>
                                </div>
                                <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 items-center justify-center">
                                    <div className="w-24 h-16 md:w-28 md:h-18 lg:w-32 lg:h-20 flex items-center justify-center">
                                        <img src="/images/devsecops/tool9.svg" alt="Splunk" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="w-24 h-16 md:w-28 md:h-18 lg:w-32 lg:h-20 flex items-center justify-center">
                                        <img src="/images/devsecops/tool10.svg" alt="ELK Stack" className="w-full h-full object-contain" />
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                    </div>

                    {/* Row 4 - Centered: Incident Response / Automation - Outside the grid */}
                    <Reveal animation="scaleUp" delay={800} duration="normal" easing="elegant">
                        <div className="mt-12 md:mt-16 lg:mt-20 flex flex-col items-center space-y-6 md:space-y-8 lg:space-y-10">
                            <div className="bg-[#FFEEDF] rounded-full text-center py-2 md:py-3 px-6 md:px-8 lg:px-10">
                                <h3 className="text-black text-lg md:text-xl lg:text-2xl font-regular">Incident Response / Automation:</h3>
                            </div>
                            <div className="w-32 h-16 md:w-40 md:h-18 lg:w-48 lg:h-20 flex items-center justify-center">
                                <img src="/images/devsecops/tool11.svg" alt="Cortex XSOAR" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}