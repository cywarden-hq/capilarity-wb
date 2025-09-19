import React from "react";

const WhyChooseUs = () => {
  const services = [
    {
      title: "Enhanced Cyber Protection",
      description:
        "Stay secure with advanced defense against evolving cyber threats, safeguarding your most critical systems and data.",
      img: "/icons/Icon1.svg",
    },
    {
      title: "Cost-Efficient Security Insights",
      description:
        "Achieve complete visibility into your IT security posture, without over spending on infrastructure or tools.",
      img: "/icons/Icon2.svg",
    },
    {
      title: "Automated Threat Response",
      description:
        "Neutralize risks instantly with intelligent automation that detects and eliminates threats in real time.",
      img: "/icons/Icon3.svg",
    },
    {
      title: "Simplified Compliance & Audits",
      description:
        "Easily meet industry regulations and audit requirements with streamlined processes and expert support.",
      img: "/icons/Icon4.svg",
    },
    {
      title: "Proactive Monitoring & Analytics",
      description:
        "Leverage continuous monitoring and advanced analytics to detect issues early—before they impact your business.",
      img: "/icons/Icon5.svg",
    },
  ];

  return (
    <section className="bg-[#EDF6FF] w-full min-h-screen flex flex-col items-center px-8 py-20">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-center mb-16">
        Why Choose Our services?
      </h1>

      {/* Grid for Cards */}
      <div className="max-w-6xl w-full flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 w-[300px] text-center flex flex-col items-center hover:shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:scale-102 transition duration-200"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-20 h-20 object-cover rounded-full mb-6"
            />
            <h3 className="text-lg font-bold mb-3">{service.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
