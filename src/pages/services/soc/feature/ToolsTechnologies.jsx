import React from 'react'
import Reveal from '../../../../components/Reveal'

export default function ToolsTechnologies() {
    const toolCategories = [
        {
            title: "Security Information & Event Management (SIEM)",
            tools: [
                { name: "Splunk", logo: "/images/soc/tool1.svg" },
                { name: "Microsoft Sentinel", logo: "/images/soc/tool2.svg" },
                { name: "IBM QRadar", logo: "/images/soc/tool3.svg" },
                { name: "Elastic Security", logo: "/images/soc/tool4.svg" }
            ]
        },
        {
            title: "Endpoint Detection & Response (EDR/XDR)",
            tools: [
                { name: "CrowdStrike", logo: "/images/soc/tool5.svg" },
                { name: "Microsoft Defender for Endpoint", logo: "/images/soc/tool6.svg" },
                { name: "SentinelOne", logo: "/images/soc/tool7.svg" },
                { name: "Cortex", logo: "/images/soc/tool8.svg" }
            ]
        },
        {
            title: "Incident Response & Automation",
            tools: [
                { name: "Cortex XSOAR", logo: "/images/soc/tool9.svg" },
                { name: "Splunk SOAR", logo: "/images/soc/tool10.svg" },
                { name: "ServiceNow", logo: "/images/soc/tool11.svg" }
            ]
        }
    ]

    return (
        <section className="py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <Reveal animation="slideUp" duration="normal" delay={100}>
                        <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
                            Tools & Technologies We Use
                        </h2>
                    </Reveal>
                    <Reveal animation="slideUp" duration="normal" delay={200}>
                        <p className="text-[#878787] text-md lg:text-lg max-w-4xl mx-auto leading-relaxed">
                            Our SOC Is Powered By A Blend Of Industry-Leading Platforms And Carefully Selected Technologies
                            That Work Together To Provide Visibility, Intelligence, And Rapid Response.
                        </p>
                    </Reveal>
                </div>

                {/* Tool Categories */}
                <div className="space-y-12 lg:space-y-16">
                    {toolCategories.map((category, categoryIndex) => (
                        <Reveal
                            key={categoryIndex}
                            animation="slideUp"
                            duration="normal"
                            delay={300 + (categoryIndex * 100)}
                        >
                            <div className="text-center">
                                {/* Category Title */}
                                <div className="relative mb-8">
                                    <div className="flex items-center">
                                        <div className="flex-1 h-px bg-gray-300"></div>
                                        <span className="border border-gray-300 text-gray-800 px-4 py-2 rounded-full text-sm lg:text-lg font-bold whitespace-nowrap">
                                            {category.title}
                                        </span>
                                        <div className="flex-1 h-px bg-gray-300"></div>
                                    </div>
                                </div>

                                {/* Tools Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                                    {category.tools.map((tool, toolIndex) => (
                                        <Reveal
                                            key={toolIndex}
                                            animation="fadeIn"
                                            duration="normal"
                                            delay={400 + (categoryIndex * 100) + (toolIndex * 50)}
                                        >
                                            <div className="flex items-center justify-center">
                                                <img
                                                    src={tool.logo}
                                                    alt={tool.name}
                                                    className="w-30 h-30 lg:w-40 lg:h-40 object-contain"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none'
                                                        e.target.nextSibling.style.display = 'flex'
                                                    }}
                                                />
                                            </div>
                                        </Reveal>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
