import React from "react";
import Reveal from "../../../components/Reveal";

// FeatureCard Component (merged from FeatureCard.tsx)
const FeatureCard = ({ icon, title, description, className = "" }) => {
  return (
    <article className={`group flex flex-col items-start px-5 py-5
     bg-white rounded-3xl 
     shadow-[0px_4px_16px_rgba(7,28,53,0.11)] 
     hover:shadow-[0px_8px_32px_rgba(7,28,53,0.15)] hover:scale-[1.02] hover:border-orange-200 
     border border-transparent transition-all duration-300 ease-out cursor-pointer ${className}
    `}>
      <div className="group-hover:scale-110 transition-transform duration-300 ease-out">
        <img
          src={icon}
          alt=""
          className="object-contain aspect-[0.98] w-[60px] grayscale invert group-hover:grayscale-0 group-hover:invert-0 transition duration-300 ease-out"
        />
      </div>
      <h3 className="mt-5 text-base font-bold text-zinc-800 group-hover:text-orange-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="self-stretch mt-3.5 text-sm leading-5 text-stone-500 group-hover:text-gray-600 transition-colors duration-300">
        {description}
      </p>
    </article>
  );
};

// Main OurTestimonials Component (merged from TestimonialsSection.tsx)
const features = [
  {
    icon: "/images/home/testimonials/image1.svg",
    title: "Cost & Utilization Reporting",
    description: "Track and report modifications in cost\n and esource utilization in real-time,\n providing clear visibility and control\n over your financial and operational metrics.",
  },
  {
    icon: "/images/home/testimonials/image2.svg",
    title: "Data-Driven Recommendations",
    description: "Receive actionable recommendations\nbased on comprehensive data analysis\n of your AWS environment, optimizing\nresource allocation and cost efficiency.",

  },
  {
    icon: "/images/home/testimonials/image3.svg",
    title: "Service Investigation",
    description: "Gain deep insights into your services\n with advanced investigation tools that analyze."
  },
  {
    icon: "/images/home/testimonials/image4.svg",
    title: "Data Quality Management",
    description: "Enhance data accuracy with robust\nquality checks, ensuring reliable and\nactionable insights.",
    className: "py-5 pr-12 pl-5 max-md:pr-5"
  },
  {
    icon: "/images/home/testimonials/image5.svg",
    title: "Budgeting and Forecasting",
    description: "Dynamic budgeting adjusts to cloud\nchanges, while predictive analytics costs\nfrom historical data.",
    className: "py-6"
  },
  {
    icon: "/images/home/testimonials/image6.svg",
    title: "Auto Remediation",
    description: "Quickly resolve issues with automatic\nremediation of assets, minimizing\ndowntime & maintaining optimal\nperformance with minimal intervention."
  },
  {
    icon: "/images/home/testimonials/image7.svg",
    title: "Auto Tagging",
    description: "Effortlessly categorize assets with\nautomated tagging, ensuring consistent\n and accurate resource management\n without manual input."
  }
];

export const OurTestimonials = () => {
  const formatDescription = (description) => {
    return description.split('\n').map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <section className="flex overflow-hidden relative flex-col items-center px-20 py-16 max-md:px-5">
      <div className="absolute top-[200px] left-0 w-full h-full">
        <img
          src="/images/home/testimonials/bg.svg"
          alt="Testimonials Background"
          className="object-cover"
        />
      </div>
      <div className="flex z-10 flex-col -mt-3 max-w-full w-[952px]">
        <header className="self-center ml-4 text-6xl font-extrabold tracking-tighter text-black max-md:max-w-full max-md:text-4xl hover:text-orange-600 transition-colors duration-300 ease-out cursor-default">
          <Reveal animation="slideUp" duration="normal" delay={400}>
            <span className="font-semibold text-orange-500 hover:text-orange-600 transition-colors duration-300 ease-out">Testimonials</span>
          </Reveal>
        </header>


        <div className="mt-24 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {/* First Column */}
            <div className="w-[33%] max-md:ml-0 max-md:w-full">
              <Reveal animation="slideRight" duration="normal" delay={800}>
                <div className="max-md:mt-7">
                  <FeatureCard
                    icon={features[0].icon}
                    title={features[0].title}
                    description={formatDescription(features[0].description)}
                    className="hover:animate-scale-pop"
                  />
                  <div className="mt-5">
                    <FeatureCard
                      icon={features[1].icon}
                      title={features[1].title}
                      description={formatDescription(features[1].description)}
                      className="mt-4 hover:animate-scale-pop"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Second Column */}
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <Reveal animation="slideUp" duration="normal" delay={1000}>
                <div className="max-md:mt-7">
                  <FeatureCard
                    icon={features[2].icon}
                    title={features[2].title}
                    description={formatDescription(features[2].description)}
                    className="hover:animate-scale-pop"
                  />
                  <div className="mt-5">
                    <FeatureCard
                      icon={features[3].icon}
                      title={features[3].title}
                      description={formatDescription(features[3].description)}
                      className="hover:animate-scale-pop"
                    />
                  </div>
                  <div className="mt-5">
                    <FeatureCard
                      icon={features[4].icon}
                      title={features[4].title}
                      description={formatDescription(features[4].description)}
                      className="hover:animate-scale-pop"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Third Column */}
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <Reveal animation="slideLeft" duration="normal" delay={1200}>
                <div className="grow mt-60 max-md:mt-10">
                  <FeatureCard
                    icon={features[5].icon}
                    title={features[5].title}
                    description={formatDescription(features[5].description)}
                    className="mt-5 hover:animate-scale-pop"
                  />
                  <div className="mt-5">
                    <FeatureCard
                      icon={features[6].icon}
                      title={features[6].title}
                      description={formatDescription(features[6].description)}
                      className="hover:animate-scale-pop"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTestimonials; 