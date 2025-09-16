import React from 'react'
import Reveal from '../../../../components/Reveal'

export default function ServiceModels() {
    return (
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Reveal animation="slideUp" duration="fast" delay={100}>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black leading-tight lg:leading-normal text-center mb-8 md:mb-12">
                        Our <span className="font-bold">SOC Service</span> Models
                    </h1>
                </Reveal>
                
                <div className="flex flex-col xl:flex-row gap-4 lg:gap-6 py-8 md:py-20 justify-center items-center">
                    {/* Main Service Card */}
                    <Reveal animation="slideUp" duration="fast" delay={200}>
                        <div className="flex flex-col gap-5 hover:scale-105 transition-all duration-300 ease-out cursor-pointer w-full xl:w-auto">
                            <div className="flex flex-col justify-around items-center w-full max-w-[418px] min-h-[400px] md:min-h-[500px] lg:min-h-[660px] bg-[#C3D5F7] rounded-lg mx-auto xl:mx-0">
                                <div className="flex flex-col gap-2 p-4 md:p-5">
                                    <h2 className="text-xl md:text-2xl font-bold text-center">Outsourced SOC <br /> (Full Service)</h2>
                                    <p className="text-gray-600 text-sm md:text-base text-center"> We Handle Everything End-to-End </p>
                                </div>
                                <img 
                                    src="/images/soc/services1.svg" 
                                    alt="Outsourced SOC (Full Service)" 
                                    className="w-full max-w-[280px] md:max-w-[337px] h-auto" 
                                />
                            </div>
                        </div>
                    </Reveal>
                    
                    {/* Grid of Service Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 w-full xl:w-auto">
                        <Reveal animation="slideUp" duration="fast" delay={200}>
                            <div className="flex flex-col justify-around items-center w-full max-w-[444px] min-h-[280px] md:min-h-[320px] bg-[#DDFBFF] rounded-lg hover:scale-105 transition-all duration-300 ease-out cursor-pointer mx-auto">
                                <div className="flex flex-col gap-2 p-4 md:p-5">
                                    <h2 className="text-lg md:text-2xl font-bold text-center">SOC-as-a-Service</h2>
                                    <p className="text-gray-600 text-xs md:text-sm text-center"> Cloud-based SOC with <br /> Flexible Subscriptions. </p>
                                </div>
                                <img 
                                    src="/images/soc/services2.svg" 
                                    alt="SOC-as-a-Service" 
                                    className="w-full max-w-[200px] md:max-w-[239px] h-auto" 
                                />
                            </div>
                        </Reveal>
                        
                        <Reveal animation="slideUp" duration="fast" delay={300}>
                            <div className="flex flex-col justify-around items-center w-full max-w-[444px] min-h-[280px] md:min-h-[320px] bg-[#FFD294] rounded-lg hover:scale-105 transition-all duration-300 ease-out cursor-pointer mx-auto">
                                <div className="flex flex-col gap-2 p-4 md:p-5">
                                    <h2 className="text-lg md:text-2xl font-bold text-center">Managed Detection & Response</h2>
                                    <p className="text-gray-600 text-xs md:text-sm text-center"> Advanced Threat Hunting and <br /> Active Response.</p>
                                </div>
                                <img 
                                    src="/images/soc/services3.svg" 
                                    alt="Managed Detection & Response" 
                                    className="w-full max-w-[200px] md:max-w-[239px] h-auto" 
                                />
                            </div>
                        </Reveal>
                        
                        <Reveal animation="slideUp" duration="fast" delay={400}>
                            <div className="flex flex-col justify-around items-center w-full max-w-[444px] min-h-[280px] md:min-h-[320px] bg-[#eee3ff] rounded-lg hover:scale-105 transition-all duration-300 ease-out cursor-pointer mx-auto">
                                <div className="flex flex-col gap-2 p-4 md:p-5">
                                    <h2 className="text-lg md:text-2xl font-bold text-center">Hybrid SOC</h2>
                                    <p className="text-gray-600 text-xs md:text-sm text-center"> Shared responsibility between <br /> your team and ours. </p>
                                </div>
                                <img 
                                    src="/images/soc/services4.svg" 
                                    alt="Hybrid SOC" 
                                    className="w-full max-w-[200px] md:max-w-[225px] h-auto" 
                                />
                            </div>
                        </Reveal>
                        
                        <Reveal animation="slideUp" duration="fast" delay={500}>
                            <div className="flex flex-col justify-around items-center w-full max-w-[444px] min-h-[280px] md:min-h-[320px] bg-[#FFE9E9] rounded-lg hover:scale-105 transition-all duration-300 ease-out cursor-pointer mx-auto">
                                <div className="flex flex-col gap-2 p-4 md:p-5">
                                    <h2 className="text-lg md:text-2xl font-bold text-center">Dedicated SOC</h2>
                                    <p className="text-gray-600 text-xs md:text-sm text-center">Setup your tools in your environment, <br /> managed by our experts.</p>
                                </div>
                                <img 
                                    src="/images/soc/services5.svg" 
                                    alt="Dedicated SOC" 
                                    className="w-full max-w-[200px] md:max-w-[239px] h-auto" 
                                />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}