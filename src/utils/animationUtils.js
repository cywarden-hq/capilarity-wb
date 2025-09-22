// Animation type mappings
export const ANIMATION_TYPES = {
  fadeIn: 'fadeIn',
  slideUp: 'slideUp',
  slideLeft: 'slideLeft',
  slideRight: 'slideRight',
  scaleUp: 'scaleUp',
  fadeIn: 'fadeIn',
};

// Animation class configurations
const ANIMATION_CLASSES = {
  fadeIn: {
    hidden: 'opacity-0',
    visible: 'opacity-100'
  },
  slideUp: {
    hidden: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0'
  },
  slideLeft: {
    hidden: 'opacity-0 translate-x-8',
    visible: 'opacity-100 translate-x-0'
  },
  slideRight: {
    hidden: 'opacity-0 -translate-x-8',
    visible: 'opacity-100 translate-x-0'
  },
  scaleUp: {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100'
  }
};

// Get animation classes based on type and visibility
export const getAnimationClasses = (animationType, isVisible) => {
  const classes = ANIMATION_CLASSES[animationType] || ANIMATION_CLASSES.fadeIn;
  return isVisible ? classes.visible : classes.hidden;
};

// Calculate staggered delay
export const getStaggerDelay = (index, baseDelay = 100) => {
  return index * baseDelay;
};

// Animation presets (optimized for faster loading)
export const ANIMATION_PRESETS = {
  fast: 300,
  normal: 500,
  slow: 800
};

// Easing curves (optimized for smooth animations)
export const EASING_CURVES = {
  smooth: [0.25, 0.4, 0.25, 1], // shadcn standard - smooth and natural
  elegant: [0.23, 0.86, 0.39, 0.96], // shadcn elegant - bouncy but refined
  gentle: [0.4, 0, 0.2, 1], // material design - gentle ease-out
  easeOut: [0, 0, 0.2, 1], // standard ease-out
  spring: [0.175, 0.885, 0.32, 1.275], // spring-like bounce
  smoothOut: [0.25, 0.46, 0.45, 0.94], // very smooth ease-out
  smoothIn: [0.55, 0.055, 0.675, 0.19], // smooth ease-in
  bounce: [0.68, -0.55, 0.265, 1.55] // subtle bounce effect
};
