import React from 'react'
import Reveal from '../../../../components/Reveal'

export default function ServiceModels() {
    return (
        <section className="py-16 lg:py-20">
            <Reveal animation="slideUp" duration="normal" delay={200}>
                <h1 className="text-3xl lg:text-5xl text-black leading-tight lg:leading-normal text-center">
                    Our <span className="font-bold">SOC Service</span> Models
                </h1>
            </Reveal>
            <div className="flex gap-10 py-20 justify-center items-center">
                <Reveal animation="slideUp" duration="normal" delay={400}>
                    <div className="flex flex-col gap-5 hover:scale-103 transition-all duration-300 ease-out cursor-pointer">
                        <div className="flex flex-col justify-around items-center w-[418px] h-[660px] bg-[#C3D5F7] rounded-lg">
                            <div className="flex flex-col gap-2 p-5">
                                <h2 className="text-2xl font-bold text-center">Outsourced SOC <br /> (Full Service)</h2>
                                <p className="text-gray-600 text-sm text-center"> We Handle Everything End-to-End </p>
                            </div>
                            <img src="/images/soc/services1.svg" alt="Outsourced SOC (Full Service)" className="w-[337px] h-[333px]" />
                        </div>
                    </div>
                </Reveal>
                <div className="grid grid-cols-2 gap-5">
                    <Reveal animation="slideUp" duration="normal" delay={600}>
                        <div className="flex flex-col justify-around items-center w-[444px] h-[320px] bg-[#DDFBFF] rounded-lg hover:scale-103 transition-all duration-300 ease-out cursor-pointer">
                            <div className="flex flex-col gap-2 p-5">
                                <h2 className="text-2xl font-bold text-center">SOC-as-a-Service</h2>
                                <p className="text-gray-600 text-sm text-center"> Cloud-based SOC with <br /> Flexible Subscriptions. </p>
                            </div>
                            <img src="/images/soc/services2.svg" alt="Outsourced SOC (Full Service)" className="w-[239px] h-[167px]" />
                        </div>
                    </Reveal>
                    <Reveal animation="slideUp" duration="normal" delay={800}>
                        <div className="flex flex-col justify-around items-center w-[444px] h-[320px] bg-[#FFD294] rounded-lg hover:scale-103 transition-all duration-300 ease-out cursor-pointer">
                            <div className="flex flex-col gap-2 p-5">
                                <h2 className="text-2xl font-bold text-center">Managed Detection & Response</h2>
                                <p className="text-gray-600 text-sm text-center"> Advanced Threat Hunting and <br /> Active Response.</p>
                            </div>
                            <img src="/images/soc/services3.svg" alt="Outsourced SOC (Full Service)" className="w-[239px] h-[167px]" />
                        </div>
                    </Reveal>
                    <Reveal animation="slideUp" duration="normal" delay={600}>
                        <div className="flex flex-col justify-around items-center w-[444px] h-[320px] bg-[#eee3ff] rounded-lg hover:scale-103 transition-all duration-300 ease-out cursor-pointer">
                            <div className="flex flex-col gap-2 p-5">
                                <h2 className="text-2xl font-bold text-center">Hybrid SOC</h2>
                                <p className="text-gray-600 text-sm text-center"> Shared responsibility between <br /> your team and ours. </p>
                            </div>
                            <img src="/images/soc/services4.svg" alt="Outsourced SOC (Full Service)" className="w-[239px] h-[167px]" />
                        </div>
                    </Reveal>
                    <Reveal animation="slideUp" duration="normal" delay={800}>
                        <div className="flex flex-col justify-around items-center w-[444px] h-[320px] bg-[#FFE9E9] rounded-lg hover:scale-103 transition-all duration-300 ease-out cursor-pointer">
                            <div className="flex flex-col gap-2 p-5">
                                <h2 className="text-2xl font-bold text-center">Dedicated SOC</h2>
                                <p className="text-gray-600 text-sm text-center">Setup your tools in your environment, <br /> managed by our experts.</p>
                            </div>
                            <img src="/images/soc/services5.svg" alt="Outsourced SOC (Full Service)" className="w-[239px] h-[167px]" />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section >
    )
}