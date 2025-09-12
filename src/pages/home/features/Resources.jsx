import React, { useState } from "react";
import Reveal from "../../../components/Reveal";

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const resources = {
    All: [
      {
        id: 1,
        type: "Solution Brief",
        title: "AI in DevOps – Accelerating Incident Response with Agentic AI",
        description: "Learn how AI agents can transform your incident response workflows",
        category: "AI Development",
        icon: "document"
      },
      {
        id: 2,
        type: "Case Study",
        title: "Reducing $1.6M Monitoring Costs with Cloud-Native Observability",
        description: "How we helped a Fortune 500 company optimize their observability stack",
        category: "Observability",
        icon: "chart"
      },
      {
        id: 3,
        type: "Blog",
        title: "The Future of DevSecOps in Regulated Industries",
        description: "Security-first approaches to cloud transformation in healthcare and finance",
        category: "DevSecOps",
        icon: "play"
      },
      {
        id: 4,
        type: "Solution Brief",
        title: "Advanced Monitoring Strategies for Microservices",
        description: "Best practices for observability in distributed systems",
        category: "Observability",
        icon: "document"
      },
      {
        id: 5,
        type: "Case Study",
        title: "Building Enterprise AI Workflows at Scale",
        description: "How we implemented AI-driven automation for a global enterprise",
        category: "AI Development",
        icon: "chart"
      },
      {
        id: 6,
        type: "Blog",
        title: "Zero-Trust Security Implementation Guide",
        description: "Step-by-step approach to implementing zero-trust architecture",
        category: "Security",
        icon: "play"
      }
    ],
    Observability: [
      {
        id: 1,
        type: "Case Study",
        title: "Reducing $1.6M Monitoring Costs with Cloud-Native Observability",
        description: "How we helped a Fortune 500 company optimize their observability stack",
        category: "Observability",
        icon: "chart"
      },
      {
        id: 4,
        type: "Solution Brief",
        title: "Advanced Monitoring Strategies for Microservices",
        description: "Best practices for observability in distributed systems",
        category: "Observability",
        icon: "document"
      },
      {
        id: 7,
        type: "Blog",
        title: "Real-time Alerting with OpenTelemetry",
        description: "Implementing intelligent alerting systems for modern applications",
        category: "Observability",
        icon: "play"
      }
    ],
    "AI Development": [
      {
        id: 1,
        type: "Solution Brief",
        title: "AI in DevOps – Accelerating Incident Response with Agentic AI",
        description: "Learn how AI agents can transform your incident response workflows",
        category: "AI Development",
        icon: "document"
      },
      {
        id: 5,
        type: "Case Study",
        title: "Building Enterprise AI Workflows at Scale",
        description: "How we implemented AI-driven automation for a global enterprise",
        category: "AI Development",
        icon: "chart"
      },
      {
        id: 8,
        type: "Blog",
        title: "Machine Learning Model Deployment Patterns",
        description: "Production-ready strategies for ML model deployment and monitoring",
        category: "AI Development",
        icon: "play"
      }
    ],
    DevOps: [
      {
        id: 9,
        type: "Solution Brief",
        title: "CI/CD Pipeline Optimization for Enterprise Teams",
        description: "Streamline your development workflow with advanced pipeline strategies",
        category: "DevOps",
        icon: "document"
      },
      {
        id: 10,
        type: "Case Study",
        title: "Achieving 99.9% Uptime with Infrastructure as Code",
        description: "How we helped a startup scale their infrastructure reliably",
        category: "DevOps",
        icon: "chart"
      },
      {
        id: 11,
        type: "Blog",
        title: "Container Orchestration Best Practices",
        description: "Master Kubernetes deployment patterns for production environments",
        category: "DevOps",
        icon: "play"
      }
    ],
    Security: [
      {
        id: 6,
        type: "Blog",
        title: "Zero-Trust Security Implementation Guide",
        description: "Step-by-step approach to implementing zero-trust architecture",
        category: "Security",
        icon: "play"
      },
      {
        id: 12,
        type: "Solution Brief",
        title: "Automated Security Scanning in CI/CD",
        description: "Integrate security checks seamlessly into your development pipeline",
        category: "Security",
        icon: "document"
      },
      {
        id: 13,
        type: "Case Study",
        title: "SOC 2 Compliance Automation Success Story",
        description: "How we automated compliance processes for a healthcare startup",
        category: "Security",
        icon: "chart"
      }
    ]
  };

  const getIcon = (iconType) => {
    switch (iconType) {
      case "document":
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4999 1.66675H4.99992C4.55789 1.66675 4.13397 1.84234 3.82141 2.1549C3.50885 2.46746 3.33325 2.89139 3.33325 3.33341V16.6667C3.33325 17.1088 3.50885 17.5327 3.82141 17.8453C4.13397 18.1578 4.55789 18.3334 4.99992 18.3334H14.9999C15.4419 18.3334 15.8659 18.1578 16.1784 17.8453C16.491 17.5327 16.6666 17.1088 16.6666 16.6667V5.83341L12.4999 1.66675Z" stroke="#FE8032" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.6667 1.66675V5.00008C11.6667 5.44211 11.8423 5.86603 12.1549 6.17859C12.4675 6.49115 12.8914 6.66675 13.3334 6.66675H16.6667" stroke="#FE8032" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.33341 7.5H6.66675" stroke="#FE8032" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.3334 10.8333H6.66675" stroke="#FE8032" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.3334 14.1667H6.66675" stroke="#FE8032" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "chart":
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 5.83325V17.4999" stroke="#FE8032" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.49984 15C2.27882 15 2.06686 14.9122 1.91058 14.7559C1.7543 14.5996 1.6665 14.3877 1.6665 14.1667V3.33333C1.6665 3.11232 1.7543 2.90036 1.91058 2.74408C2.06686 2.5878 2.27882 2.5 2.49984 2.5H6.6665C7.55056 2.5 8.39841 2.85119 9.02353 3.47631C9.64865 4.10143 9.99984 4.94928 9.99984 5.83333C9.99984 4.94928 10.351 4.10143 10.9761 3.47631C11.6013 2.85119 12.4491 2.5 13.3332 2.5H17.4998C17.7209 2.5 17.9328 2.5878 18.0891 2.74408C18.2454 2.90036 18.3332 3.11232 18.3332 3.33333V14.1667C18.3332 14.3877 18.2454 14.5996 18.0891 14.7559C17.9328 14.9122 17.7209 15 17.4998 15H12.4998C11.8368 15 11.2009 15.2634 10.7321 15.7322C10.2632 16.2011 9.99984 16.837 9.99984 17.5C9.99984 16.837 9.73645 16.2011 9.2676 15.7322C8.79876 15.2634 8.16288 15 7.49984 15H2.49984Z" stroke="#FE8032" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "play":
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3335 10.8334L17.686 13.7351C17.7487 13.7768 17.8216 13.8008 17.8969 13.8044C17.9722 13.808 18.0471 13.7911 18.1135 13.7555C18.1799 13.7199 18.2355 13.667 18.2742 13.6024C18.313 13.5377 18.3335 13.4638 18.3335 13.3884V6.55839C18.3335 6.48508 18.3142 6.41306 18.2775 6.3496C18.2408 6.28614 18.188 6.23349 18.1244 6.19697C18.0608 6.16045 17.9887 6.14136 17.9154 6.1416C17.8421 6.14185 17.7702 6.16144 17.7068 6.19839L13.3335 8.75006" stroke="#FE8032" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.6665 5H3.33317C2.4127 5 1.6665 5.74619 1.6665 6.66667V13.3333C1.6665 14.2538 2.4127 15 3.33317 15H11.6665C12.587 15 13.3332 14.2538 13.3332 13.3333V6.66667C13.3332 5.74619 12.587 5 11.6665 5Z" stroke="#FE8032" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#1A284E]">
      <div className="px-6 lg:px-[95px] max-w-[1442px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Reveal animation="slideUp" duration="normal" delay={400}>
            <h2 className="text-white font-open-sans text-4xl lg:text-[48px] font-semibold leading-[48px] mb-6">
              Resources
            </h2>
          </Reveal>
          <Reveal animation="slideUp" duration="normal" delay={600}>
            <p className="font-open-sans text-lg lg:text-[19px] text-[#A5BCDC] leading-7 max-w-[693px] mx-auto mb-8">
              Insights, case studies, and thought leadership to accelerate your cloud journey
            </p>
          </Reveal>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {["All", "Observability", "AI Development", "DevOps", "Security"].map((filter) => (
              <Reveal animation="slideRight" duration="normal" delay={800}>
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`font-open-sans text-[14px] font-normal rounded-[10px] shadow-[0_2px_8px_-2px_rgba(49,130,237,0.10)] transition-all duration-300 ease-out hover:scale-105 ${activeFilter === filter
                    ? "text-white"
                    : "bg-white border border-[#E2E8F0] text-[#1F2937] hover:bg-orange-50 hover:border-orange-200"
                    }`}
                  style={{
                    ...(activeFilter === filter ? { backgroundColor: "#FE8032" } : {}),
                    padding: "8px 16px",
                  }}
                >
                  {filter}
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-[52px]" >
          {resources[activeFilter].map((resource) => (
            <Reveal animation="slideLeft" duration="normal" delay={1000}>
              <div
                key={resource.id}
                className="group bg-white border border-[#E2E8F0] rounded-xl shadow-[0_2px_8px_-2px_rgba(49,130,237,0.10)] h-[267px] flex flex-col hover:shadow-[0_8px_25px_-5px_rgba(49,130,237,0.15)] hover:scale-[1.02] hover:border-orange-200 transition-all duration-300 ease-out cursor-pointer p-[25px]">

                <div className="flex items-center gap-3 mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300 ease-out">
                    {getIcon(resource.icon)}
                  </div>
                  <span className="text-[#FE8032] font-open-sans text-[13px] font-normal group-hover:text-orange-600 transition-colors duration-300">
                    {resource.type}
                  </span>
                </div>

                <h3 className="text-[#1F2937] font-open-sans text-[20px] font-bold leading-[25px] mb-4 flex-grow group-hover:text-orange-600 transition-colors duration-300">
                  {resource.title}
                </h3>

                <p className="text-[#64748B] font-open-sans text-[15px] font-normal leading-[26px] mb-6 group-hover:text-gray-600 transition-colors duration-300">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between border-t border-[#E2E8F0] group-hover:border-orange-200 transition-colors duration-300 pt-[14px]">
                  <div className="flex items-center justify-center rounded-full px-2 py-1 bg-[#F1F5F9] border border-orange-500 group-hover:bg-orange-500 transition-colors duration-300">
                    <span className="text-orange-500 font-open-sans text-[11px] font-normal group-hover:text-white transition-colors duration-300">
                      {resource.category}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Explore All Resources Button */}
        <div className="text-center">
          <button
            onClick={() => setActiveFilter("All")}
            className="border border-3 border-orange-500 group bg-white border border-[#E2E8F0] text-[#1F2937] font-open-sans text-[13px] font-normal rounded-[10px] shadow-[0_2px_8px_-2px_rgba(49,130,237,0.10)] hover:bg-orange-500 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 ease-out" style={{ padding: '16px 32px' }}
          >
            <span className="font-semibold text-sm group-hover:text-white transition-colors duration-300">
              Explore All Resources
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
