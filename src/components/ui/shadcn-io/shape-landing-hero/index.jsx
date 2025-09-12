"use client";;
import { motion } from "framer-motion";
import React from 'react';
import { Link } from "react-router";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function getAnimationProps(animationType) {
  switch (animationType) {
    case "float":
      return {
        y: [0, -30, 30, 0],
        x: [0, 15, -15, 0],
        rotate: [0, 8, -8, 0],
      };
    case "sway":
      return {
        y: [0, -20, 20, 0],
        x: [0, 25, -25, 0],
        rotate: [0, 12, -12, 0],
      };
    case "bounce":
      return {
        y: [0, -35, 35, 0],
        x: [0, 5, -5, 0],
        rotate: [0, 3, -3, 0],
      };
    case "drift":
      return {
        y: [0, -15, 15, 0],
        x: [0, 20, -20, 0],
        rotate: [0, 6, -6, 0],
      };
    default:
      return {
        y: [0, -25, 25, 0],
        x: [0, 10, -10, 0],
        rotate: [0, 5, -5, 0],
      };
  }
}

function getAnimationDuration(animationType) {
  switch (animationType) {
    case "float":
      return 6;
    case "sway":
      return 10;
    case "bounce":
      return 5;
    case "drift":
      return 8;
    default:
      return 8;
  }
}

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  animationType = "default"
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}>
      <motion.div
        animate={getAnimationProps(animationType)}
        transition={{
          duration: getAnimationDuration(animationType),
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative">
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )} />
      </motion.div>
    </motion.div>
  );
}

export function HeroGeometric({
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
  description = "Crafting exceptional digital experiences through innovative design and cutting-edge technology.",
  className
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <>
      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        .animate-gradient-shift {
          animation: gradient-shift 8s ease-in-out infinite;
        }
      `}</style>
      <div
        className={cn(
          "relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]",
          className
        )}>
        <div
          className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
        <div className="absolute inset-0 overflow-hidden">
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            gradient="from-indigo-500/[0.15]"
            animationType="float"
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />

          <ElegantShape
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            gradient="from-rose-500/[0.15]"
            animationType="sway"
            className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />

          <ElegantShape
            delay={0.4}
            width={300}
            height={80}
            rotate={-8}
            gradient="from-violet-500/[0.15]"
            animationType="bounce"
            className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" />

          <ElegantShape
            delay={0.6}
            width={200}
            height={60}
            rotate={20}
            gradient="from-amber-500/[0.15]"
            animationType="drift"
            className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />

          <ElegantShape
            delay={0.7}
            width={150}
            height={40}
            rotate={-25}
            gradient="from-cyan-500/[0.15]"
            animationType="float"
            className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center pt-20">

            <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
              <h1
                className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  {title1}
                </span>
                <br />
                <span
                  className={cn(
                    "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300",
                    "bg-[length:200%_100%] animate-gradient-shift"
                  )}>
                  {title2}
                </span>
              </h1>
            </motion.div>

            <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
              <p
                className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                {description}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
              <div className="flex flex-col sm:flex-row sm:gap-6 gap-4 justify-center items-center max-w-md mx-auto">
                <Link
                  to="/get-in-touch"
                  className="flex group items-center justify-center px-8 py-[8px] bg-orange-500 hover:bg-orange-400 rounded-full hover:scale-105 border-2 border-orange-500 hover:border-orange-400 transition-all duration-300 ease-out">
                  <span className="text-white text-base font-bold leading-[150%] transition-colors duration-300">
                    Get Started
                  </span>
                </Link>

                <button 
                  onClick={() => {
                    const element = document.getElementById('our-services');
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                  className="group flex items-center justify-center px-8 py-[8px] border-2 border-orange-500 bg-transparent rounded-full hover:border-orange-400 hover:scale-105 transition-all duration-300 ease-out">
                  <span className="text-white font-inter text-base font-medium leading-[150%] group-hover:text-orange-400 transition-colors duration-300">
                    See Our Work
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
      </div>
    </>
  );
}
