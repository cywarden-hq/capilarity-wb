import React from 'react';
import Prism from './Prism';

const Observability = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-black relative overflow-hidden pt-[114px]">
        {/* Background Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <h1 className="text-[50px] lg:text-[100px] xl:text-[200px] text-white select-none leading-none">
            OBSERVABILITY
          </h1>
        </div>

        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0.5}
            glow={1}
          />
        </div>
      </div>

      {/* Three Cards Section */}
      <section className="bg-[#F6FAFF] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Capilarity NextGen Observability: From Metrics to Business Impact
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              Insights, case studies, and thought leadership to accelerate your cloud journey
            </p>
          </div>

          {/* Three Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1: Technical Foundation */}
            <div className="group bg-white rounded-xl p-8 relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out cursor-pointer">
              {/* Background Number */}
              <div className="absolute -bottom-4 -right-4 text-[120px] font-black text-gray-200/30 select-none pointer-events-none">
                01
              </div>
              
              <h3 className="text-2xl font-bold text-orange-500 mb-4 relative z-10">
                Technical Foundation
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Real-time observability powered by AI to detect, resolve, and optimize faster.
              </p>
            </div>

            {/* Card 2: Operational Agility */}
            <div className="group bg-white rounded-xl p-8 relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out cursor-pointer">
              {/* Background Number */}
              <div className="absolute -bottom-4 -right-4 text-[120px] font-black text-gray-200/30 select-none pointer-events-none">
                02
              </div>
              
              <h3 className="text-2xl font-bold text-orange-500 mb-4 relative z-10">
                Operational Agility
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Agile observability that explains system behavior and drives proactive action on the metrics that matter most.
              </p>
            </div>

            {/* Card 3: Business Alignment */}
            <div className="group bg-white rounded-xl p-8 relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out cursor-pointer">
              {/* Background Number */}
              <div className="absolute -bottom-4 -right-4 text-[120px] font-black text-gray-200/30 select-none pointer-events-none">
                03
              </div>
              
              <h3 className="text-2xl font-bold text-orange-500 mb-4 relative z-10">
                Business Alignment
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Observability mapped to business impact from revenue at risk to SLA breaches and churn signals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Observability;