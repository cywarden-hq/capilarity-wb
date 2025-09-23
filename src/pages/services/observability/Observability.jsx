import React from 'react';
import Prism from './Prism';
import Services from './features/Services';
import Analytics from './features/Analytics';
import FeaturedContent from './features/FeaturedContent';
import Reveal from '../../../components/Reveal';
import NextGen from './features/NextGen';

const Observability = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <div className="h-[500px] lg:h-screen bg-black relative overflow-hidden z-10">
        {/* Background Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <Reveal animation="slideUp" duration="fast" delay={100}>
            <h1 className="text-[50px] lg:text-[100px] xl:text-[180px] text-white select-none leading-none">
              OBSERVABILITY
            </h1>
          </Reveal>
        </div>

        <div className="z-20" style={{ width: '100%', height: '100%', position: 'relative' }}>
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

      <NextGen />
      <Services />
      <Analytics />
      {/* <FeaturedContent /> */}
    </div>
  );
};

export default Observability;