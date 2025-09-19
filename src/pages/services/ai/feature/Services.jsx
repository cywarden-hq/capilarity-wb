import React from 'react'
import AlternatingCard from './AlternatingCard'

export default function Services() {
    return (
        <div className="min-h-screen bg-white py-20 px-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col gap-10 items-center justify-center mb-20">
                    <h1 className="text-6xl font-normal text-black leading-tight max-w-5xl text-center leading-[65px]">
                        AI Development Services, Shaped Around Your Business
                    </h1>
                    <p className="text-lg font-normal text-black px-40 w-full text-center leading-[46px]">
                        Every business is unique, and your AI should be too. We offer a full suite of AI development services built to deliver real results. Whether it's automating time, consuming tasks or uncovering breakthrough insights, our team brings both deep technical expertise and real, world experience to make it all happen.
                    </p>
                </div>

                {/* 3x2 Grid Layout */}
                <div className="flex flex-col gap-12">

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Row 1 - Left: Custom AI Tools */}
                        <AlternatingCard
                            type="content"
                            title="We build custom AI tools from scratch that are laser, focused on your specific challenges."
                            graphicSrc="/images/ai/services1.svg"
                            graphicAlt="Custom AI Tools Development"
                            className="justify-start"
                        />

                        {/* Row 1 - Right: AI Product Development */}
                        <AlternatingCard
                            type="card"
                            title="AI Product Development"
                            content={[
                                "AI Assistants & Copilots: Intelligent digital helpers that integrate smoothly into your team's workflows, helping them work faster and smarter.",
                                "Predictive Analytics Platforms: Tools that analyze your data to forecast trends, empowering you to make proactive, data, driven decisions."
                            ]}
                        />
                    </div>


                    {/* Row 2 - Left: Generative AI Development */}
                    <div className="flex flex-col lg:flex-row gap-12">
                        <AlternatingCard
                            type="card"
                            title="Generative AI Development"
                            content={[
                                "Content & Code Generation: Systems that produce high, quality articles, marketing copy, and even functional code, so your team can focus on strategy.",
                                "Prompt Engineering & Optimization: We refine how you interact with AI to ensure consistent, high, quality, and relevant outputs."
                            ]}
                        />

                        {/* Row 2 - Right: Creative AI */}
                        <AlternatingCard
                            type="content"
                            title="Unlock new creative possibilities with AI that generates original content, code, and ideas."
                            graphicSrc="/images/ai/services2.svg"
                            graphicAlt="Creative AI Generation"
                        />
                    </div>

                    {/* Row 3 - Left: Automation */}
                    <div className="flex flex-col lg:flex-row gap-12">
                        <AlternatingCard
                            type="content"
                            title="Free up your team to focus on high, impact work by letting AI handle the repetitive tasks."
                            graphicSrc="/images/ai/services3.svg"
                            graphicAlt="AI Automation"
                        />

                        {/* Row 3 - Right: Intelligent Automation */}
                        <AlternatingCard
                            type="card"
                            title="Intelligent Automation"
                            content={["Robotic Process Automation (RPA): We deploy digital 'workers' to manage routine processes, reducing errors and saving valuable time."]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}