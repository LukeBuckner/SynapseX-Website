import Image from "next/image";
import Link from "next/link";
import SpotlightCard from '../components/SpotlightCard/SpotlightCard';

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
          
          {/* Quick Facts moved here */}
          <div className="hero-quick-facts">
            <div className="hero-fact-item">
              <div className="hero-fact-label">Active Members</div>
              <div className="hero-fact-number">50+</div>
            </div>
            <div className="hero-fact-item">
              <div className="hero-fact-label">Research Projects</div>
              <div className="hero-fact-number">3</div>
            </div>
            <div className="hero-fact-item">
              <div className="hero-fact-label">Founded</div>
              <div className="hero-fact-number">2024</div>
            </div>
            <div className="hero-fact-item">
              <div className="hero-fact-label">Student Led</div>
              <div className="hero-fact-number">100%</div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <Image src="/neuro-human-blue.jpg" alt="Neural Interface Visualization" className="neuro-human" width={800} height={800} />
        </div>
      </div>

      {/* About Content */}
      <div className="about-content" id="about">
        <div className="about-section">
          <div className="gradient-cards">
            <SpotlightCard className="about-us">
              <h2>Who We Are</h2>
              <p>Founded in 2024, SynapseX is a Registered Student Organization at Georgia Tech. Our members work in interdisciplinary teams, research, signal processing, device engineering, and software development, to deliver working BCI prototypes.</p>
            </SpotlightCard>
            <SpotlightCard className="our-mission">
              <h2>Our Mission</h2>
              <p>SynapseX exists to push the boundaries of neurotechnology while creating a pipeline for student learning and discovery. We aim to train the next generation of innovators by tackling projects that merge brain science with advanced computing.</p>
            </SpotlightCard>
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
                <div className="flow-image">
                  <Image src="/flow-neuro.jpg" alt="Neural Flow" className="flow-img" width={500} height={310} />
                </div>
                <div className="process-card">
                  <div className="card-title">Neural Signal Processing</div>
                  <div className="card-description">Decoding brain activity into structured electrical patterns.</div>
                </div>
                <div className="process-card">
                  <div className="card-title">Device Engineering</div>
                  <div className="card-description">Hardware that captures, filters, and stabilizes the neural data.</div>
                </div>
                <div className="process-card">
                  <div className="card-title">Software Development</div>
                  <div className="card-description">Algorithms that convert the processed patterns into binary code.</div>
                </div>
                <div className="flow-image">
                  <Image src="/flow-binary.jpg" alt="Binary Flow" className="flow-img" width={500} height={310} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-section">
          <h2>Our Projects</h2>
          <p>Our projects are a testament to our interdisciplinary approach and our commitment to pushing the boundaries of neurotechnology.</p>
        </div>
    </>
  );
}
