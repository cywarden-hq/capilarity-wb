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
                style: "bg-gray-600"
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
                style: "bg-orange-500"
            },
        }
    ]

    return (
        <section className='py-16 lg:py-20'>
            <Reveal animation="slideUp" duration="normal" delay={200}>
                <h1 className='text-3xl lg:text-5xl text-black leading-tight lg:leading-normal text-center'>Our SOC <span className='font-bold'>Packages</span> </h1>
            </Reveal>

            <div className='flex gap-10 py-20 justify-center items-center'>
                {packages.map((pkg, index) => (
                    <div
                        key={pkg.id}
                        className="flex flex-col gap-5 w-[390px] h-[528px] bg-[#0D0F11] rounded-3xl 
                        hover:shadow-xl hover:scale-103 hover:border-2 hover:border-orange-500 transition-all duration-300 ease-out cursor-pointer p-8"
                    >
                        <h2 className='text-md font-normal text-white text-left'>{pkg.title}</h2>
                        <div className='text-4xl font-bold text-white text-left'>{pkg.price}</div>
                        <p className='text-gray-300 text-xs text-left'>{pkg.description}</p>

                        {pkg.inclusionBar && (
                            <div className={`${pkg.inclusionBar.style} rounded-full px-4 py-2 text-left`}>
                                <span className='text-white text-sm font-medium'>{pkg.inclusionBar.text}</span>
                            </div>
                        )}

                        <div className={`flex flex-col gap-3 ${pkg.inclusionBar ? 'mt-2' : 'mt-6'}`}>
                            {pkg.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className='flex items-center gap-3'>
                                    <span className='text-white text-xs'>✓</span>
                                    <span className='text-white text-sm'>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <p className='text-gray-400 text-xs text-left mt-4'>{pkg.targetAudience}</p>

                        <button className={`${pkg.buttonStyle} px-6 py-3 rounded-lg font-semibold mt-auto transition-colors`}>
                            {pkg.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}