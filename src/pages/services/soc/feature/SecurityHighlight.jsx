import React, { useState } from 'react'
import Reveal from '../../../../components/Reveal'

// Card data as const variable
const securityHighlightCards = [
    {
        id: 1,
        title: "Continuous Monitoring",
        description: "24/7 detection across networks, endpoints, and cloud.",
        image: "/images/soc/highlights_1.svg",
        imageAlt: "Continuous Monitoring",
        style: "bg-[#cfdefa]"
    },
    {
        id: 2,
        title: "Real-Time Response",
        description: "Stop threats in motion with our MDR, powered response.",
        image: "/images/soc/highlights_2.svg",
        imageAlt: "Real-Time Response",
        style: "bg-[#E9DFFF]"
    },
    {
        id: 3,
        title: "Compliance Support",
        description: "Automated reports and audit assistance.",
        image: "/images/soc/highlights_3.svg",
        imageAlt: "Compliance Support",
        style: "bg-[#ffd6bd]"
    },
    {
        id: 4,
        title: "Threat Hunting",
        description: "Proactive hunts to catch what automated tools are missing.",
        image: "/images/soc/highlights_4.svg",
        imageAlt: "Threat Hunting",
        style: "bg-[#ffebee]"
    },
    {
        id: 5,
        title: "Expert Guidance",
        description: "Direct access to security analysts when you need them most.",
        image: "/images/soc/highlights_5.svg",
        imageAlt: "Expert Guidance",
        style: "bg-[#c9d1ff]"
    },
]

// Reusable Card Component
const SecurityCard = ({ card, index, delay, isMiddle = false }) => {
    const scaleClass = isMiddle ? 'scale-100' : 'scale-90'
    const containerClass = isMiddle
        ? 'max-w-[300px] sm:max-w-[350px] md:max-w-[400px]'
        : 'max-w-[200px] sm:max-w-[250px] md:max-w-[268px]'
    const imageClass = isMiddle
        ? 'h-[250px] sm:h-[300px] md:h-[350px]'
        : 'h-[200px] sm:h-[250px] md:h-[268px]'

    return (
        <div className={`flex flex-col gap-4 md:gap-5 items-center hover:scale-[1.01] transition-all duration-300 ease-out cursor-pointer ${scaleClass}`}>
            <div className={`rounded-4xl p-10 ${card.style} w-full ${containerClass} ${imageClass} flex items-center justify-center`}>
                <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="w-full h-full object-contain rounded-lg"
                />
            </div>
            <div className={`flex flex-col gap-3 md:gap-5 w-full ${containerClass}`}>
                <h3 className={`font-bold ${isMiddle ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>{card.title}</h3>
                <p className={`text-gray-600 ${isMiddle ? 'text-base md:text-lg' : 'text-sm md:text-base'}`}>{card.description}</p>
            </div>
        </div>
    )
}

export default function SecurityHighlight() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const cardsPerView = 3

    const nextCards = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 >= securityHighlightCards.length
                ? 0
                : prevIndex + 1
        )
    }

    const prevCards = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0
                ? securityHighlightCards.length - 1
                : prevIndex - 1
        )
    }

    // Create circular carousel by wrapping around the array
    const getVisibleCards = () => {
        const cards = []
        for (let i = 0; i < cardsPerView; i++) {
            const index = (currentIndex + i) % securityHighlightCards.length
            cards.push(securityHighlightCards[index])
        }
        return cards
    }

    const visibleCards = getVisibleCards()
    return (
        <section className="relative min-h-screen">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/soc/highlights_bg.svg"
                    className="w-full h-full object-cover"
                    alt="Background pattern"
                />
            </div>

            {/* Security Highlight */}
            <div className="flex flex-col text-center pt-16 pb-16 md:pt-30 md:pb-30 gap-5 lg:gap-10 z-10 px-4 sm:px-6 lg:px-8">
                <Reveal animation="slideUp" duration="normal" delay={100} easing="smoothOut">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#010101] font-bold leading-tight lg:leading-normal">
                        Unlocks <span className="text-[#FE8032]">Full Spectrum Security</span> <br />
                        With Capilarity <span className="text-[#FE8032]">SOC</span>
                    </h1>
                </Reveal>

                <div className="flex justify-between items-center sm:gap-2 md:gap-5 lg:gap-20 relative max-w-7xl pt-8 pb-8 md:pt-15 md:pb-15 mx-auto z-10 border-t border-b border-gray-200">
                    <button
                        onClick={prevCards}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FE8032] text-white hover:bg-[#e6732a] transition-colors duration-200 shadow-lg hover:shadow-xl"
                        aria-label="Previous cards"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Cards Container */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 justify-center items-center">
                        {visibleCards.map((card, index) => (
                            <SecurityCard
                                key={card.id}
                                card={card}
                                index={index}
                                delay={300 + (index * 100)}
                                isMiddle={index === 1}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextCards}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FE8032] text-white hover:bg-[#e6732a] transition-colors duration-200 shadow-lg hover:shadow-xl"
                        aria-label="Next cards"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}