import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="neuro-background"></div>
        <div className="hero-gradient-bg"></div>
        <div className="hero-left">
          <Image src="/synapseatgt.png" alt="SynapseX logo" className="hero-logo" width={256} height={64} />
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

      <div className="quick-facts">
        <div className="quick-facts-content">
          <div className="fact-item">
            <div className="fact-label">Active Members</div>
            <div className="fact-number">50+</div>
          </div>
          <div className="fact-item">
            <div className="fact-label">Research Projects</div>
            <div className="fact-number">3</div>
          </div>
          <div className="fact-item">
            <div className="fact-label">Founded</div>
            <div className="fact-number">2024</div>
          </div>
          <div className="fact-item">
            <div className="fact-label">Student Led</div>
            <div className="fact-number">100%</div>
          </div>
        </div>
      </div>

      {/* Simple sections: Who We Are then Our Mission */}
      <div className="about-us-short">
        <div className="about-us-short-left">
          <div className="about-us-short-title">Who We Are</div>
          <div className="about-us-short-description">We are Georgia Tech's first student-run BCI organization, uniting students from <span className="gradient-text">Neuroscience, Computer Science, Biomedical Engineering, Electrical Engineering, and beyond</span> to build real prototypes, publish tutorials, and shape the future of neurotechnology.</div>
        </div>
        <div className="about-us-short-right">
          <Image src="/we-neurons-blue.png" alt="We Neurons" className="we-neurons-image" width={600} height={400} />
        </div>
      </div>





      <div className="our-mission-short">
        <div className="mission-short-left">
          <Image src="/cs-engineering-neurology.jpg" alt="CS, Engineering, Neurology" className="mission-short-image" width={600} height={400} />
        </div>
        <div className="mission-short-right">
          <div className="mission-short-title">Our Mission</div>
          <div className="mission-short-description">We integrate neuroscience, engineering, and computer science to design brain-computer interfaces that unlock new forms of human machine interaction.</div>
        </div>
      </div>

      {/* Extended About Content */}
      <div className="about-content" id="about">
        <div className="about-section">
          <div className="gradient-cards">
            <div className="gradient-card">
              <h2>Who We Are</h2>
              <p>Founded in 2024, SynapseX is a Registered Student Organization at Georgia Tech. Our members work in interdisciplinary teams, research, signal processing, device engineering, and software development, to deliver working BCI prototypes.</p>
            </div>
            <div className="gradient-card">
              <h2>Our Mission</h2>
              <p>SynapseX exists to push the boundaries of neurotechnology while creating a pipeline for student learning and discovery. We aim to train the next generation of innovators by tackling projects that merge brain science with advanced computing.</p>
            </div>
          </div>
        </div>

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
    </>
  );
}
