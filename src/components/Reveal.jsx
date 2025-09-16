import React from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { getAnimationClasses, ANIMATION_PRESETS, EASING_CURVES } from '../utils/animationUtils';

const Reveal = ({ 
  children, 
  animation = 'fadeIn', 
  delay = 0, 
  duration = 'normal',
  easing = 'smooth',
  className = '',
  ...props 
}) => {
  const { isVisible, ref } = useRevealOnScroll();

  const animationClasses = getAnimationClasses(animation, isVisible);
  
  // Handle duration - can be a number or preset name
  const getDuration = (duration) => {
    if (typeof duration === 'number') {
      return duration;
    }
    return ANIMATION_PRESETS[duration] || ANIMATION_PRESETS.normal;
  };

  // Handle easing - can be a string or custom cubic-bezier
  const getEasing = (easing) => {
    if (typeof easing === 'string') {
      const curve = EASING_CURVES[easing] || EASING_CURVES.smooth;
      return `cubic-bezier(${curve.join(', ')})`;
    }
    return easing;
  };
  
  const style = {
    transitionDuration: `${getDuration(duration)}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: getEasing(easing)
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-in-out ${animationClasses} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default Reveal;
