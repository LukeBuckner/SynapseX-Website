import Image from "next/image";
import Link from "next/link";
import SpotlightCard from '../components/SpotlightCard/SpotlightCard';
import ScrollTimeline from '../components/ScrollTimeline';
import CountUpNumber from '../components/CountUpNumber';
import FadeInCard from '../components/FadeInCard';
import SequentialProcessItem from '../components/SequentialProcessItem';

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="neuro-background"></div>
        <div className="hero-gradient-bg"></div>
        <div className="hero-left">
          <Image src="/synapseatgt2copy.png" alt="SynapseX logo" className="hero-logo" width={256} height={64} />
          <div className="description">Pioneering student-led brain-computer interface innovation.</div>
          <div className="cta">
            <Link href="#about" className="label">Learn More</Link>
            <div className="label">Join Us</div>
          </div>
        </div>
        <div className="hero-right">
          <Image src="/neuro-human-blue.jpg" alt="Neural Interface Visualization" className="neuro-human" width={800} height={800} />
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
                      <Image src="/flow-neuro.jpg" alt="Neural Flow" className="flow-img" width={500} height={310} />
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
                      <Image src="/flow-binary.jpg" alt="Binary Flow" className="flow-img" width={500} height={310} />
                    </div>
                  </SequentialProcessItem>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Projects Timeline Section */}
      <ScrollTimeline />

      {/* Sponsor Section */}
      <div className="sponsor-section">
        <div className="sponsor-container">
          <div className="sponsor-content">
            <h2>Support Our Mission</h2>
            <p>SynapseX is entirely student-run and currently funded by Georgia Tech's Student Government Association and Georgia Tech Student Foundation. With external support, we can accelerate progress on advanced BCI systems, expand training opportunities, and share open-source tools with the wider community.</p>
            <div className="sponsor-buttons">
              <a href="#" className="sponsor-btn primary">Sponsorship Package</a>
              <button className="sponsor-btn secondary">Donate Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
