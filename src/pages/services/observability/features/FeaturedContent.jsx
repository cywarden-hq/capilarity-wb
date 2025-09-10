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

            <div className="flex flex-col gap-25 py-20 relative z-50">
                <h1 className="text-5xl font-bold text-[#002857] text-center">Featured Content</h1>
                <div className="flex gap-15 justify-center">
                    <div className="flex flex-col gap-5 bg-[#FF6666] rounded-xl h-[400px] w-[300px]">
                        <h1 className="text-white font-bold text-4xl pt-5 pl-7">Article 1</h1>
                    </div>
                    <div className="flex flex-col gap-5 bg-[#545454] rounded-xl h-[400px] w-[300px]">
                        <h1 className="text-white font-bold text-4xl pt-5 pl-7">Article 2</h1>
                    </div>
                    <div className="flex flex-col gap-5 bg-[#B3A8A8] rounded-xl h-[400px] w-[300px]">
                        <h1 className="text-white font-bold text-4xl pt-5 pl-7">Article 3</h1>
                    </div>
                    <div className="flex flex-col gap-5 bg-[#FFB766] rounded-xl h-[400px] w-[300px]">
                        <h1 className="text-white font-bold text-4xl pt-5 pl-7">Article 4</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}