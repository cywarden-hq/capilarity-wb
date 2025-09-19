import React from 'react';

// The list of points to be displayed in the scrolling banner
const servicePoints = [
  "Comprehensive 24x7 cybersecurity monitoring program",
  "Automated Solutions for security threats prediction, detection, and response: Advanced Managed Detection and Response Solutions (MDR)",
  "Global expertise in managed SOC/NOC (Security/Network Operations Center) services and solutions",
  "Comprehensive, end-to-end security and dedicated DevSecOps portfolio",
];

const ScrollingBanner = () => {
  return (
    // The main container that creates the "viewport" for the scroller.
    // 'overflow-hidden' is essential to hide the parts of the list that are off-screen.
    // 'group' is added to allow child elements to react to hover on this parent.
    <div className="w-full bg-white overflow-hidden">
      <div className="pt-12 pb-24">
        {/* 
          This is the container that will be animated.
          - 'flex' arranges all items in a single horizontal line.
          - 'w-max' makes the container's width expand to fit all its children.
          - 'animate-scroll' applies our custom looping animation.
          - 'group-hover:paused' is a Tailwind utility that pauses the animation
            when the user hovers over the parent container.
        */}
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          
          {/* 
            CRITICAL STEP FOR SEAMLESS LOOP:
            We render the list of service points TWICE.
            The map function runs over a new array that contains the original items followed by the original items again.
            This ensures that when the first set scrolls out of view, the second set is ready to scroll in,
            preventing any blank space.
          */}
          {[...servicePoints, ...servicePoints].map((point, index) => (
            <div
              key={index}
              className={`
                flex-shrink-0 w-96 h-52 mx-5 p-8 rounded-lg shadow-md
                flex items-center justify-center text-center
                ${index % 2 === 0 ? 'bg-blue-100' : 'bg-orange-100'}
              `}
            >
              <p className="text-xl font-semibold text-gray-800">
                {point}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;