import React from 'react'
import Reveal from '../../../components/Reveal'
import SocChallenges from './feature/SocChallenges'
import SecurityHighlight from './feature/SecurityHighlight'
import ServiceModels from './feature/ServiceModels'
import Packages from './feature/Packages'

export default function Soc() {
    return (
        <>
            {/* Hero Section */}
            <div className="min-h-screen relative relative overflow-hidden z-10">
                <img
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src="/images/soc/hero_bg.jpg"
                    alt="Security Operation Center"
                />
                <div className="absolute inset-0 pl-20 flex items-center pointer-events-none z-0">
                    <h1 className="text-4xl text-white leading-tight lg:text-9xl font-bold mb-4 z-10">
                        <Reveal animation="slideUp" duration="normal" delay={200}>
                            <span className="text-orange-500">Security</span><br />
                        </Reveal>

                        <Reveal animation="slideUp" duration="normal" delay={400}>
                            Operation<br />
                        </Reveal>

                        <Reveal animation="slideUp" duration="normal" delay={600}>
                            Center
                        </Reveal>
                    </h1>
                </div>
            </div>

            <SocChallenges />
            <SecurityHighlight />
            <ServiceModels />
            <Packages />
        </>
    )
}