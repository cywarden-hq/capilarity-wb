import React from "react";

// Reusable Partner Logo Component
const PartnerLogo = ({ src, alt }) => (
    <div className="flex items-center justify-center w-30 h-16 sm:w-40 sm:h-20 lg:w-48 lg:h-24 px-2">
        <img
            className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            alt={alt}
            src={src}
        />
    </div>
);

const OurPartners = () => {
    const partners = [
        { src: "/images/home/partners/image-1.svg", alt: "Check Point Logo" },
        { src: "/images/home/partners/image-2.svg", alt: "CyberArk Logo" },
        { src: "/images/home/partners/image-3.svg", alt: "Cisco Logo" },
        { src: "/images/home/partners/image-4.svg", alt: "Elastic Logo" },
        { src: "/images/home/partners/image-5.svg", alt: "AWS Logo" },
        { src: "/images/home/partners/image-6.svg", alt: "Palo Alto Networks Logo" },
    ];

    return (
        <section className="w-full bg-white"style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            <div className="max-w-7xl mx-auto px-8">
                {/* Header Text */}
                <div className="text-center" style={{ paddingBottom: '36px' }}>
                    <p className="text-[#00000073] text-[20px] leading-relaxed">
                        Trusted by leading enterprises across finance, SaaS, healthcare, and technology.
                    </p>
                </div>
                
                {/* Partners Row */}
                <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16" style={{ paddingLeft: '26px', paddingRight: '26px' }}>
                    {partners.map((partner, index) => (
                        <PartnerLogo
                            key={index}
                            src={partner.src}
                            alt={partner.alt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurPartners;
