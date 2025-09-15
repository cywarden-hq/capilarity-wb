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
                />
            </div>

            {/* Security Highlight */}
            <div className="flex flex-col text-center pt-30 pb-30 gap-5 lg:gap-10 z-10">
                <Reveal animation="slideUp" duration="normal" delay={200}>
                    <h1 className="text-3xl text-[#010101] lg:text-5xl font-bold leading-tight lg:leading-normal">
                        Unlocks <span className="text-[#FE8032]">Full Spectrum Security</span> <br />
                        With Capilarity <span className="text-[#FE8032]">SOC</span>
                    </h1>
                </Reveal>

                <div className="flex gap-20 justify-center max-w-7xl pt-15 pb-15 mx-auto z-10 border-t border-b border-gray-200">
                    <Reveal animation="slideUp" duration="normal" delay={400}>
                        <div className="flex flex-col gap-5 items-center hover:scale-103 transition-all duration-300 ease-out cursor-pointer">
                            <img src="/images/soc/highlights_1.svg" alt="Continuous Monitoring" className="w-[268px] h-[262px] rounded-lg" />
                            <div className="flex flex-col gap-5 w-[268px]">
                                <h3 className="text-2xl font-bold">Continuous Monitoring</h3>
                                <p className="text-gray-600 text-sm">24/7 detection across networks, endpoints, and cloud.</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal animation="slideUp" duration="normal" delay={600}>
                        <div className="flex flex-col gap-5 items-center hover:scale-103 transition-all duration-300 ease-out cursor-pointer">
                            <img src="/images/soc/highlights_2.svg" alt="Continuous Monitoring" className="w-[370px] h-[262px] rounded-lg" />
                            <div className="flex flex-col gap-5 w-[370px]">
                                <h3 className="text-2xl font-bold">Real-Time Response</h3>
                                <p className="text-gray-600 text-sm">Stop threats in motion with our MDR, powered response.</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal animation="slideUp" duration="normal" delay={800}>
                        <div className="flex flex-col gap-5 items-center hover:scale-103 transition-all duration-300 ease-out cursor-pointer">
                            <img src="/images/soc/highlights_3.svg" alt="Continuous Monitoring" className="w-[268px] h-[262px] rounded-lg" />
                            <div className="flex flex-col gap-5 w-[268px]">
                                <h3 className="text-2xl font-bold">Compliance Support</h3>
                                <p className="text-gray-600 text-sm">Automated reports and audit assistance.</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}