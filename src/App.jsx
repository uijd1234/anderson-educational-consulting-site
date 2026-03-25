import React from "react";

const services = [
  {
    title: "Student Discipline Advocacy",
    text: "Guidance for suspensions, expulsions, manifestation issues, and hearing preparation.",
  },
  {
    title: "Title IX Support",
    text: "Consultation on Title IX processes, rights, responsibilities, and procedural fairness.",
  },
  {
    title: "School Division Consulting",
    text: "Support for discipline systems, investigations, compliance, and administrative practice.",
  },
  {
    title: "Policy & Process Review",
    text: "Recommendations to strengthen clarity, consistency, and equitable decision-making.",
  },
];

const strengths = [
  "Balanced perspective across families and schools",
  "High-stakes educational matters handled with care",
  "Focus on clarity, consistency, and sound process",
  "Professional presentation that inspires trust",
];

export default function App() {
  return (
    <div className="site-shell">
      <section className="hero-section">
        <div className="page-wrap hero-grid">
          <div>
            <div className="eyebrow-badge">
              Anderson Educational Consulting LLC
            </div>

            <h1 className="hero-title">
              Student Discipline &amp; Title IX Advisory for Families and
              Schools
            </h1>

            <p className="hero-text">
              Clear, experienced guidance in high-stakes educational matters,
              grounded in fairness, due process, and sound practice.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Request a Consultation
              </a>
              <a href="#services" className="btn btn-secondary">
                Explore Services
              </a>
            </div>

            <div className="tag-row">
              <span className="tag">Family Advocacy</span>
              <span className="tag">Title IX Advisory</span>
              <span className="tag">Discipline Hearings</span>
              <span className="tag">School Advisory</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-header">
              <img
                src="/logo-anderson-educational-consulting.png"
                alt="Anderson Educational Consulting logo"
                className="hero-logo"
              />
              <div>
                <h2 className="hero-card-title">
                  Anderson Educational Consulting
                </h2>
                <p className="hero-card-subtitle">
                  Balanced guidance for families and school systems
                </p>
              </div>
            </div>

            <div className="hero-card-grid">
              <div className="mini-card">
                <h3>For Families</h3>
                <p>
                  Support navigating student discipline, Title IX concerns,
                  hearing preparation, and due process questions.
                </p>
              </div>

              <div className="mini-card mini-card-accent">
                <h3>For Schools</h3>
                <p>
                  Guidance on investigations, compliance, administrative
                  decision-making, and equitable discipline practices.
                </p>
              </div>

              <div className="mini-card mini-card-wide">
                <h3>Core Strengths</h3>
                <p>
                  Student discipline • Title IX processes • Hearings •
                  Investigations • Policy guidance • Administrative consulting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="page-wrap">
          <div className="section-intro center">
            <p className="section-label">Services</p>
            <h2>Practical support for the moments that matter most</h2>
            <p className="section-copy">
              Anderson Educational Consulting serves both families and school
              systems with a balanced, experienced perspective.
            </p>
          </div>

          <div className="services-grid">
            {services.map((item) => (
              <div key={item.title} className="service-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="page-wrap why-grid">
          <div>
            <p className="section-label section-label-light">
              Why Work With Me
            </p>
            <h2 className="light-heading">
              Experience, fairness, and calm guidance in complex situations
            </h2>
            <p className="dark-copy">
              Families need support they can trust. School systems need guidance
              they can stand behind. This practice is built around fairness, due
              process, clear communication, and respect for every student
              involved.
            </p>
          </div>

          <div className="strength-grid">
            {strengths.map((point) => (
              <div key={point} className="strength-card">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="page-wrap about-grid">
          <div>
            <p className="section-label">About</p>
            <h2>Trusted support rooted in educational experience</h2>
            <p className="section-copy">
              Most families do not realize how high the stakes are in student
              discipline and Title IX cases until they are in the middle of one.
              Anderson Educational Consulting was created to provide informed,
              steady guidance for families while also helping school divisions
              strengthen fair and defensible practices.
            </p>
            <p className="section-copy">
              The goal is simple: help families feel supported and informed, and
              help schools operate with integrity, consistency, and care.
            </p>
          </div>

          <div className="focus-card">
            <h3>Areas of Focus</h3>
            <ul>
              <li>Student Discipline: suspension, expulsion, and hearing support</li>
              <li>Title IX investigations and processes</li>
              <li>Family advocacy and case support</li>
              <li>School division consulting and administrative guidance</li>
              <li>Policy, compliance, and equitable decision-making</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="page-wrap contact-wrap">
          <p className="section-label">Contact</p>
          <h2>Ready to talk through your situation?</h2>
          <p className="section-copy contact-copy">
            Whether you are a family facing a difficult educational matter or a
            school leader seeking experienced guidance, Anderson Educational
            Consulting is available to help.
          </p>

          <div className="hero-actions contact-actions">
            <a
              href="mailto:jd@andersoneducationalconsulting.com"
              className="btn btn-primary"
            >
              Email J. D. Anderson
            </a>
            <a href="tel:7034707239" className="btn btn-secondary">
              Call 703-470-7239
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
