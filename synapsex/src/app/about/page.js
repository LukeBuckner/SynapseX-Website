import Image from "next/image";

export const metadata = { title: "About - SynapseX" };

export default function AboutPage() {
  return (
    <div className="about-content">
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

      <div className="about-section">
        <div className="about-section-content">
          <div className="about-text">
            <h2>Our Impact</h2>
            <p>Since our founding, SynapseX has made significant strides in advancing student-led neurotechnology research and education. Our impact extends beyond our immediate community, influencing the broader landscape of accessible BCI development.</p>
            <div className="impact-stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Active Members</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Active Research Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Student Led</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2024</div>
                <div className="stat-label">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


