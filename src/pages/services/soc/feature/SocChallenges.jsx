import React, { useState } from 'react'
import Reveal from '../../../../components/Reveal'

export default function SocChallenges() {
    const [selectedOption, setSelectedOption] = useState(0)

    const challenges = [
        {
            id: 0,
            title: "Endless alerts with no clarity on what's real or urgent.",
            solution: {
                title: "Smart Triage",
                description: "Most teams drown in alerts that all look the same. <br /> <br /> Our AI-driven triage cuts through the noise, automatically filtering false positives and surfacing only the threats that matter. That means your analysts focus on action, not sifting."
            }
        },
        {
            id: 1,
            title: "High cost of building and staffing an in-house SOC.",
            solution: {
                title: "SOC-as-a-Service",
                description: "Hiring, training, and retaining a full SOC team is expensive and slow. <br /> <br /> With our managed SOC-as-a-Service, you get enterprise-grade monitoring and response without the overhead. Scale instantly and pay only for what you use."
            }
        },
        {
            id: 2,
            title: "Security tools that don't talk to each other.",
            solution: {
                title: "Unified Platform",
                description: "Disconnected tools create blind spots attackers exploit. <br /> <br /> Our platform integrates your existing security stack into a single, cohesive system, giving you a unified view of threats and faster, more accurate responses."
            }
        },
        {
            id: 3,
            title: "Compliance audits drain time and resources.",
            solution: {
                title: "Compliance Simplified",
                description: "Preparing for audits often eats weeks of staff time. <br /> <br /> We automate evidence collection, reporting, and control validation, so compliance becomes a byproduct of strong security instead of a constant burden."
            }
        },
        {
            id: 4,
            title: "Delayed responses turning small issues into big breaches.",
            solution: {
                title: "Rapid Response",
                description: "Every minute counts in security. <br /> <br /> Our AI-assisted detection and automated playbooks cut response times from hours to minutes, containing threats early and preventing small incidents from becoming costly breaches."
            }
        }
    ]

    return (
        <div className="flex flex-col gap-12 lg:gap-20 bg-white pt-12 lg:pt-24 relative overflow-hidden">
            <Reveal animation="slideUp" duration="normal" delay={200}>
                <div className="flex flex-col text-center gap-5 lg:gap-10">
                    <h1 className="text-3xl text-[#010101] lg:text-5xl font-bold leading-tight lg:leading-normal">
                        Cyber Threats <span className="text-[#9C9C9C]">dont work 9-5</span> <br />
                        <span className="text-[#9C9C9C]">Neither should your</span> defenses
                    </h1>
                    <p className="text-black leading-relaxed">
                        At Capilarity, we believe security shouldn't feel like an afterthought or a patchwork of tools. <br /> It should be integrated, proactive, and built for your business model.
                    </p>
                </div>
            </Reveal>

            <Reveal animation="slideUp" duration="normal" delay={400}>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 max-w-7xl mx-auto px-4 lg:px-30">
                    {/* Left Side - Challenge Options */}
                    <div className="lg:w-1/2 bg-black p-2 rounded-4xl">
                        {challenges.map((challenge, index) => (
                            <button
                                key={challenge.id}
                                onClick={() => setSelectedOption(index)}
                                className={`w-full text-left p-3 rounded-2xl transition-all duration-300 cursor-pointer ${selectedOption === index ? 'bg-[#FF9900] text-white' : 'hover:bg-gray-900'
                                    }`}
                            >
                                <div className="flex gap-10 px-10 items-center justify-center">
                                    <div className={`flex flex text-8xl font-extrabold ${selectedOption === index ? 'text-white' : 'text-[#626161]'
                                        }`}>
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    <p className=" text-white lg:text-2xl font-bold leading-tight">
                                        {challenge.title}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right Side - Orange Solution Box */}
                    <div className="lg:w-1/2 flex items-center my-7 bg-[#FCE7C6] rounded-tr-4xl rounded-br-4xl">
                        <div className="p-8 lg:p-12">
                            <h2 className="text-3xl text-[#141414] lg:text-4xl font-bold mb-6">
                                {challenges[selectedOption].solution.title}
                            </h2>
                            <p className="text-lg text-[#5C5C5C] lg:text-2xl leading-relaxed" dangerouslySetInnerHTML={{ __html: challenges[selectedOption].solution.description }}>
                            </p>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    )
}