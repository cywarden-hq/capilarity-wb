import React from 'react'

export default function FeaturedContent() {
    return (
        <section className="bg-white relative overflow-hidden">
            <img
                className="w-full h-full absolute -bottom-40 z-0"
                src="/images/observability/featured_bg.svg"
                alt="Featured Background"
            />

            <img
                className="absolute bottom-10 right-0 z-10"
                src="/images/observability/featured_bottom_right.svg"
                alt="Featured Bottom Right"
            />

            <img
                className="absolute top-10 right-0 z-10"
                src="/images/observability/featured_top_right.svg"
                alt="Featured Top Right"
            />

            <div className="flex flex-col gap-10 lg:gap-25 py-20 relative z-50">
                <h1 className="text-5xl font-bold text-[#002857] text-center pt-10 lg:pt-0">Featured Content</h1>
                <div className="flex-col lg:flex-row flex gap-15 justify-center items-center">

                    <div className="relative group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 h-[400px] w-[300px] rounded-2xl hover:duration-700 duration-700">
                        <div className="w-full h-full bg-[#FF6666] text-gray-800">
                            <h1 className="text-white font-bold text-4xl pt-5 pl-7">Article 1</h1>
                        </div>
                        <div className="absolute bg-[#EFECEC] -bottom-24 w-full p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                            <span className="text-lime-400 font-bold text-xs">DESCRIPTION</span>
                            <span className="text-gray-800 font-bold text-3xl">Cheat Sheet</span>
                            <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div className="relative group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 h-[400px] w-[300px] rounded-2xl hover:duration-700 duration-700">
                        <div className="w-full h-full bg-[#545454] text-gray-800">
                            <h1 className="text-white font-bold text-4xl pt-5 pl-7">Article 2</h1>
                        </div>
                        <div className="absolute bg-[#EFECEC] -bottom-24 w-full p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                            <span className="text-lime-400 font-bold text-xs">DESCRIPTION</span>
                            <span className="text-gray-800 font-bold text-3xl">Cheat Sheet</span>
                            <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div className="relative group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 h-[400px] w-[300px] rounded-2xl hover:duration-700 duration-700">
                        <div className="w-full h-full bg-[#B3A8A8] text-gray-800">
                            <h1 className="text-white font-bold text-4xl pt-5 pl-7">Article 3</h1>
                        </div>
                        <div className="absolute bg-[#EFECEC] -bottom-24 w-full p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                            <span className="text-lime-400 font-bold text-xs">DESCRIPTION</span>
                            <span className="text-gray-800 font-bold text-3xl">Cheat Sheet</span>
                            <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div className="relative group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 h-[400px] w-[300px] rounded-2xl hover:duration-700 duration-700">
                        <div className="w-full h-full bg-[#FFB766] text-gray-800">
                            <h1 className="text-white font-bold text-4xl pt-5 pl-7">Article 4</h1>
                        </div>
                        <div className="absolute bg-[#EFECEC] -bottom-24 w-full p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                            <span className="text-lime-400 font-bold text-xs">DESCRIPTION</span>
                            <span className="text-gray-800 font-bold text-3xl">Cheat Sheet</span>
                            <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}