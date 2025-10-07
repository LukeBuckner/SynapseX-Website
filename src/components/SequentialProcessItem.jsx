'use client';

import { useState, useEffect, useRef } from 'react';

const SequentialProcessItem = ({ children, index, delay = 200, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          // Calculate delay based on index to create sequential effect
          const totalDelay = delay * index;
          setTimeout(() => {
            setIsVisible(true);
          }, totalDelay);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -100px 0px' // Start animation before fully visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible, delay, index]);

  return (
    <div 
      ref={elementRef} 
      className={`process-item ${isVisible ? 'process-item-visible' : 'process-item-hidden'} ${className}`}
    >
      {children}
    </div>
  );
};

export default SequentialProcessItem;
