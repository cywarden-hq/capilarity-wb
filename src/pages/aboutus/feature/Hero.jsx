import React from "react";
import image from "/images/aboutus/image.svg";
import image2 from "/images/aboutus/image2.svg";
import unsplash from "/images/aboutus/unsplash.svg";
import unsplash2 from "/images/aboutus/unsplash2.svg";

export default function Hero() {
  return (
    <main className="relative w-full h-screen bg-[#04102b]">
      <img
        className="absolute top-[315px] left-0 w-[238px] h-[410px]"
        alt="Team collaboration workspace"
        src={unsplash}
      />
      <img
        className="absolute top-[125px] left-[268px] w-[265px] h-[410px]"
        alt="Professional team meeting"
        src={unsplash2}
      />
      <div className="absolute top-[150px] left-[576px] w-[855px] h-[451px] flex gap-[17px]">
        <div className="mt-[1.6px] w-[537.51px] h-[449.46px] relative">
          <img
            className="absolute top-0 left-0 w-[538px] h-[449px] aspect-[1.48] rounded-3xl object-cover"
            alt="Business team collaboration"
            src={image}
          />
          <div className="bg-[#04102b] rounded-tr-xl absolute bottom-0 left-0 w-1/2 h-1/2" />
        </div>
        <img
          className="w-[300.28px] h-[450.53px] object-cover"
          alt="Office environment"
          src={image2}
        />
      </div>
      <section className="absolute top-[259px] left-[94px] w-[470px] h-[178px] flex items-center bg-[#04102b] overflow-hidden">
        <h1 className="flex items-center justify-center mt-px h-[199px] ml-5 w-[479px] [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-[#fbb040] text-[100px] tracking-[0] leading-[90px]">
          About Us
        </h1>
      </section>
    </main>
  );
};
