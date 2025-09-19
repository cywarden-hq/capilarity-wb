// import React from 'react';

// const WhyCapilarity = () => {
//   return (
//     <section className="bg-white font-sans">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-12 px-6">
//         {/* Text Content */}
//         <div className="md:w-1/2 md:pr-10 lg:pr-16">
//           <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
//             Why Capilarity?
//           </h1>
//           <p className="text-lg text-gray-700 leading-relaxed mb-5">
//             At Capilarity, We Believe That Growth Happens When Vision Meets Execution.
//             Behind Every Thriving Business Is A Team With Bold Ideas, Relentless Drive, And
//             The Right Partners To Help Them Scale.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed mb-5">
//             From Emerging Startups To Established Enterprises, We Work With Organizations
//             That Dare To Think Bigger. Our Role Is Simple Yet Powerful: To Equip You With The
//             Strategies, Systems, And Support That Unlock New Opportunities And Accelerate
//             Sustainable Growth.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed mb-5">
//             Our Mission Is To Help Businesses Expand Their Reach, Strengthen Their
//             Foundations, And Rise To New Heights In Today’s Competitive World.
//             Our Vision Is To Become The Catalyst That Transforms Ambition Into Impact,
//             Empowering Companies To Not Just Succeed, But To Lead.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             With Capilarity As Your Partner, You Gain More Than A Service Provider, You Gain
//             A Partner Committed To Your Growth And Long-Term Success.
//           </p>
//         </div>
        
//         {/* Image Content */}
//         <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
//           {/* Dummy image address as requested */}
//           <img 
//             src="/images/why-us/WhyCap.svg" 
//             alt="Two speech bubbles with question marks" 
//             className="max-w-sm lg:max-w-md h-auto"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyCapilarity;
import React from 'react';

const WhyCapilarity = () => {
  return (
    <section className="bg-white font-sans py-16 px-6 md:py-24 md:pb-12">
      <div className="container mx-auto max-w-screen-xl">
        {/* Centered Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Why Capilarity?
        </h1>

        {/* Flex Container for Text and Image */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-12">
          
          {/* Text Container */}
          <div className="lg:w-3/5">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              At Capilarity, We Believe That Growth Happens When Vision Meets Execution.
              Behind Every Thriving Business Is A Team With Bold Ideas, Relentless Drive, And
              The Right Partners To Help Them Scale.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              From Emerging Startups To Established Enterprises, We Work With Organizations
              That Dare To Think Bigger. Our Role Is Simple Yet Powerful: To Equip You With The
              Strategies, Systems, And Support That Unlock New Opportunities And Accelerate
              Sustainable Growth.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Our Mission Is To Help Businesses Expand Their Reach, Strengthen Their
              Foundations, And Rise To New Heights In Today’s Competitive World.
              Our Vision Is To Become The Catalyst That Transforms Ambition Into Impact,
              Empowering Companies To Not Just Succeed, But To Lead.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              With Capilarity As Your Partner, You Gain More Than A Service Provider, You Gain
              A Partner Committed To Your Growth And Long-Term Success.
            </p>
          </div>

          {/* Image Container */}
          <div className="lg:w-2/5 mt-12 lg:mt-0 flex justify-center">
            {/* Dummy image address as requested */}
            <img
              src="/images/why-us/WhyCap.svg"
              alt="Two speech bubbles with question marks"
              className="max-w-xs md:max-w-sm h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCapilarity;