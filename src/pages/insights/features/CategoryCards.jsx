import React from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../../../components/Reveal';

// Card data for each category
const categoryData = {
    "AI Development": [
        {
            id: 1,
            blogPostId: "ai-agents-manufacturing",
            type: "BLOG",
            description: "AI AGENTS <br /> REDEFINING <br /> MANUFACTURING",
            image: "/images/insights/ai_dev_category1.svg",
            rightSideClassName: "bg-gray-100",
            leftSideClassName: "bg-[#0b2d4d]",
            textColor: "text-white",
            categoryColor: "bg-[#ff9d00] text-white"
        },
        {
            id: 2,
            blogPostId: "healthcare-ai-agents",
            type: "ARTICLE",
            description: "Healthcare Services <br /> with Capilarity's <br /> AI-Powered Agents",
            image: "/images/insights/ai_dev_category2.svg",
            rightSideClassName: "bg-gray-100",
            leftSideClassName: "bg-[#0b2d4d]",
            textColor: "text-white",
            categoryColor: "bg-white text-black"
        },
    ],
    "Observability": [
        {
            id: 1,
            blogPostId: "observability-predictive-maintenance",
            type: "BLOG",
            description: "How Observability <br /> Enables Predictive <br /> Maintenance in IT",
            image: "/images/insights/observability_category.svg",
            rightSideClassName: "bg-[#FF9E2D]",
            leftSideClassName: "bg-[#0b2d4d]",
            textColor: "text-white",
            categoryColor: "bg-[#ff9d00] text-white"
        },
    ],
    "DevOps": [
        {
            id: 1,
            blogPostId: "cspm-compliance-security",
            type: "BLOG",
            description: "CSPM in Ensuring <br /> Compliance and <br /> Securing Configurations",
            image: "/images/insights/devops_category.svg",
            rightSideClassName: "bg-white",
            leftSideClassName: "bg-[#3d3d3d]",
            textColor: "text-white",
            categoryColor: "bg-[#ff9d00] text-white"
        },
    ],
    "Security": [
        {
            id: 1,
            blogPostId: "soc-threat-intelligence",
            type: "BLOG",
            description: "Integrating SOC <br /> with Threat <br /> Intelligence",
            leftSideClassName: "bg-gradient-to-br from-[#3d3d3d] via-black to-orange-500/70",
            textColor: "text-white",
            categoryColor: "bg-[#ff9d00] text-white"
        },
    ]
};

// Individual card component
const CategoryCard = ({ card }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        if (card.blogPostId) {
            navigate(`/insights/post/${card.blogPostId}`);
        }
    };

    return (
        <div 
            className="min-w-[300px] bg-gray-100 rounded-2xl overflow-hidden hover:scale-102 transition-all duration-300 ease-out cursor-pointer min-h-[200px] flex"
            onClick={handleCardClick}
        >
            {/* Left side - Dark blue background - 60% width if image exists, full width if no image */}
            <div className={`${card.leftSideClassName} ${card.image ? 'w-3/5' : 'w-full'} p-6 flex flex-col gap-5`}>
                {/* Category Label */}
                <div className="flex justify-start">
                    <span className={`${card.categoryColor} px-3 py-1 rounded-full text-xs md:text-sm font-medium`}>
                        {card.type}
                    </span>
                </div>

                {/* Text Content - Only description */}
                <div className="text-left">
                    <h3 
                        className={`${card.textColor} text-base md:text-lg lg:text-xl font-bold leading-tight text-left`}
                        dangerouslySetInnerHTML={{ __html: card.description }}
                    />
                </div>
            </div>

            {/* Right side image */}
            {card.image && (
                <div className={`${card.rightSideClassName} w-2/5 flex items-center justify-center p-4`}>
                    <img
                        src={card.image}
                        alt={card.description}
                        className="w-full h-full object-contain"
                    />
                </div>
            )}
        </div>
    );
}

// Main CategoryCards component
const CategoryCards = ({ activeFilter }) => {
    const cards = categoryData[activeFilter] || [];

    return (
        <div className="max-w-6xl px-4 md:px-8 lg:px-20 mx-auto">
            <Reveal animation="slideUp" duration="slow" delay={200}>
                <div className="flex flex-wrap gap-10">
                    {cards.map((card) => (
                        <CategoryCard key={card.id} card={card} />
                    ))}
                </div>
            </Reveal>
        </div>
    );
};

export default CategoryCards;
