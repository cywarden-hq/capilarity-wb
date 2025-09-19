import React from 'react'

export default function Partnership() {
    return (
        <div className="h-full bg-white">
            <div className="flex items-center justify-center gap-30">
                <h1 className="text-5xl lg:text-7xl font-light text-black leading-[133px]">Who We <br /> Partner With</h1>
                <p className="text-xl text-black leading-[53px] w-1/2">
                    We work with forward-thinking organizations from technology
                    providers to consulting firms, who share our commitment to securing
                    digital growth. Whether you're expanding your portfolio, enhancing
                    your solutions, or building client trust, we're here to add value.
                </p>
            </div>

            {/* The Value of Partnership Section */}
            <div className="flex gap-8 mt-20">
                {/* Left Section - Text Content */}
                <div className="w-2/3 bg-[#FFE6D6] rounded-tr-[100px] p-30">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-8">
                        The Value of Partnership
                    </h2>
                    <div className="space-y-4 mb-8">
                        <p className="text-xl text-black leading-relaxed">
                            Partnering with Capilarity means more than signing an agreement.
                        </p>
                        <p className="text-xl text-black leading-relaxed">
                            It's about joining forces on a mission:
                        </p>
                    </div>
                    <ul className="space-y-3 ml-6">
                        <li className="text-xl text-black font-light leading-relaxed flex items-start">
                            <span className="text-black mr-3">•</span>
                            Building long-term trust and resilience
                        </li>
                        <li className="text-xl text-black font-light leading-relaxed flex items-start">
                            <span className="text-black mr-3">•</span>
                            Delivering measurable security outcomes
                        </li>
                        <li className="text-xl text-black font-light leading-relaxed flex items-start">
                            <span className="text-black mr-3">•</span>
                            Protecting businesses from evolving cyber risks
                        </li>
                    </ul>
                </div>

                {/* Right Section - Image Placeholder */}
                <div className="w-1/4 flex items-center justify-center">
                    <img src="/images/partners/partnership_bg.svg" alt="Partnership" />
                </div>
            </div>
        </div>
    )
}