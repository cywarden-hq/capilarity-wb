import React from 'react'

export default function Tools() {
    return (
        <div className="min-h-screen bg-white py-20">
            {/* Header Banner */}
            <div className="bg-[#001140] py-8 px-40">
                <p className="text-white text-xl font-regular text-center leading-[53px]">
                    Every day without Managed DevSecOps increases your risk exposure. Don't wait for the next breach, outage, or compliance penalty to strike, secure your business today.
                </p>
            </div>

            {/* Main Content */}
            <div className="px-20 py-16">
                {/* Title */}
                <h2 className="text-5xl lg:text-6xl font-bold text-black text-center mb-16">
                    DevSecOps Tools
                </h2>

                {/* Tool Categories Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        
                        {/* Row 1 - Left: Secrets Management */}
                        <div className="space-y-10">
                            <div className="bg-[#FFEEDF] rounded-full text-center py-3">
                                <h3 className="text-black text-2xl font-regular">Secrets Management:</h3>
                            </div>
                            <div className="flex flex-wrap gap-8 items-center justify-center">
                                <div className="w-32 h-20 flex items-center justify-center">
                                    <img src="/images/devsecops/tool1.svg" alt="HashiCorp Vault" />
                                </div>
                                <div className="w-32 h-20 flex items-center justify-center">
                                    <img src="/images/devsecops/tool2.svg" alt="Red Hat" />
                                </div>
                            </div>
                        </div>

                        {/* Row 1 - Right: Kubernetes & Runtime Security */}
                        <div className="space-y-10">
                            <div className="bg-[#FFEEDF] rounded-full text-center py-3">
                                <h3 className="text-black text-2xl font-regular">Kubernetes & Runtime Security:</h3>
                            </div>
                            <div className="flex flex-wrap gap-8 items-center justify-center">
                                <div className="w-32 h-20 flex items-center justify-center">
                                    <img src="/images/devsecops/tool3.svg" alt="Falco" />
                                </div>
                            </div>
                        </div>

                        {/* Row 2 - Left: Code & Dependencies Security */}
                        <div className="space-y-10">
                            <div className="bg-[#FFEEDF] rounded-full text-center py-3">
                                <h3 className="text-black text-2xl font-regular">Code & Dependencies Security:</h3>
                            </div>
                            <div className="flex flex-wrap gap-8 items-center justify-center">
                                <div className="w-32 h-20 flex items-center justify-center">
                                    <img src="/images/devsecops/tool4.svg" alt="Snyk" />
                                </div>
                                <div className="w-32 h-20 flex items-center justify-center">
                                    <img src="/images/devsecops/tool5.svg" alt="SonarQube" />
                                </div>
                            </div>
                        </div>

                        {/* Row 2 - Right: Cloud & Posture Security */}
                        <div className="space-y-10">
                            <div className="bg-[#FFEEDF] rounded-full text-center py-3">
                                <h3 className="text-black text-2xl font-regular">Cloud & Posture Security:</h3>
                            </div>
                            <div className="flex flex-wrap gap-8 items-center justify-center">
                                <div className="w-32 h-20 flex items-center justify-center">
                                    <img src="/images/devsecops/tool6.svg" alt="Wiz" />
                                </div>
                            </div>
                        </div>

                        {/* Row 3 - Left: IaC & Container Security */}
                        <div className="space-y-10">
                            <div className="bg-[#FFEEDF] rounded-full text-center py-3">
                                <h3 className="text-black text-2xl font-regular">IaC & Container Security:</h3>
                            </div>
                            <div className="flex flex-wrap gap-8 items-center justify-center">
                                <div className="w-32 h-20 flex items-center justify-center">
                                    <img src="/images/devsecops/tool7.svg" alt="Checkov" />
                                </div>
                                <div className="w-32 h-20 flex items-center justify-center">
                                    <img src="/images/devsecops/tool8.svg" alt="Aqua Trivy" />
                                </div>
                            </div>
                        </div>

                        {/* Row 3 - Right: Monitoring & Detection */}
                        <div className="space-y-10">
                            <div className="bg-[#FFEEDF] rounded-full text-center py-3">
                                <h3 className="text-black text-2xl font-regular">Monitoring & Detection:</h3>
                            </div>
                            <div className="flex flex-wrap gap-8 items-center justify-center">
                                <div className="w-32 h-20 flex items-center justify-center">
                                    <img src="/images/devsecops/tool9.svg" alt="Splunk" />
                                </div>
                                <div className="w-32 h-20 flex items-center justify-center">
                                    <img src="/images/devsecops/tool10.svg" alt="ELK Stack" />
                                </div>
                            </div>
                        </div>

                        {/* Row 4 - Centered: Incident Response / Automation */}
                        <div className="lg:col-span-2 space-y-10">
                            <div className="flex justify-center">   
                                <div className="bg-[#FFEEDF] rounded-full text-center py-3 px-10">
                                    <h3 className="text-black text-2xl font-regular">Incident Response / Automation:</h3>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="w-48 h-20 flex items-center justify-center">
                                    <img src="/images/devsecops/tool11.svg" alt="Cortex XSOAR" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}