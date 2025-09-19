import React from 'react'

export default function HowWeHelp() {
    return (
        <div className="relative min-h-screen bg-white py-30 px-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-5">
                    <hr className="absolute top-0 right-0 w-[65%] h-0.5 bg-[#808080]" />
                    <hr className="absolute top-10 right-0 w-[65%] h-0.5 bg-[#808080]" />
                </div>

                {/* Header Content */}
                <div className="flex flex-col gap-20 mb-16">
                    <h2 className="text-5xl lg:text-6xl font-semibold text-black">
                        How We Can Help
                    </h2>
                    <p className="text-xl text-black text-center font-normal leading-[37px]">
                        At Capilarity, we accelerate your mission-critical digital transformations, empowering your business to stay ahead in an ever-changing market. Leveraging the world's leading technologies across infrastructure, applications, data, and security, we help you:
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
                    
                    {/* Card 1: Drive Growth */}
                    <div className="bg-orange-50 pl-15 pr-10 pt-10 rounded-2xl hover:scale-102 transition-all duration-300 ease-out">
                        <h3 className="text-3xl font-semibold text-black mb-10">
                            Drive Growth
                        </h3>
                        <p className="text-xl text-black leading-[30px] mb-6">
                            Unlock new opportunities and scale your business with confidence.
                        </p>
                        <div className="w-full h-48 rounded-lg flex items-center justify-end">
                            <img src="/images/aboutus/howwehelp1.svg" alt="Drive Growth" />
                        </div>
                    </div>

                    {/* Card 2: Future-Proof Operations */}
                    <div className="bg-blue-50 pl-15 pr-10 pt-10 rounded-2xl hover:scale-102 transition-all duration-300 ease-out">
                        <h3 className="text-3xl font-semibold text-black mb-10">
                            Future-Proof Operations
                        </h3>
                        <p className="text-xl text-black leading-[30px] mb-6">
                            Build resilience and adaptability for the challenges of tomorrow.
                        </p>
                        <div className="w-full h-48 rounded-lg flex items-center justify-end">
                            <img src="/images/aboutus/howwehelp2.svg" alt="Future-Proof Operations" />
                        </div>
                    </div>

                    {/* Card 3: Enhance Customer Excellence */}
                    <div className="bg-blue-50 pl-15 pr-10 pt-10 rounded-2xl hover:scale-102 transition-all duration-300 ease-out">
                        <h3 className="text-3xl font-semibold text-black mb-10">
                            Enhance Customer Excellence
                        </h3>
                        <p className="text-xl text-black leading-[30px] mb-6">
                            Deliver seamless, reliable experiences that delight your customers.
                        </p>
                        <div className="w-full h-48 rounded-lg flex items-center justify-end">
                            <img src="/images/aboutus/howwehelp3.svg" alt="Enhance Customer Excellence" />
                        </div>
                    </div>

                    {/* Card 4: Mitigate Risk */}
                    <div className="bg-orange-50 pl-15 pr-10 pt-10 rounded-2xl hover:scale-102 transition-all duration-300 ease-out">
                        <h3 className="text-3xl font-semibold text-black mb-10">
                            Mitigate Risk
                        </h3>
                        <p className="text-xl text-black leading-[30px] mb-6">
                            Navigate uncertainty with secure, robust, and agile solutions.
                        </p>
                        <div className="w-full h-48 rounded-lg flex items-center justify-end">
                            <img src="/images/aboutus/howwehelp4.svg" alt="Mitigate Risk" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
