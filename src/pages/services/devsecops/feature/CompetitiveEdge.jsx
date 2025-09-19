import React from 'react'

export default function CompetitiveEdge() {
    return (
        <div className="min-h-screen bg-white py-50 px-40 relative">
            <img
                src="/images/devsecops/competitive_edge.svg"
                alt="Competitive Edge"
                className="absolute items-center bottom-30 left-0"
            />
            <div className="w-full mx-auto">
                <div className="flex flex-col gap-16 lg:gap-20">
                    {/* Left side - Title and Image placeholder */}
                    <div className="w-full">
                        {/* Title */}
                        <h2 className="text-5xl lg:text-6xl font-bold text-black mb-16 leading-tight">
                            Why choose our service, <br />
                            Competitive Edge of Capilarity
                        </h2>
                    </div>

                    {/* Right side - Text content */}
                    <div className="relative w-full flex flex-col gap-30">
                        {/* First Paragraph */}
                        <div className="relative ml-[30%]">
                            <div className="pl-8 py-6" 
                                 style={{
                                     boxShadow: '-20px 0px 50px rgba(0,0,0,0.7)'
                                 }}>
                                <p className="text-xl text-black leading-[47px]">
                                    At Capilarity, we don't just hand over tools, we take responsibility for outcomes. Our Managed DevSecOps services are designed to own the entire security lifecycle, so your teams can focus on innovation, customer experience, and business growth.
                                </p>
                            </div>
                        </div>

                        {/* Second Paragraph */}
                        <div className="relative ml-[40%]">
                            <div className="pl-8 py-6"
                                 style={{
                                     boxShadow: '-20px 0px 50px rgba(0,0,0,0.7)'
                                 }}>
                                <p className="text-xl text-black leading-[47px]">
                                    With our team running the operations, you eliminate the constant burden of patching while gaining confidence that every release is protected by enterprise level security.
                                </p>
                            </div>
                        </div>

                        {/* Third Paragraph */}
                        <div className="relative ml-[50%]">
                            <div className="pl-8 py-6"
                                 style={{
                                     boxShadow: '-20px 0px 50px rgba(0,0,0,0.7)'
                                 }}>
                                <p className="text-xl text-black leading-[47px]">
                                    We embed security into your pipelines from the beginning, catching risks before they become costly issues and ensuring compliance without slowing down delivery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
