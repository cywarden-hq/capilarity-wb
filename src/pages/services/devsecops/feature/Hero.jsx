import React from 'react'

export default function Hero() {
    return (
        <div className="flex flex-col">
            <div className="relative bg-black min-h-screen w-full">
                <div className="h-[85%] w-[65%] bg-[#FF9B2F] rounded-tr-[500px] absolute bottom-0 left-0">
                    <h1 className="text-white text-8xl font-normal text-left pl-15 pt-10 leading-tight">
                        Managed <br />
                        DevSecOps <br />
                        Services
                    </h1>
                    <p className="text-[#2F2F2F] text-2xl font-normal text-left pl-15 pt-5 leading-none">
                        Accelerate innovation without <br /> compromising security, reliability, or compliance.
                    </p>
                </div>

                <div className="h-[70%] w-[60%] mb-8 rounded-bl-[300px] absolute bottom-0 right-0 p-[4px] bg-gradient-to-r from-[#E005FD]/40 via-[#FFFFFF]/50 to-[#FFFFFF]/50">
                    <div className="w-full h-full rounded-bl-[300px] overflow-hidden">
                        <img src="/images/devsecops/hero_bg.svg" alt="DevSecOps" className="w-full h-full object-cover rounded-bl-[300px]" />
                    </div>
                </div>
            </div>
            <div className="relative bg-white min-h-screen pr-20 pb-40">
                <div className="relative border-gray-200 border-2 p-20">
                    <div className="absolute -top-40 left-20 flex justify-center items-center z-10">
                        <img
                            src="/images/devsecops/hero_bg_middle.svg"
                            alt="DevSecOps Hero"
                            className="w-full h-full"
                        />
                    </div>

                    <p className="text-xl font-normal text-[#030303] pl-[30%] leading-[200%]">
                        At Capilarity, we embed security into every stage of your software delivery pipeline not as an afterthought, but as a foundation. Our Managed DevSecOps service combines automation, compliance, and expert operations so you can innovate quickly without compromising security.
                    </p>
                    <div className="absolute -bottom-105 right-0">
                        <img src="/images/devsecops/hero_bg_bottom.svg" alt="DevSecOps" className="w-full h-full object-cover filter" />
                    </div>
                </div>
                <div>
                    <h1 className="text-6xl text-left font-normal text-[#030303] pl-20 pt-20 leading-[200%]">
                        Why DevSecOps Matters
                    </h1>
                    <p className="text-xl font-normal text-[#030303] pl-20 pt-5 pr-[25%] leading-[200%]">
                    Traditional security often slows down delivery and still leaves critical gaps. 
                    Capilarity’s DevSecOps approach turns security into an enabler, 
                    woven directly into your development lifecycle instead of standing in the way.

                    <br /> <br />

                    Catch risks early by flagging vulnerabilities right at commit time, when fixes are fastest and cheapest. 
                    Keep pipelines moving with automated scans and validations that maintain speed without compromising compliance.

                    <br /> <br />

                    Bring developers, operations, and security onto a single integrated workflow, breaking down silos and empowering teams to move faster together. 
                    With built-in security guardrails, you can release features frequently and confidently, knowing your applications are resilient from the start.
                    </p>
                </div>
            </div>
        </div>
    )
}
