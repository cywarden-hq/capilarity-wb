import React from "react";
import Reveal from "../../../components/Reveal";

export default function Hero() {
    return (
        <div className="relative h-[600px] md:min-h-screen overflow-hidden z-0">
            <div className="absolute inset-0 h-[75%] bg-[#cbccd1] rounded-b-[150px] md:rounded-b-[250px] z-10" />
            <div className="absolute inset-0 h-[70%] bg-[#9d9fab] rounded-b-[150px] md:rounded-b-[250px] z-20" />
            <div className="absolute inset-0 h-[65%] bg-[#000624] rounded-b-[150px] md:rounded-b-[250px] z-20">
                <Reveal animation="slideUp" duration="normal" delay={100}>
                    <h1 className="text-3xl text-center py-40 md:py-60 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 md:mb-8 leading-tight z-50">
                        <span className="text-[#FFA100] tracking-[11px] font-semibold">INSIGHTS </span>
                        <span className="text-white tracking-[11px] font-regular">AND UPDATES</span>
                    </h1>
                </Reveal>
            </div>
        </div>
    );
}