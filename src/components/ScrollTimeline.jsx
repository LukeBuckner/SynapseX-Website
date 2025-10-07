"use client"

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

const ScrollTimeline = ({ 
  items = [
    {
      id: '1',
      title: 'EEG Cursor Control Prototype',
      description: 'Fall 2025 - By December 15',
      date: 'Fall 2025',
      content: 'We are developing a baseline motor imagery (MI) + SSVEP cursor control demo using the OpenBCI Cyton (8-channel) and Ultracortex Mark IV. The goal is to achieve >70% selection accuracy and sub-2s response latency.'
    },
    {
      id: '2',
      title: '16-Channel Upgrade & Benchmarking',
      description: 'By the middle of October',
      date: 'October 2025',
      content: 'We will add the Daisy module, expanding to 16-channel coverage. This enables richer signal processing, improved motor imagery classification, and higher-precision control tasks (e.g., pixel-level cursor accuracy).'
    },
    {
      id: '3',
      title: 'Assistive Typing Prototype',
      description: 'Spring 2026',
      date: 'Spring 2026',
      content: 'We aim to adapt cursor control into a typing interface for accessibility applications. The project will combine EEG signal classification, real-time feedback, and a user-friendly React dashboard.'
    },
    {
      id: '4',
      title: 'Multimodal BCI Systems',
      description: 'Future Directions',
      date: 'Future',
      content: 'Beyond cursor control, SynapseX plans to explore hybrid EEG paradigms, brain-to-text interfaces, neuro-adaptive computing frameworks, and enable the think and let the computer do everything for you concept.'
    }
  ]
}) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (latest) => {
      const index = Math.min(
        Math.floor(latest * items.length),
        items.length - 1
      );
      setActiveIndex(index);
    });

    return () => unsubscribe();
  }, [smoothProgress, items.length]);

  return (
    <div className="timeline-section">
      <div className="timeline-container">
        <div className="timeline-header">
          <h2>Our Project Roadmap</h2>
        </div>

        <div ref={containerRef} className="timeline-wrapper">
          {/* Timeline Line */}
          <div className="timeline-line" />
          
          {/* Animated Fill Line */}
          <motion.div
            className="timeline-progress"
            style={{
              scaleY: smoothProgress,
              transformOrigin: 'top'
            }}
          />

          {/* Timeline Items */}
          <div className="timeline-items">
            {items.map((item, index) => {
              const isActive = index <= activeIndex;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="timeline-item"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="timeline-dot"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {isActive ? (
                      <CheckCircle2 className="timeline-icon-active" />
                    ) : (
                      <Circle className="timeline-icon-inactive" />
                    )}
                  </motion.div>

                  {/* Content Card */}
                  <div className={`timeline-card ${isActive ? 'timeline-card-active' : ''}`}>
                    <div className="timeline-card-header">
                      <h3 className={`timeline-title ${isActive ? 'timeline-title-active' : ''}`}>
                        {item.title}
                      </h3>
                      <span className="timeline-date">
                        {item.date}
                      </span>
                    </div>
                    
                    {item.content && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={isActive ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="timeline-content-expand"
                      >
                        <div className="timeline-content-detail">
                          <p className="timeline-content-text">
                            {item.content}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Spacer */}
        <div className="timeline-spacer" />
      </div>
    </div>
  );
};

export default ScrollTimeline;
