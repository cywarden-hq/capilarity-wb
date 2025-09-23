import React from 'react'
import Reveal from '../../../../components/Reveal'

export default function WhyAi() {
    return (
        <div className="min-h-screen bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Header Content */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-25">
                    <Reveal animation="fadeIn" duration="normal" delay={100}>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6 sm:mb-8 leading-tight sm:leading-[1.2] md:leading-[1.1] lg:leading-[1.1] px-2 sm:px-4 md:px-8 lg:px-20 xl:px-40">
                            Why Capilarity is the Right Partner for Your AI Development
                        </h2>
                    </Reveal>
                    <Reveal animation="slideUp" duration="normal" delay={200}>
                        <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed sm:leading-loose md:leading-[2rem] lg:leading-[2.5rem] mx-auto px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20">
                            We're more than a vendor, we're your partner. We turn your vision into a practical, powerful AI solution that delivers real value. Let us help you navigate the complexity of AI and achieve sustainable growth.
                        </p>
                    </Reveal>
                </div>

                {/* 2x2 Grid of Content Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-15">

                    {/* Top-Left Block */}
                    <Reveal animation="slideUp" duration="normal" delay={100}>
                        <div tabIndex={0} className="bg-[#E7F6FF] py-4 sm:py-5 md:py-6 lg:py-5 px-4 sm:px-6 md:px-8 lg:px-15 rounded-lg text-center cursor-pointer hover:scale-102 focus:scale-102 transition-all duration-300 ease-out">
                            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4 sm:mb-5 md:mb-6">
                                A Partner Invested in Your Success
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed sm:leading-loose md:leading-[2rem] lg:leading-[2.5rem]">
                                Our certified AI engineers are passionate problem solvers who truly want to see your business win.
                            </p>
                        </div>
                    </Reveal>

                    {/* Top-Right Block */}
                    <Reveal animation="slideUp" duration="normal" delay={200}>
                        <div tabIndex={0} className="bg-[#FFE3C2] py-4 sm:py-5 md:py-6 lg:py-5 px-4 sm:px-6 md:px-8 lg:px-15 rounded-lg text-center cursor-pointer hover:scale-102 focus:scale-102 transition-all duration-300 ease-out">
                            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4 sm:mb-5 md:mb-6">
                                Solutions That Scale with Your Business
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed sm:leading-loose md:leading-[2rem] lg:leading-[2.5rem]">
                                We create AI systems that grow alongside your business, whether you're a startup or an enterprise.
                            </p>
                        </div>
                    </Reveal>

                    {/* Bottom-Left Block */}
                    <Reveal animation="slideUp" duration="normal" delay={300}>
                        <div tabIndex={0} className="bg-[#FFE3C2] py-4 sm:py-5 md:py-6 lg:py-5 px-4 sm:px-6 md:px-8 lg:px-15 rounded-lg text-center cursor-pointer hover:scale-102 focus:scale-102 transition-all duration-300 ease-out">
                            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4 sm:mb-5 md:mb-6">
                                Better Data for Reliable Results
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed sm:leading-loose md:leading-[2rem] lg:leading-[2.5rem]">
                                We prioritize clean, unbiased data so your AI performs accurately and fairly every time.
                            </p>
                        </div>
                    </Reveal>

                    {/* Bottom-Right Block */}
                    <Reveal animation="slideUp" duration="normal" delay={400}>
                        <div tabIndex={0} className="bg-[#E7F6FF] py-4 sm:py-5 md:py-6 lg:py-5 px-4 sm:px-6 md:px-8 lg:px-15 rounded-lg text-center cursor-pointer hover:scale-102 focus:scale-102 transition-all duration-300 ease-out">
                            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4 sm:mb-5 md:mb-6">
                                Security at the Core of Everything We Build
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed sm:leading-loose md:leading-[2rem] lg:leading-[2.5rem]">
                                We embed robust security throughout the entire AI lifecycle to keep your assets safe.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}
