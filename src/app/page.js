'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SpotlightCard from '../components/SpotlightCard/SpotlightCard';
import ScrollTimeline from '../components/ScrollTimeline';
import CountUpNumber from '../components/CountUpNumber';
import FadeInCard from '../components/FadeInCard';
import SequentialProcessItem from '../components/SequentialProcessItem';
import MetalicLogo from '../components/MetalicLogo';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    // Check on mount
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <>
      <div className="hero" id="home">
        <div className="neuro-background"></div>
        <div className="hero-gradient-bg"></div>
        <div className="hero-left">
          <h1 className="visually-hidden">SynapseX - Georgia Tech Brain-Computer Interface Innovation</h1>
          <Image 
            src={isMobile ? "/synapseatgtmobile.png" : "/synapseatgt.png"} 
            alt="SynapseX logo" 
            className="hero-logo" 
            width={256} 
            height={64} 
          />
          <div className="description">Pioneering student-led brain-computer interface innovation.</div>
          <div className="cta">
            <Link href="#projects" className="label primary">Explore Our Research</Link>
            <Link href="#contact" className="label">Get Involved</Link>
          </div>
        </div>
        <div className="hero-right">
          <Image src="/neuro-human-blue.jpg" alt="Brain-computer interface visualization showing neural connections and human silhouette in blue tones" className="neuro-human" width={800} height={800} />
        </div>
      </div>

      {/* Quick Facts Section */}
      <div className="quick-facts-section">
        <div className="quick-facts-grid">
          <div className="quick-fact-item">
            <div className="quick-fact-number">
              <CountUpNumber end={50} start={30} suffix="+" duration={2500} />
            </div>
            <div className="quick-fact-label">Active Members</div>
          </div>
          <div className="quick-fact-item">
            <div className="quick-fact-number">
              <CountUpNumber end={3} start={1} duration={2000} />
            </div>
            <div className="quick-fact-label">Research Projects</div>
          </div>
          <div className="quick-fact-item">
            <div className="quick-fact-number">
              <CountUpNumber end={2024} start={2004} duration={3000} />
            </div>
            <div className="quick-fact-label">Founded</div>
          </div>
          <div className="quick-fact-item">
            <div className="quick-fact-number">
              <CountUpNumber end={100} start={80} suffix="%" duration={2000} />
            </div>
            <div className="quick-fact-label">Student Led</div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="about-content" id="about">
        <div className="about-section">
          <div className="gradient-cards">
            <FadeInCard direction="left" delay={0}>
              <SpotlightCard className="about-us">
                <h2>Who We Are</h2>
                <p>Founded in 2024, SynapseX is a Registered Student Organization at Georgia Tech. Our members work in interdisciplinary teams, research, signal processing, device engineering, and software development, to deliver working BCI prototypes.</p>
              </SpotlightCard>
            </FadeInCard>
            <FadeInCard direction="right" delay={200}>
              <SpotlightCard className="our-mission">
                <h2>Our Mission</h2>
                <p>SynapseX exists to push the boundaries of neurotechnology while creating a pipeline for student learning and discovery. We aim to train the next generation of innovators by tackling projects that merge brain science with advanced computing.</p>
              </SpotlightCard>
            </FadeInCard>
          </div>
        </div>
       
        {/* Process Section */}
        <div className="about-section">
          <div className="process-container">
            <div className="about-section-content">
              <div className="about-text">
                <h2>Our Process</h2>
                <p>From neural signals to binary code, our interdisciplinary approach ensures that every project benefits from diverse perspectives and expertise.</p>
              </div>
            </div>
              <div className="process">
                <div className="process-flow">
                  <SequentialProcessItem index={0} delay={300}>
                    <div className="flow-image">
                      <Image src="/flow-neuro.jpg" alt="Neural signal processing visualization showing brain wave patterns and neural network connections" className="flow-img" width={500} height={310} />
                    </div>
                  </SequentialProcessItem>
                  <SequentialProcessItem index={1} delay={300}>
                    <div className="process-card">
                      <div className="card-title">Neural Signal Processing</div>
                      <div className="card-description">Decoding brain activity into structured electrical patterns.</div>
                    </div>
                  </SequentialProcessItem>
                  <SequentialProcessItem index={2} delay={300}>
                    <div className="process-card">
                      <div className="card-title">Device Engineering</div>
                      <div className="card-description">Hardware that captures, filters, and stabilizes the neural data.</div>
                    </div>
                  </SequentialProcessItem>
                  <SequentialProcessItem index={3} delay={300}>
                    <div className="process-card">
                      <div className="card-title">Software Development</div>
                      <div className="card-description">Algorithms that convert the processed patterns into binary code.</div>
                    </div>
                  </SequentialProcessItem>
                  <SequentialProcessItem index={4} delay={300}>
                    <div className="flow-image">
                      <Image src="/flow-binary.jpg" alt="Software development visualization showing binary code and digital processing for brain-computer interfaces" className="flow-img" width={500} height={310} />
                    </div>
                  </SequentialProcessItem>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Projects Timeline Section */}
      <div id="projects">
        <ScrollTimeline />
      </div>

      {/* Sponsor Section */}
      <div className="sponsor-section" id="sponsor">
        <div className="sponsor-container">
          <div className="sponsor-content">
            <h2>Support Our Mission</h2>
            <p>SynapseX is entirely student-run and currently funded by Georgia Tech&apos;s Student Government Association and Georgia Tech Student Foundation. With external support, we can accelerate progress on advanced BCI systems, expand training opportunities, and share open-source tools with the wider community.</p>
            <div className="sponsor-buttons">
              <a href="#" className="sponsor-btn primary">Sponsorship Package</a>
              <a href="#" className="sponsor-btn secondary">Donate Now</a>
            </div>
          </div>
        </div>
      </div>

    <div className="contact-section" id="contact">
      <div className="contact-layout">
        {/* Left side - Metallic Logo */}
        <div className="metallic-logo-container">
          <MetalicLogo />
        </div>
        
        {/* Right side - Contact Information */}
        <div className="contact-info-container">
          <div className="contact-content">
            <div className="contact-header">
              <h2>Contact Us</h2>
              <p className="location">Georgia Institute of Technology, Atlanta, GA, 30332</p>
            </div>
            
            <div className="contact-details">
              <h3>Get In Touch</h3>
              <p>Email: synapsex@gmail.com</p>
            </div>
            
            <div className="social-media">
              <h3>Connect</h3>
              <div className="social-icons">
                <a href="https://www.instagram.com/gtsynapsx/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/synapse-x-at-georgia-tech/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://gatech.campuslabs.com/engage/organization/synapsex" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GT Engage">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </a>
                <a href="https://join.slack.com/t/synapsex/shared_invite/zt-3fd99f8gk-_7ih4UUP36s~z4gyFmgyYA" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Slack">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="copyright">
              <p>© SynapseX 2025. All Rights Reserved</p>
              <p>Website made by Sandro Karkusashvili :)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
      );
  }
