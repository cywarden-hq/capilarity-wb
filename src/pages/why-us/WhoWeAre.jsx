import React from "react";

const WhoWeAre = () => {
  return (
    <section className="bg-white w-full min-h-screen flex flex-col items-center justify-center px-8 py-20">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-center mb-16">Who we are</h1>

      {/* Content Section */}
      <div className="max-w-6xl w-full space-y-14">
        {/* First Text Block */}
        <div className="relative px-10 py-6 bg-[#fbfbfb] rounded-lg">
          <span className="absolute left-0 top-0 bottom-0 border-l-4 border-orange-500 rounded-bl-lg rounded-tl-lg"></span>
          <p className="text-lg text-gray-800 leading-relaxed">
            Since 2006, Capilarity has partnered with global enterprises,
            including Fortune 500 leaders, to architect, secure, and manage
            digital systems that power modern business.
          </p>
        </div>

        {/* Second Text Block (No Orange Lines) */}
        <div className="relative px-10 py-6 bg-[#fbfbfb] rounded-lg">
          <p className="text-lg text-gray-800 leading-relaxed">
            Leveraging Agile and DevOps frameworks, we deliver solutions—from
            cloud deployments and zero-trust security to large-scale AI
            projects—with unmatched reliability, scalability, and efficiency.
          </p>
          <span className="absolute right-0 top-0 bottom-0 border-r-4 border-orange-500 rounded-br-lg rounded-tr-lg"></span>
        </div>

        {/* Third Text Block */}
        <div className="relative px-10 py-6 bg-[#fbfbfb] rounded-lg">
          <span className="absolute left-0 top-0 bottom-0 border-l-4 border-orange-500 rounded-bl-lg rounded-tl-lg"></span>
          <p className="text-lg text-gray-800 leading-relaxed">
            As an extension of your team, we enable resilient operations,
            interconnected systems, and accelerated innovation that drive
            measurable business impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
