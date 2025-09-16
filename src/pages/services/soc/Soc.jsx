import React from 'react'
import Reveal from '../../../components/Reveal'
import SocChallenges from './feature/SocChallenges'
import SecurityHighlight from './feature/SecurityHighlight'
import ServiceModels from './feature/ServiceModels'
import Packages from './feature/Packages'
import ToolsTechnologies from './feature/ToolsTechnologies'
import Hero from './feature/Hero'

export default function Soc() {
    return (
        <>
            {/* Hero Section */}

            <Hero />


            {/* <div className="min-h-screen bg-black relative relative overflow-hidden z-10">
                <img
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src="/images/soc/hero_bg_top.svg"
                    alt="Security Operation Center"
                />
                <img
                    className="absolute -bottom-[50%] left-0 w-full h-full object-cover z-0"
                    src="/images/soc/hero_bg_bottom.svg"
                    alt="Security Operation Center"
                />
                <img
                    className="absolute top-[10%] -right-[60%] w-full h-full z-0"
                    src="/images/soc/hero_bg1.svg"
                    alt="Security Operation Center"
                />
                <div className="absolute inset-0 pl-20 flex items-center pointer-events-none z-0">
                    <h1 className="text-4xl text-white leading-tight lg:text-9xl font-bold mb-4 z-10">
                        <Reveal animation="slideUp" duration="fast" delay={100}>
                            <span className="text-orange-500">Security</span><br />
                        </Reveal>

                        <Reveal animation="slideUp" duration="fast" delay={200}>
                            Operation<br />
                        </Reveal>

                        <Reveal animation="slideUp" duration="fast" delay={300}>
                            Center
                        </Reveal>
                    </h1>
                </div>
            </div> */}

            <SocChallenges />
            <SecurityHighlight />
            <ServiceModels />
            <Packages />
            <ToolsTechnologies />
        </>
    )
}