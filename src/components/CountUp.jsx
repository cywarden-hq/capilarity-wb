import React from 'react';
import { useCountUp } from '../hooks/useCountUp';

const CountUp = ({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '', 
  className = '',
  startOnView = true 
}) => {
  const { count, elementRef } = useCountUp(end, duration, startOnView);

  return (
    <span ref={elementRef} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default CountUp;
