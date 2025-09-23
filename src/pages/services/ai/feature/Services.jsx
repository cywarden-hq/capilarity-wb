import React from 'react'
import AlternatingCard from './AlternatingCard'
import Reveal from '../../../../components/Reveal'

export default function Services() {
    return (
        <div className="min-h-screen bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 items-center justify-center mb-12 sm:mb-16 md:mb-20">
                    <Reveal animation="fadeIn" duration="normal" delay={100}>
                        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-normal text-black leading-tight max-w-6xl text-center leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[1.1] px-2">
                            AI Development Services, Shaped Around Your Business
                        </h1>
                    </Reveal>
                    <Reveal animation="slideUp" duration="normal" delay={200}>
                        <p className="text-xs sm:text-lg font-normal text-black px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 w-full text-center leading-relaxed sm:leading-loose md:leading-[2rem] lg:leading-[2.5rem]">
                            Every business is unique, and your AI should be too. We offer a full suite of AI development services built to deliver real results. Whether it's automating time, consuming tasks or uncovering breakthrough insights, our team brings both deep technical expertise and real, world experience to make it all happen.
                        </p>
                    </Reveal>
                </div>

                {/* 3x2 Grid Layout */}
                <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">

                    <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12">
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
                    <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12">
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
                    <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12">
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

                    {/* Row 4 - Left: Predictive Modelling & Forecasting */}
                    <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12">
                        <AlternatingCard
                            type="card"
                            title="Predictive Modelling & Forecasting"
                            content={[
                                "Time, Series Forecasting: We identify patterns over time to predict future sales, demand, and market shifts."
                            ]}
                        />

                        {/* Row 4 - Right: Predictive Modelling & Forecasting */}
                        <AlternatingCard
                            type="content"
                            title="We build predictive models to forecast trends, anticipate behaviour, and drive proactive decisions."
                            graphicSrc="/images/ai/services4.svg"
                            graphicAlt="Predictive Modelling & Forecasting"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}