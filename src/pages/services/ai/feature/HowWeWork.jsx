import React from "react";
import Reveal from '../../../../components/Reveal'

const WorkflowStep = ({ stepNumber, title, description, imageUrl }) => {
    return (
        <article tabIndex={0} className="group flex items-start justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-sm:flex-col max-sm:items-center max-sm:text-center cursor-pointer hover:scale-102 focus:scale-102 transition-all duration-300 ease-out">
            {/* Step Number */}
            <div className="flex-shrink-0 mr-4 sm:mr-6 md:mr-8 max-sm:mr-0 max-sm:mb-3 sm:mb-4">
                <Reveal animation="slideRight" duration="fast" delay={100}>
                    <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-neutral-500 group-hover:text-orange-500 group-focus:text-orange-500 transition-colors duration-300 leading-none">
                        {stepNumber}
                    </div>
                </Reveal>
            </div>

            {/* Connector Line - Hidden on mobile, visible on larger screens */}
            <div className="hidden sm:block w-[2px] h-32 sm:h-36 md:h-40 bg-gray-400 ml-3 sm:ml-4 md:ml-5 mr-3 sm:mr-4 md:mr-5 shadow-[-5px_0px_10px_rgba(0,0,0,0.6),_-15px_0px_25px_rgba(0,0,0,0.4)] group-hover:bg-orange-500 group-focus:bg-orange-500 group-hover:shadow-[-5px_0px_10px_rgba(255,150,0,1),_-15px_0px_25px_rgba(255,150,0,1)] group-focus:shadow-[-5px_0px_10px_rgba(255,150,0,1),_-15px_0px_25px_rgba(255,150,0,1)] transition-colors duration-300"></div>

            {/* Content */}
            <div className="flex-1 pt-1 sm:pt-2 max-sm:pt-0 max-sm:text-center w-full">
                <Reveal animation="slideUp" duration="fast" delay={200}>
                    <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-black group-hover:text-orange-500 group-focus:text-orange-500 transition-colors duration-300 leading-tight">
                        {title}
                    </h2>
                </Reveal>
                <Reveal animation="slideUp" duration="fast" delay={300}>
                    <p className="text-base sm:text-lg md:text-lg lg:text-xl text-black leading-relaxed sm:leading-loose">
                        {description}
                    </p>
                </Reveal>
            </div>
        </article>
    );
};

function HowWeWork() {
    const workflowSteps = [
        {
            stepNumber: "01",
            title: "Discovery & Insight Gathering",
            description: "Our first step is getting to know your business inside and out. Together, we figure out where AI can make the biggest splash and draft a clear plan that matches your goals."
        },
        {
            stepNumber: "02",
            title: "Data Acquisition & Preparation",
            description: "Great AI is built on great data. We gather, clean, and structure your information so your AI has a solid foundation to learn from."
        },
        {
            stepNumber: "03",
            title: "Model Development & Experimentation",
            description: "This is where the building gets going. We develop and test different models to find the perfect fit for your challenge."
        },
        {
            stepNumber: "04",
            title: "Training & Model Optimization",
            description: "We feed your model a diet of real-world data and then tweak and coach it relentlessly. We don't stop until it's not just accurate, but trustworthy and robust enough to handle the messy, unpredictable chaos of your actual business day."
        },
        {
            stepNumber: "05",
            title: "Deployment & Integration",
            description: "We carefully plug your new AI into the tools your team already uses, making it a natural part of their routine. Our goal is for everyone to wonder how they ever worked without it, from the very first morning it's live."
        },
        {
            stepNumber: "06",
            title: "Monitoring, Support & Continuous Improvement",
            description: "We don't just walk away after launch. We keep an eye on performance, offer support, and help your AI keep learning and improving over time."
        }
    ];

    return (
        <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 w-full bg-white">
            <header className="text-center mb-12 sm:mb-16 md:mb-20">
                <h1 className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight sm:leading-[1.2] md:leading-[1.1] lg:leading-[1.1] px-2">
                    How We Work: The Capilarity Blueprint
                </h1>
                <div className="px-2 sm:px-4 md:px-5 py-0 mx-auto mt-0 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose md:leading-[2.5rem] text-black max-w-5xl lg:max-w-[1181px]">
                    <p className="text-base sm:text-lg md:text-xl text-black font-normal">
                        We believe in a clear, transparent, and agile way of building AI. You won't find long delays or endless do-overs here. We work in focused sprints, test as we build, and keep you in the loop throughout the entire journey.
                    </p>
                </div>
            </header>

            <div className="px-2 sm:px-4 md:px-5 py-0 mx-auto my-0 max-w-5xl lg:max-w-[1200px]">
                {workflowSteps.map((step, index) => (
                    <WorkflowStep
                        key={step.stepNumber}
                        stepNumber={step.stepNumber}
                        title={step.title}
                        description={step.description}
                        imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/71b21d67a0b024b2a26064d81b261c43676e78bb?width=242"
                    />
                ))}
            </div>
        </section>
    );
};

export default HowWeWork;