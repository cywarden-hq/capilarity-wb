import React from 'react'
import Reveal from '../../../../components/Reveal'

export default function SecurityHighlight() {
    return (
        <section className="relative min-h-screen">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/soc/highlights_bg.svg"
                    className="w-full h-full object-cover"
                    alt="Background pattern"
                />
            </div>

            {/* Security Highlight */}
            <div className="flex flex-col text-center pt-16 pb-16 md:pt-30 md:pb-30 gap-5 lg:gap-10 z-10 px-4 sm:px-6 lg:px-8">
                <Reveal animation="slideUp" duration="normal" delay={100} easing="smoothOut">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#010101] font-bold leading-tight lg:leading-normal">
                        Unlocks <span className="text-[#FE8032]">Full Spectrum Security</span> <br />
                        With Capilarity <span className="text-[#FE8032]">SOC</span>
                    </h1>
                </Reveal>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 justify-center max-w-7xl pt-8 pb-8 md:pt-15 md:pb-15 mx-auto z-10 border-t border-b border-gray-200">
                    <Reveal animation="slideUp" duration="normal" delay={300} easing="smoothOut">
                        <div className="flex flex-col gap-4 md:gap-5 items-center hover:scale-105 transition-all duration-300 ease-out cursor-pointer">
                            <img 
                                src="/images/soc/highlights_1.svg" 
                                alt="Continuous Monitoring" 
                                className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[268px] h-auto rounded-lg" 
                            />
                            <div className="flex flex-col gap-3 md:gap-5 w-full max-w-[268px]">
                                <h3 className="text-xl md:text-2xl font-bold">Continuous Monitoring</h3>
                                <p className="text-gray-600 text-sm md:text-base">24/7 detection across networks, endpoints, and cloud.</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal animation="slideUp" duration="normal" delay={400} easing="smoothOut">
                        <div className="flex flex-col gap-4 md:gap-5 items-center hover:scale-105 transition-all duration-300 ease-out cursor-pointer">
                            <img 
                                src="/images/soc/highlights_2.svg" 
                                alt="Real-Time Response" 
                                className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[370px] h-auto rounded-lg" 
                            />
                            <div className="flex flex-col gap-3 md:gap-5 w-full max-w-[370px]">
                                <h3 className="text-xl md:text-2xl font-bold">Real-Time Response</h3>
                                <p className="text-gray-600 text-sm md:text-base">Stop threats in motion with our MDR, powered response.</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal animation="slideUp" duration="normal" delay={500} easing="smoothOut">
                        <div className="flex flex-col gap-4 md:gap-5 items-center hover:scale-105 transition-all duration-300 ease-out cursor-pointer">
                            <img 
                                src="/images/soc/highlights_3.svg" 
                                alt="Compliance Support" 
                                className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[268px] h-auto rounded-lg" 
                            />
                            <div className="flex flex-col gap-3 md:gap-5 w-full max-w-[268px]">
                                <h3 className="text-xl md:text-2xl font-bold">Compliance Support</h3>
                                <p className="text-gray-600 text-sm md:text-base">Automated reports and audit assistance.</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}