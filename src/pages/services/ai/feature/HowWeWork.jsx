import React from "react";

const WorkflowStep = ({ stepNumber, title, description, imageUrl }) => {
    return (
        <article className="flex items-start justify-center mb-16 max-sm:flex-col max-sm:items-center max-sm:mb-10 max-sm:text-center">
            {/* Step Number */}
            <div className="flex-shrink-0 mr-8 max-sm:mr-0 max-sm:mb-4">
                <div className="text-8xl lg:text-9xl font-bold text-neutral-500 leading-none">
                    {stepNumber}
                </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 pt-2 max-sm:pt-0 max-sm:text-center w-full">
                <h2 className="mb-4 text-2xl lg:text-3xl font-semibold text-black leading-tight">
                    {title}
                </h2>
                <p className="text-lg lg:text-xl text-black leading-relaxed">
                    {description}
                </p>
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
        <section className="px-0 py-12 w-full bg-white">
            <header className="text-center mb-20">
                <h1 className="mb-14 text-5xl font-semibold text-black leading-[53px]">
                    How We Work: The Capilarity Blueprint
                </h1>
                <div className="px-5 py-0 mx-auto mt-0 text-xl leading-10 text-black max-w-[1181px]">
                    <p className="text-xl text-black font-normal">
                        We believe in a clear, transparent, and agile way of building AI. You won't find long delays or endless do-overs here. We work in focused sprints, test as we build, and keep you in the loop throughout the entire journey.
                    </p>
                </div>
            </header>

            <div className="px-5 py-0 mx-auto my-0 max-w-[1200px]">
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