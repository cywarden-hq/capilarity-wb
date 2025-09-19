import React from "react";

export default function Hero() {
    return (
        <div className="relative w-full min-h-screen bg-[#0F3157]">
            <img
                src="/images/partners/hero_bg.svg"
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-20 text-left pl-50 py-50 max-w-4xl">
                <h1 className="text-9xl font-semibold text-white mb-5">Partners <br /> With Us</h1>
                <h2 className="text-4xl font-regular text-[#B0B0B0] mb-8">Let's Build a Safer Digital Future Together</h2>
                <p className="text-lg text-[#E4E4E4] leading-[40px]">
                    At Capilarity, we believe cybersecurity works best when it's a shared mission. The digital world is evolving fast, and no single organization can tackle today's threats alone. That's why we've built the Capilarity Partner Program, a community where collaboration drives stronger, smarter defenses.
                </p>
            </div>
        </div>
    );
}
