import React from "react";
import Orb from './Orb';
import CountUp from '../../../components/CountUp';

export default function AboutUs() {
  return (
    <div className="z-20 min-h-screen bg-gray-900 py-16 px-4 lg:px-8 z-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Headline */}
        <div className="text-center mb-10 lg:mb-15">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-white leading-tight max-w-4xl mx-auto">
            We are cloud-native builders, <br />engineers, & problem-solvers
          </h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col xl:flex-row items-center justify-center gap-12 lg:gap-16 xl:gap-24">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            {/* Left Column */}
            <div className="flex flex-col gap-8 lg:gap-16">
              {/* 95% Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 w-64 h-45 flex flex-col justify-center hover:shadow-2xl hover:animate-float-y duration-300 ease-out">
                <div className="text-5xl lg:text-6xl font-bold text-orange-500 mb-5">
                  <CountUp end={95} suffix="%" duration={2000} />
                </div>
                <div className="text-gray-500 text-base leading-relaxed">
                  <div>Faster</div>
                  <div>Deployments</div>
                </div>
              </div>

              {/* 40% Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 w-64 h-40 flex flex-col justify-center hover:shadow-2xl hover:animate-float-y duration-300 ease-out">
                <div className="text-5xl lg:text-6xl font-bold text-orange-500 mb-5">
                  <CountUp end={32} suffix="%" duration={2000} />
                </div>
                <div className="text-gray-500 text-base leading-relaxed">
                  Cost Reduction
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-8 lg:gap-16">
              {/* 500+ Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 w-64 h-45 flex flex-col justify-center hover:shadow-2xl hover:animate-float-y duration-300 ease-out">
                <div className="text-5xl lg:text-6xl font-bold text-orange-500 mb-5">
                  <CountUp end={12} suffix="+" duration={2000} />
                </div>
                <div className="text-gray-500 text-base leading-relaxed">
                  <div>Successful cloud</div>
                  <div>transformations</div>
                </div>
              </div>

              {/* 24/7 Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 w-64 h-40 flex flex-col justify-center hover:shadow-2xl hover:animate-float-y duration-300 ease-out">
                <div className="text-5xl lg:text-6xl font-bold text-orange-500 mb-5">
                  24/7
                </div>
                <div className="text-gray-500 text-base leading-relaxed">
                  <div>Enterprise</div>
                  <div>support coverage</div>
                </div>
              </div>
            </div>
          </div>

          <div className="z-10 sm:w-[40%] sm:h-[400px] lg:w-[40%] lg:h-[500px]">
            <Orb
              hoverIntensity={0.6}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
