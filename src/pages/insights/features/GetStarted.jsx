import React from 'react'
import Reveal from '../../../components/Reveal'
import { Link } from 'react-router-dom'

export default function GetStarted() {
    return (
        <div className="relative min-h-screen bg-white flex flex-col gap-4 md:gap-5 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 md:py-20 overflow-hidden">
            <div className="bg-[#033664] w-full h-full rounded-2xl md:rounded-3xl py-2 px-2">
                <div className="flex flex-col gap-3 md:gap-5 text-center border-2 border-white rounded-2xl md:rounded-3xl p-6 md:p-10">
                    <Reveal animation="slideUp" duration="normal" delay={100}>
                    <h1 className="text-white text-3xl md:text-5xl font-semibold">Let's Get Started</h1>
                    </Reveal>
                    <Reveal animation="slideUp" duration="normal" delay={200}>
                    <p className="text-white text-base md:text-lg">Insights, case studies, and thought leadership to accelerate your cloud journey</p>
                    </Reveal>
                    <Link to="/get-in-touch">
                        <Reveal animation="slideUp" duration="normal" delay={300}>
                        <button className="bg-[#FFA600] text-white text-base md:text-lg font-semibold px-6 md:px-10 py-2 md:py-3 rounded-full hover:scale-102 hover:bg-white hover:text-[#FFA600] focus:scale-102 focus:bg-white focus:text-[#FFA600] transition-all duration-300 ease-out cursor-pointer">GET IN TOUCH</button>
                        </Reveal>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-10 md:gap-20 rounded-2xl items-center justify-center py-6 md:py-10">
                <Reveal animation="slideUp" duration="normal" delay={100}>
                <h1 className="text-black text-2xl md:text-4xl font-regular text-center">
                    Explore <b>More</b> Resources
                </h1>
                </Reveal>
                <Reveal animation="slideUp" duration="normal" delay={200}>
                <div className="flex flex-col md:flex-row gap-8 md:gap-20 w-full">
                    <div className="relative flex flex-col md:flex-row items-center justify-center w-full md:w-[40%] h-full bg-[#ededed] rounded-2xl md:rounded-3xl hover:scale-102 focus:scale-102 transition-all duration-300 ease-out cursor-pointer min-h-[300px] md:min-h-0">
                        <div className="w-full md:w-[60%] flex flex-col p-6 md:p-0">
                            <div className="text-white px-4 md:px-6 py-1 bg-[#FF9D00] absolute top-4 left-0 rounded-tr-full rounded-br-full shadow-xl text-sm">CAPILARITY</div>
                            <h1 className="text-black text-lg md:text-2xl font-regular pl-8 md:pl-10 mt-8 md:mt-0">How GRC Integration Strengthens Cyber Resilience</h1>
                            <div className="absolute bottom-4 left-4 text-xs text-gray-400 px-3 py-1 rounded-full border-2 border-gray-300">BLOG</div>
                        </div>
                        <div className="w-full md:w-[40%] h-48 md:h-auto flex items-center justify-center">
                            <img
                                src="/images/insights/resource1.svg"
                                alt="Resource 1"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                    <div className="relative flex flex-col md:flex-row items-center justify-center w-full md:w-[60%] h-full bg-[#0b2d4d] rounded-2xl md:rounded-3xl hover:scale-102 focus:scale-102 transition-all duration-300 ease-out cursor-pointer min-h-[300px] md:min-h-0">
                        <div className="w-full md:w-[60%] flex flex-col p-6 md:p-0">
                            <div className="text-white px-4 md:px-6 py-1 bg-[#FF9D00] absolute top-4 left-0 rounded-tr-full rounded-br-full shadow-xl text-sm">CAPILARITY</div>
                            <h1 className="text-white text-lg md:text-2xl font-regular pl-8 md:pl-10 mt-8 md:mt-0">Threat Modeling Frameworks and Methodologies: A Guide</h1>
                            <div className="absolute bottom-4 left-4 text-xs text-gray-400 px-3 py-1 rounded-full border-2 border-gray-900">BLOG</div>
                        </div>
                        <div className="w-full md:w-[40%] h-48 md:h-auto flex items-center justify-center">
                            <img
                                src="/images/insights/resource2.svg"
                                alt="Resource 2"
                                className="rounded-br-2xl rounded-tr-2xl w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                </Reveal>
            </div>
        </div>
    )
}