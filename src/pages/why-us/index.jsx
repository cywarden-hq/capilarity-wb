import React from "react";
import WhoWeAre from "./WhoWeAre";
import WhyChooseUs from "./WhyChooseUs";
import WhyCapilarity from "./WhyCapilarity";
import ScrollingBanner from "./ScrollingBanner";

const WhyUs = () => {
  return (
    <main className="bg-white overflow-hidden w-full min-w-[1440px] min-h-[800px] relative">
      <header className="relative w-full h-screen bg-[#04102B] flex items-center justify-center">
        <img
          src="/images/why-us/hero_bg.svg"
          alt="Background image for why us section"
          className="absolute top-0 left-0 w-full h-full aspect-[1.43] object-cover"
        />
        <h1 className="text-[#FBB040] text-9xl text-center font-semibold">Why Us</h1>

        {/* Top Left Section */}
        {/* <div className="absolute top-[15%] left-[10%] w-[200px] h-[200px] bg-[#3A97AE] rounded-xl shadow-lg transform rotate-6 flex items-center justify-center">
          <img
            src="/images/why-us/InnerTopLeft.svg"
            alt="Top Left"
            className="w-[90%] h-[90%] object-contain"
          />
        </div> */}

        {/* Top Right Section */}
        {/* <div className="absolute top-[15%] right-[10%] w-[200px] h-[200px] bg-[#ACC7E6] rounded-xl shadow-lg transform -rotate-6 flex items-center justify-center">
          <img
            src="/images/why-us/InnerTopRight.svg"
            alt="Top Right"
            className="w-[90%] h-[90%] object-contain"
          />
        </div> */}

        {/* Bottom Left Section */}
        {/* <div className="absolute bottom-[10%] left-[10%] w-[200px] h-[200px] bg-[#EAF5FF] rounded-xl shadow-lg transform -rotate-6 flex items-center justify-center">
          <img
            src="/images/why-us/InnerBottomLeft.svg"
            alt="Bottom Left"
            className="w-[90%] h-[90%] object-contain"
          />
        </div> */}

        {/* Bottom Right Section */}
        {/* <div className="absolute bottom-[10%] right-[10%] w-[200px] h-[200px] bg-white rounded-xl shadow-lg transform rotate-6 flex items-center justify-center">
          <img
            src="/images/why-us/InnerBottomRight.svg"
            alt="Bottom Right"
            className="w-[90%] h-[90%] object-contain"
          />
        </div> */}
      </header>
      <WhoWeAre />
      <WhyChooseUs />
      <WhyCapilarity />
      <ScrollingBanner />
    </main>
  );
};

export default WhyUs;
