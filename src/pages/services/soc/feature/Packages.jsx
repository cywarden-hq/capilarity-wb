import React from 'react'
import Reveal from '../../../../components/Reveal'

export default function Packages() {
    const packages = [
        {
            id: 1,
            title: "Essential SOC",
            price: "$0/monthly",
            description: "A strong foundation for businesses starting their security journey.",
            features: [
                "24/7 monitoring & alerting",
                "SIEM log collection & analysis",
                "Monthly security reports"
            ],
            targetAudience: "Ideal for small businesses that need continuous monitoring without overhead.",
            buttonText: "Start Free",
            buttonStyle: "bg-orange-500 text-white hover:bg-orange-600",
            inclusionBar: null,
        },
        {
            id: 2,
            title: "Advanced SOC",
            price: "$0/monthly",
            description: "For organizations that need more than just monitoring, with added intelligence and compliance support.",
            features: [
                "Threat intelligence integration",
                "Vulnerability scanning & patch advisory",
                "Compliance-ready reporting (ISO, GDPR, PCI, HIPAA, etc.)",
                "Regular analyst review sessions"
            ],
            targetAudience: "Designed for midsize companies balancing growth, compliance, and security maturity.",
            buttonText: "Start Free",
            buttonStyle: "bg-white text-black hover:bg-gray-200",
            inclusionBar: {
                text: "Everything in Essential, plus:",
                style: "bg-[#9e9d9d]"
            },
        },
        {
            id: 3,
            title: "Premium SOC Managed Detection & Response",
            price: "$0/monthly",
            description: "Our most comprehensive package, designed for businesses that can't afford downtime or blind spots.",
            features: [
                "Managed Detection & Response (MDR) with real-time containment",
                "Proactive threat hunting across endpoints, networks, and cloud",
                "Cloud & SaaS monitoring (AWS, Azure, O365, GCP)",
                "Automated response playbooks"
            ],
            targetAudience: "Best for enterprises that need hands-on defense and proactive resilience against advanced threats.",
            buttonText: "Start Free",
            buttonStyle: "bg-white text-black hover:bg-gray-200",
            inclusionBar: {
                text: "Everything in Advanced, plus:",
                style: "bg-[#deb204]"
            },
        }
    ]

    return (
        <section className='py-16 lg:py-20'>
            <Reveal animation="slideUp" duration="fast" delay={100}>
                <h1 className='text-3xl lg:text-5xl text-black leading-tight lg:leading-normal text-center'>Our SOC <span className='font-bold'>Packages</span> </h1>
            </Reveal>

            <Reveal animation="slideUp" duration="fast" delay={200}>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 py-10 lg:py-20 px-4 sm:px-8 lg:px-20 justify-center items-center'>
                    {packages.map((pkg, index) => (
                        <div
                            key={pkg.id}
                            className="flex flex-col w-full sm:w-[350px] lg:w-[390px] h-auto lg:h-[550px] bg-[#0D0F11] rounded-3xl 
                        shadow-lg shadow-orange-500/40 hover:scale-103 hover:border-2 hover:border-orange-500 transition-all duration-300 ease-out cursor-pointer"
                        >
                            {/* Main content with padding */}
                            <div className="flex flex-col gap-3 pt-6 sm:pt-8 pb-4 pr-4 sm:pr-8 pl-4 sm:pl-8">
                                <h2 className='text-sm sm:text-md font-normal text-white text-left'>{pkg.title}</h2>
                                <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-left'>{pkg.price}</div>
                                <p className='text-gray-300 text-xs sm:text-sm text-left'>{pkg.description}</p>
                            </div>

                            {/* Inclusion bar - no padding, sticks to left boundary, positioned after description */}
                            {pkg.inclusionBar && (
                                <div className={`${pkg.inclusionBar.style} rounded-tr-full rounded-br-full px-4 sm:px-6 lg:px-8 py-1 text-left w-fit`}>
                                    <span className='text-white text-sm sm:text-md font-normal'>{pkg.inclusionBar.text}</span>
                                </div>
                            )}

                            {/* Features and remaining content with padding */}
                            <div className="flex flex-col gap-3 pb-6 sm:pb-8 pr-4 sm:pr-8 pl-4 sm:pl-8 pt-2 flex-1">
                                <div className={`flex flex-col gap-2 ${pkg.inclusionBar ? 'mt-2' : 'mt-4 sm:mt-6'}`}>
                                    {pkg.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className='flex items-center gap-2 sm:gap-3'>
                                            <span className='text-white text-xs'>✓</span>
                                            <span className='text-white text-xs sm:text-sm'>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className='md:hidden sm:block lg:block xl:block text-gray-400 text-xs sm:text-sm text-left'>{pkg.targetAudience}</p>

                                <button className={`${pkg.buttonStyle} px-4 sm:px-6 py-2 sm:py-3 mt-auto rounded-full font-semibold transition-colors text-sm sm:text-base`}>
                                    {pkg.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </Reveal>
        </section>
    )
}