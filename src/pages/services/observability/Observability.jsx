import React from 'react';
import Prism from './Prism';
import Services from './features/Services';
import Analytics from './features/Analytics';
import FeaturedContent from './features/FeaturedContent';
import Reveal from '../../../components/Reveal';

const Observability = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-black relative overflow-hidden z-10">
        {/* Background Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <Reveal animation="slideUp" duration="fast" delay={100}>
            <h1 className="text-[50px] lg:text-[100px] xl:text-[180px] text-white select-none leading-none">
              OBSERVABILITY
            </h1>
          </Reveal>
        </div>

        <div className="z-20" style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0}
            glow={1}
          />
        </div>
      </div>

      {/* Three Cards Section */}
      <section className="bg-orange-50 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Reveal animation="slideUp" duration="normal" delay={100}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-700 mb-4">
                Capilarity NextGen Observability: From Metrics to Business Impact
              </h2>
            </Reveal>
            <Reveal animation="slideUp" duration="normal" delay={200}>
              <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto">
                Insights, case studies, and thought leadership to accelerate your cloud journey
              </p>
            </Reveal>
          </div>

          {/* Three Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
            {/* Card 1: Technical Foundation */}
            <Reveal animation="slideUp" duration="normal" delay={300}>
              <div className="group bg-white rounded-xl p-8 relative overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer h-[250px]">
                {/* Background Number */}
                <div className="absolute -bottom-4 right-2 text-[120px] font-black text-gray-200/30 select-none pointer-events-none">
                  01
                </div>

                {/* Main Content */}
                <div className="relative z-10 transition-transform duration-500 ease-out group-hover:-translate-x-full">
                  <h3 className="text-3xl font-bold text-orange-500 mb-4 mt-2">
                    Technical <br /> Foundation
                  </h3>
                  <p className="text-gray-600 leading-relaxed pr-8">
                    Real-time observability powered by AI to detect, resolve, and optimize faster.
                  </p>
                </div>

                {/* Side Reveal Content */}
                <div className="absolute inset-0 bg-orange-500 rounded-xl p-8 flex flex-col justify-center transform translate-x-[95%] transition-transform duration-1000 ease-out group-hover:translate-x-0">
                  <p className="text-white leading-relaxed text-lg">
                    NextGen Observability gives you real-time insights powered by AIOps and ML, helping you detect issues early, understand why they happen, and resolve them quickly to keep systems performing at their best.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Operational Agility */}
            <Reveal animation="slideUp" duration="normal" delay={400}>
              <div className="group bg-white rounded-xl p-8 relative overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer h-[250px]">
                {/* Background Number */}
                <div className="absolute -bottom-4 right-2 text-[120px] font-black text-gray-200/30 select-none pointer-events-none">
                  02
                </div>

                {/* Main Content */}
                <div className="relative z-10 transition-transform duration-500 ease-out group-hover:-translate-x-full">
                  <h3 className="text-3xl font-bold text-orange-500 mb-4 mt-2">
                    Operational <br /> Agility
                  </h3>
                  <p className="text-gray-600 leading-relaxed pr-8">
                    Agile observability that explains system behavior and drives proactive action on the metrics that matter most.
                  </p>
                </div>

                {/* Side Reveal Content */}
                <div className="absolute inset-0 bg-orange-500 rounded-xl p-8 flex flex-col justify-center transform translate-x-[95%] transition-transform duration-1000 ease-out group-hover:translate-x-0">
                  <p className="text-white leading-relaxed text-lg">
                    We take an agile approach to observability going beyond metrics and dashboards to explain why systems behave the way they do, while setting proactive alerts on the key performance metrics that matter most to your business.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Business Alignment */}
            <Reveal animation="slideUp" duration="normal" delay={500}>
              <div className="group bg-white rounded-xl p-8 relative overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer h-[250px]">
                {/* Background Number */}
                <div className="absolute -bottom-4 right-2 text-[120px] font-black text-gray-200/30 select-none pointer-events-none">
                  03
                </div>

                {/* Main Content */}
                <div className="relative z-10 transition-transform duration-500 ease-out group-hover:-translate-x-full">
                  <h3 className="text-3xl font-bold text-orange-500 mb-4 mt-2">
                    Business <br /> Alignment
                  </h3>
                  <p className="text-gray-600 leading-relaxed pr-8">
                    Observability mapped to business impact from revenue at risk to SLA breaches and churn signals.
                  </p>
                </div>

                {/* Side Reveal Content */}
                <div className="absolute inset-0 bg-orange-500 rounded-xl p-8 flex flex-col justify-center transform translate-x-[95%] transition-transform duration-1000 ease-out group-hover:translate-x-0">
                  <p className="text-white leading-relaxed text-lg">
                    We map observability directly to business outcomes: revenue at risk, SLA breaches, churn signals. Executives don't care about CPU spikes—they care about customers, contracts, and dollars. That's the level we operate on.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <Services />
      <Analytics />
      <FeaturedContent />
    </>
  );
};

export default Observability;