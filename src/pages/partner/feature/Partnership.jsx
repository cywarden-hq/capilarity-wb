import React from 'react'
import Reveal from '../../../components/Reveal'

export default function Partnership() {
    return (
        <div className="h-full bg-white pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32">
            {/* Who We Partner With Section */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                    {/* Left Section - Title */}
                    <div className="w-full lg:w-2/5">
                        <Reveal animation="slideUp" delay={200} duration="normal" easing="elegant">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold max-lg:text-center text-black leading-tight">
                                Who We<br /> Partner With
                            </h2>
                        </Reveal>
                    </div>
                    
                    {/* Right Section - Description */}
                    <div className="w-full lg:w-3/5">
                        <Reveal animation="fadeIn" delay={400} duration="normal" easing="smooth">
                            <p className="text-justify text-lg sm:text-lg lg:text-xl text-black leading-[35px]">
                                We work with forward-thinking organizations from technology providers to consulting firms, who share our commitment to securing digital growth. Whether you're expanding your portfolio, enhancing your solutions, or building client trust, we're here to add value.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>

            {/* The Value of Partnership Section */}
            <div className="min-h-[500px] md:min-h-[550px] lg:h-[600px] flex flex-col md:flex-row lg:flex-row bg-[radial-gradient(ellipse_80%_70%_at_50%_0%,_#BBF0FE_0%,_#050336_100%)] mt-12 sm:mt-16 md:mt-20">
                {/* Left Section - Text Content */}
                <div className="w-full md:w-[60%] lg:w-[60%] p-6 sm:p-8 md:p-12 lg:p-20 xl:p-30 flex flex-col justify-center">
                    <Reveal animation="slideUp" delay={200} duration="normal" easing="elegant">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6 sm:mb-8">
                            The Value of Partnership
                        </h2>
                    </Reveal>
                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                        <Reveal animation="fadeIn" delay={400} duration="normal" easing="smooth">
                            <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                                Partnering with Capilarity means more than signing an agreement.
                            </p>
                        </Reveal>
                        <Reveal animation="fadeIn" delay={500} duration="normal" easing="smooth">
                            <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                                It's about joining forces on a mission:
                            </p>
                        </Reveal>
                    </div>
                    <ul className="space-y-2 sm:space-y-3 ml-4 sm:ml-6">
                        <Reveal animation="slideLeft" delay={600} duration="normal" easing="smooth">
                            <li className="text-base sm:text-lg lg:text-xl text-white font-light leading-relaxed flex items-start group cursor-pointer">
                                <span className="text-white mr-2 sm:mr-3 text-lg">→</span>
                                Building long-term trust and resilience
                            </li>
                        </Reveal>
                        <Reveal animation="slideLeft" delay={700} duration="normal" easing="smooth">
                            <li className="text-base sm:text-lg lg:text-xl text-white font-light leading-relaxed flex items-start group cursor-pointer">
                                <span className="text-white mr-2 sm:mr-3 text-lg">→</span>
                                Delivering measurable security outcomes
                            </li>
                        </Reveal>
                        <Reveal animation="slideLeft" delay={800} duration="normal" easing="smooth">
                            <li className="text-base sm:text-lg lg:text-xl text-white font-light leading-relaxed flex items-start group cursor-pointer">
                                <span className="text-white mr-2 sm:mr-3 text-lg">→</span>
                                Protecting businesses from evolving cyber risks
                            </li>
                        </Reveal>
                    </ul>
                </div>

                {/* Right Section - Images */}
                <div className="w-full md:w-[40%] lg:w-[40%] flex flex-col justify-end md:flex-row lg:flex-row gap-4 sm:gap-8 md:gap-8 lg:gap-20 xl:gap-30 p-6 sm:p-8 md:p-0 lg:p-0">
                    <Reveal animation="slideRight" delay={600} duration="normal" easing="elegant">
                        <img 
                            src="/images/partner/value.svg"
                            alt="Partnership"
                            className="w-full h-full object-cover"
                        />
                    </Reveal>
                </div>
            </div>
        </div>
    )
}