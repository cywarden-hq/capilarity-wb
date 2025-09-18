import React from "react";
import ellipse9 from "/images/soc/hero_bg_bottom.svg";
import ellipse1 from "/images/soc/hero_bg1.svg";
import ellipse2 from "/images/soc/hero_bg2.svg";
import line8 from "/images/soc/line-8.svg";
import line9 from "/images/soc/line-9.svg";

export default function Hero() {
  return (
    <main className="w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[1000px] overflow-hidden">
      <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[851px]">
        {/* Background decorative ellipse - hidden on mobile, visible on larger screens */}
        <img
          className="absolute w-full h-[150px] lg:h-[484px] top-[400px] lg:top-[500px]"
          alt="Background decorative ellipse"
          src={ellipse9}
          role="presentation"
        />
        
        {/* Background top image - responsive sizing */}
        <img
          className="absolute w-full h-full inset-0 z-10 object-cover"
          src="/images/soc/hero_bg_top.svg"
          alt="Background decorative top"
          role="presentation"
        />

        <header className="absolute w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[790px] top-0 left-0 bg-black">
          <h1
            className="absolute w-full top-[150px] lg:top-[100px] left-[20px] sm:top-[50px] sm:left-[30px] md:top-[60px] md:left-[50px] lg:top-[87px] lg:left-[125px] text-transparent text-[40px] sm:text-[60px] md:text-[80px] lg:text-[120px] xl:text-[150px] leading-tight px-4 sm:px-6 md:px-8 lg:px-0"
          >
            <span className="text-[#ff9900]">Security <br /> </span>
            <span className="text-white">Operation <br /> Center</span>
          </h1>

          {/* Decorative lines - hidden on mobile, visible on larger screens */}
          <img
            className="w-2.5 h-[124px] top-[100px] absolute left-[62px] hidden lg:block"
            alt="Vertical decorative line"
            src={line8}
            role="presentation"
          />
          <img
            className="w-[153px] h-2.5 top-[100px] absolute left-[62px] hidden lg:block"
            alt="Horizontal decorative line"
            src={line9}
            role="presentation"
          />
        </header>

        {/* Side decorative ellipses - responsive sizing and positioning */}
        <img
          className="absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[631px] lg:h-[751px] top-0 right-0 opacity-40 sm:opacity-60 lg:opacity-100"
          alt="Side decorative ellipse"
          src={ellipse1}
          role="presentation"
        />

        <img
          className="absolute w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px] lg:w-[1023px] lg:h-[1023px] right-0 sm:right-0 md:right-0 lg:left-[928px] top-[20px] sm:top-[30px] md:top-[50px] lg:top-[94px] opacity-30 sm:opacity-40 md:opacity-60 lg:opacity-100"
          alt="Side decorative ellipse"
          src={ellipse2}
          role="presentation"
        />
        
      </section>
    </main>
  );
};
