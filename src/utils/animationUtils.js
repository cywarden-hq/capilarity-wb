// Animation type mappings
export const ANIMATION_TYPES = {
  fadeIn: 'fadeIn',
  slideUp: 'slideUp',
  slideLeft: 'slideLeft',
  slideRight: 'slideRight',
  scaleUp: 'scaleUp'
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

// Animation presets (matching shadcn smoothness)
export const ANIMATION_PRESETS = {
  fast: 600,
  normal: 1000,
  slow: 1400
};

// Easing curves (matching shadcn)
export const EASING_CURVES = {
  smooth: [0.25, 0.4, 0.25, 1], // shadcn standard
  elegant: [0.23, 0.86, 0.39, 0.96], // shadcn elegant
  gentle: [0.4, 0, 0.2, 1], // material design
  easeOut: [0, 0, 0.2, 1]
};
