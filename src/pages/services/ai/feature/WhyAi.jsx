import React from 'react'

export default function WhyAi() {
    return (
        <div className="min-h-screen bg-white py-20 px-20">
            <div className="max-w-7xl mx-auto">
                {/* Header Content */}
                <div className="text-center mb-25">
                    <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-8 leading-[62px] px-40">
                        Why Capilarity is the Right Partner for Your AI Development
                    </h2>
                    <p className="text-xl text-black leading-[43px] mx-auto">
                        We're more than a vendor, we're your partner. We turn your vision into a practical, powerful AI solution that delivers real value. Let us help you navigate the complexity of AI and achieve sustainable growth.
                    </p>
                </div>

                {/* 2x2 Grid of Content Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
                    
                    {/* Top-Left Block */}
                    <div className="bg-[#E7F6FF] py-5 px-15 rounded-lg text-center cursor-pointer hover:scale-102 transition-all duration-300 ease-out">
                        <h3 className="text-2xl font-semibold text-black mb-6">
                            A Partner Invested in Your Success
                        </h3>
                        <p className="text-lg text-black leading-[43px]">
                            Our certified AI engineers are passionate problem solvers who truly want to see your business win.
                        </p>
                    </div>

                    {/* Top-Right Block */}
                    <div className="bg-[#FFE3C2] py-5 px-15 rounded-lg text-center cursor-pointer hover:scale-102 transition-all duration-300 ease-out">
                        <h3 className="text-2xl font-semibold text-black mb-6">
                            Solutions That Scale with Your Business
                        </h3>
                        <p className="text-lg text-black leading-[43px]">
                            We create AI systems that grow alongside your business, whether you're a startup or an enterprise.
                        </p>
                    </div>

                    {/* Bottom-Left Block */}
                    <div className="bg-[#FFE3C2] py-5 px-15 rounded-lg text-center cursor-pointer hover:scale-102 transition-all duration-300 ease-out">
                        <h3 className="text-2xl font-semibold text-black mb-6">
                            Better Data for Reliable Results
                        </h3>
                        <p className="text-lg text-black leading-[43px]">
                            We prioritize clean, unbiased data so your AI performs accurately and fairly every time.
                        </p>
                    </div>

                    {/* Bottom-Right Block */}
                    <div className="bg-[#E7F6FF] py-5 px-15 rounded-lg text-center cursor-pointer hover:scale-102 transition-all duration-300 ease-out">
                        <h3 className="text-2xl font-semibold text-black mb-6">
                            Security at the Core of Everything We Build
                        </h3>
                        <p className="text-lg text-black leading-[43px]">
                            We embed robust security throughout the entire AI lifecycle to keep your assets safe.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
