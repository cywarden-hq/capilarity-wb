import React from 'react';
import Reveal from '../../../components/Reveal';

function FilterButtons({ activeFilter, setActiveFilter }) {
    const filterOptions = [
        { label: "All", active: true },
        { label: "Observability", active: false },
        { label: "AI Development", active: false },
        { label: "DevOps", active: false },
        { label: "Security", active: false },
    ];

    return (
        <nav className="flex flex-auto gap-3 items-center justify-center max-md:max-w-full">
            {filterOptions.map((option) => (
                <button
                    key={option.label}
                    onClick={() => setActiveFilter(option.label)}
                    className={`flex overflow-hidden flex-col justify-center px-2 lg:px-4 py-1 lg:py-2 text-xs lg:text-sm my-auto leading-loose whitespace-nowrap rounded-xl shadow-sm border-2 border-solid border-slate-200 hover:border-orange-300 transition-colors ${activeFilter === option.label
                        ? "bg-orange-400 text-neutral-50"
                        : "bg-white border border-solid border-slate-200 text-gray-800"
                        }`}
                >
                    <span>{option.label}</span>
                </button>
            ))}
        </nav>
    );
}

const CapilarityCardsLayout = () => {
    const [activeFilter, setActiveFilter] = React.useState("All");

    // Define blog categories for each card
    const blogCategories = {
        "Security": [1, 6], // Security card and SOC card
        "AI Development": [2, 4], // Manufacturing card and Healthcare card
        "DevOps": [3], // CSPM card
        "Observability": [5], // Observability card
        "All": [1, 2, 3, 4, 5, 6] // All cards
    };

    // Filter cards based on active filter
    const getVisibleCards = () => {
        const visibleCardIds = blogCategories[activeFilter] || blogCategories["All"];
        return visibleCardIds;
    };

    const visibleCards = getVisibleCards();

    return (
        <div className="flex flex-col gap-10 lg:gap-20 justify-center items-center mx-4 md:mx-8 lg:mx-20 py-10 lg:py-20 min-h-screen xl:border-2 xl:border-black rounded-3xl">
            <header className="flex flex-wrap gap-8 justify-center items-center w-full text-sm text-center text-gray-800 max-w-[1076px] max-md:max-w-full">
                <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            </header>

            <div className="max-w-6xl mx-auto">
                {/* Grid container with custom grid areas */}
                <Reveal animation="slideUp" duration="slow" delay={200}>
                <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 lg:grid-rows-4 gap-4 lg:h-screen lg:max-h-[800px]">

                    {/* Card 1 - Threat Detection (Top Left) */}
                    {visibleCards.includes(1) && (
                    <div className="col-span-1 lg:row-span-3 bg-stone-950 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-6 lg:py-10 text-white relative overflow-hidden flex flex-col text-center hover:scale-101 focus:scale-101 transition-all duration-300 ease-out cursor-pointer min-h-[300px] lg:min-h-0">
                        {/* Glowing orange effect at top left */}
                        <div className="absolute -top-20 -left-20 w-70 h-70 bg-gradient-to-br from-orange-500/30 to-transparent rounded-full blur-2xl"></div>
                        <div className="absolute -top-20 -left-20 w-70 h-70 bg-gradient-to-br from-orange-400/50 to-transparent rounded-full blur-2xl"></div>
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/b9975e5e089a03c9f143e10144d05c3412836492?placeholderIfAbsent=true&apiKey=9de1037908bf4a2c99095ce346491382"
                            alt="Security logo"
                            className="object-contain self-center aspect-[3] w-[60px] lg:w-[87px] mb-8 lg:mb-15"
                        />
                        <h2 className="text-xl lg:text-3xl leading-6 lg:leading-10 mb-4 lg:mb-8">
                            Want to{" "}
                            <span style={{ color: "rgba(252,193,64,1)" }}>Optimize </span>
                            Threat Detection?
                        </h2>
                        <div className="mt-4 lg:mt-8">
                            <h3 className="text-2xl lg:text-5xl font-regular mb-2">5 Patterns vs.</h3>
                            <div className="text-3xl lg:text-6xl font-bold text-[#F37100]">500 Rules</div>
                        </div>
                        <div className="absolute bottom-4 lg:bottom-10 self-center">
                            <span className="bg-[#565353] text-gray-300 bg-opacity-50 text-xs lg:text-base px-2 lg:px-3 py-1 rounded-full">
                                ENTERPRISE-GRADE SECURITY
                            </span>
                        </div>
                    </div>
                    )}

                    {/* Card 2 - AI Agents Manufacturing (Top Right) */}
                    {visibleCards.includes(2) && (
                    <div className="col-span-1 lg:col-span-2 lg:row-span-2 bg-gradient-to-tr from-[#FFB039] via-[#FF6F00] to-[#FFB039] rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-6 lg:py-8 text-white relative overflow-hidden flex flex-col lg:flex-row hover:scale-101 focus:scale-101 transition-all duration-300 ease-out cursor-pointer min-h-[300px] lg:min-h-0">
                        <div className="flex flex-col justify-around w-full lg:w-[60%]">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/c45eaa5b6d767e0e7b79eb9332236e8aff079206?placeholderIfAbsent=true&apiKey=9de1037908bf4a2c99095ce346491382"
                                alt="Manufacturing logo"
                                className="object-contain aspect-[3] w-[60px] lg:w-[87px] mb-4 lg:mb-6"
                            />
                            <h2 className="text-xl lg:text-3xl leading-6 lg:leading-10 text-center lg:text-left flex-1">
                                <span style={{ fontWeight: 600 }}>AI AGENTS <br /> </span>
                                REDEFINING <br />
                                MANUFACTURING
                            </h2>
                            <footer className="text-xs lg:text-sm font-light leading-3 text-center lg:text-left mt-auto">
                                www.capilarity.com
                            </footer>
                        </div>
                        <div className="w-full lg:w-[40%] h-48 lg:h-full overflow-hidden">
                            <img
                                src="/images/insights/ai_agents.svg"
                                alt="AI agents logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                    )}

                    {/* Card 3 - CSPM (Bottom Center) */}
                    {visibleCards.includes(3) && (
                    <div className="col-span-1 lg:row-span-2 bg-[#edf3ff] rounded-2xl p-4 lg:p-6 text-gray-800 relative flex flex-col hover:scale-101 focus:scale-101 transition-all duration-300 ease-out cursor-pointer min-h-[250px] lg:min-h-0">
                        <h3 className="font-bold text-lg lg:text-2xl text-gray-900 mb-3 lg:mb-4">
                            <span className="text-blue-700">CSPM</span> in Ensuring<br />
                            Compliance and<br />
                            <span className="text-orange-500">Securing Configurations</span>
                        </h3>
                        <div className="flex-1 flex items-center justify-center overflow-hidden">
                            <img
                                src="/images/insights/cspm2.svg"
                                alt="CSPM"
                                className="w-full h-auto object-contain max-h-full"
                            />
                        </div>
                    </div>
                    )}

                    {/* Card 4 - Healthcare Services (Right) */}
                    {visibleCards.includes(4) && (
                    <div className="relative overflow-hidden bg-gradient-to-r from-[#ebf1fc] to-[#dce5f5] rounded-2xl text-gray-800 hover:scale-101 focus:scale-101 transition-all duration-300 ease-out cursor-pointer min-h-[200px] lg:min-h-0">
                        <img
                            src="/images/insights/ai_agents2.svg"
                            alt="AI Agents"
                            className="w-full h-full z-10 absolute"
                        />
                        <h2 className="text-lg lg:text-2xl text-center font-bold px-6 lg:px-10 py-6 lg:py-10 leading-tight">
                            Healthcare Services<br />
                            with Capilarity's<br />
                            <span className="text-blue-700">AI-Powered Agents</span>
                        </h2>
                    </div>
                    )}

                    {/* Card 5 - Observability (Bottom Left) */}
                    {visibleCards.includes(5) && (
                    <div className="flex justify-center items-center relative overflow-hidden col-span-1 lg:row-span-1 bg-gradient-to-tr from-[#FFB039] via-[#FFB039] to-[#FF6F00] rounded-2xl p-6 lg:p-10 hover:scale-101 focus:scale-101 transition-all duration-300 ease-out cursor-pointer min-h-[200px] lg:min-h-0">
                        <img
                            src="/images/insights/observability.svg"
                            alt="Observability"
                            className="z-10 absolute top-6 lg:top-10 w-[60%] lg:w-[80%] h-full"
                        />
                        <h2 className="text-xl lg:text-3xl text-center text-black font-regular leading-tight z-20">
                            How <b>Observability</b><br />
                            Enables Predictive<br />
                            Maintenance in <b>IT</b>
                        </h2>
                    </div>
                    )}

                    {/* Card 6 - SOC Integration (Bottom Right) */}
                    {visibleCards.includes(6) && (
                    <div className="relative flex justify-center items-center col-span-1 lg:row-span-1 bg-black rounded-2xl text-white overflow-hidden hover:scale-101 focus:scale-101 transition-all duration-300 ease-out cursor-pointer min-h-[200px] lg:min-h-0">
                        {/* L-shaped lines at top left */}
                        <div className="absolute top-6 left-6 z-10">
                            <div className="w-16 h-px bg-white"></div>
                            <div className="w-px h-16 bg-white -mt-px"></div>
                        </div>

                        {/* Glowing orange effect at bottom left */}
                        <div className="absolute -bottom-10 -left-10 w-50 h-50 bg-gradient-to-tr from-orange-500/30 to-transparent rounded-full blur-xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-50 h-50 bg-gradient-to-tr from-orange-400/50 to-transparent rounded-full blur-lg"></div>

                        <h2 className="text-xl lg:text-3xl text-center font-bold leading-tight z-20">
                            Integrating <span className="text-orange-300">SOC</span><br />
                            with<br />
                            Threat Intelligence
                        </h2>
                    </div>
                    )}
                </div>
                </Reveal>
            </div>
        </div >
    );
};

export default CapilarityCardsLayout;