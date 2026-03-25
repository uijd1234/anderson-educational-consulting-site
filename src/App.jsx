export default function App() {
  const styles = {
    page: {
      margin: 0,
      fontFamily: "Arial, Helvetica, sans-serif",
      background: "#f8fafc",
      color: "#0f172a",
      minHeight: "100vh",
    },
    hero: {
      background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 45%, #fef3c7 100%)",
      padding: "80px 24px",
    },
    wrap: {
      maxWidth: "1150px",
      margin: "0 auto",
    },
    heroGrid: {
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "40px",
      alignItems: "center",
    },
    badge: {
      display: "inline-block",
      border: "1px solid #fcd34d",
      borderRadius: "999px",
      background: "#fff",
      padding: "10px 16px",
      fontSize: "14px",
      fontWeight: 600,
      color: "#475569",
    },
    h1: {
      fontSize: "52px",
      lineHeight: 1.08,
      margin: "18px 0 0",
    },
    heroText: {
      fontSize: "20px",
      lineHeight: 1.7,
      color: "#475569",
      marginTop: "22px",
      maxWidth: "700px",
    },
    actions: {
      display: "flex",
      flexWrap: "wrap",
      gap: "14px",
      marginTop: "28px",
    },
    btnDark: {
      display: "inline-block",
      background: "#0f172a",
      color: "#fff",
      padding: "14px 22px",
      borderRadius: "14px",
      textDecoration: "none",
      fontWeight: 700,
    },
    btnLight: {
      display: "inline-block",
      background: "#fff",
      color: "#0f172a",
      padding: "14px 22px",
      borderRadius: "14px",
      textDecoration: "none",
      fontWeight: 700,
      border: "1px solid #cbd5e1",
    },
    pills: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginTop: "24px",
    },
    pill: {
      background: "#fff",
      border: "1px solid #e2e8f0",
      borderRadius: "999px",
      padding: "10px 14px",
      fontSize: "14px",
      color: "#475569",
    },
    card: {
      background: "#fff",
      border: "1px solid #e2e8f0",
      borderRadius: "28px",
      padding: "28px",
      boxShadow: "0 16px 40px rgba(15,23,42,0.12)",
    },
    logo: {
      width: "82px",
      height: "82px",
      objectFit: "contain",
      border: "1px solid #e2e8f0",
      borderRadius: "18px",
      padding: "8px",
      background: "#fff",
    },
    cardHeader: {
      display: "flex",
      gap: "16px",
      alignItems: "center",
      marginBottom: "22px",
    },
    cardGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "14px",
    },
    miniCard: {
      background: "#f8fafc",
      borderRadius: "18px",
      padding: "18px",
    },
    miniAccent: {
      background: "#fef3c7",
      borderRadius: "18px",
      padding: "18px",
    },
    wide: {
      gridColumn: "1 / -1",
      background: "#f8fafc",
      borderRadius: "18px",
      padding: "18px",
    },
    section: {
      padding: "84px 24px",
    },
    centerIntro: {
      textAlign: "center",
      maxWidth: "800px",
      margin: "0 auto 38px",
    },
    label: {
      fontSize: "13px",
      fontWeight: 800,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "#b45309",
      marginBottom: "12px",
    },
    h2: {
      fontSize: "40px",
      lineHeight: 1.15,
      margin: 0,
    },
    copy: {
      fontSize: "18px",
      lineHeight: 1.8,
      color: "#475569",
      marginTop: "16px",
    },
    services: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "22px",
    },
    serviceCard: {
      background: "#fff",
      border: "1px solid #e2e8f0",
      borderRadius: "28px",
      padding: "24px",
      boxShadow: "0 8px 22px rgba(15,23,42,0.06)",
    },
    darkSection: {
      background: "#0f172a",
      color: "#fff",
      padding: "84px 24px",
    },
    whyGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "36px",
      alignItems: "start",
    },
    darkCopy: {
      color: "#cbd5e1",
      fontSize: "18px",
      lineHeight: 1.8,
      marginTop: "18px",
    },
    strengths: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "14px",
    },
    strengthCard: {
      border: "1px solid rgba(255,255,255,0.12)",
      background: "rgba(255,255,255,0.06)",
      color: "#f8fafc",
      borderRadius: "18px",
      padding: "20px",
      lineHeight: 1.6,
    },
    aboutGrid: {
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "40px",
      alignItems: "start",
    },
    focusCard: {
      background: "#f8fafc",
      border: "1px solid #e2e8f0",
      borderRadius: "28px",
      padding: "28px",
      boxShadow: "0 8px 22px rgba(15,23,42,0.05)",
    },
    contact: {
      background: "linear-gradient(90deg, #fef3c7 0%, #f8fafc 100%)",
      padding: "84px 24px",
      textAlign: "center",
    },
    contactWrap: {
      maxWidth: "900px",
      margin: "0 auto",
    },
  };

  const services = [
    ["Student Discipline Advocacy", "Guidance for suspensions, expulsions, manifestation issues, and hearing preparation."],
    ["Title IX Support", "Consultation on Title IX processes, rights, responsibilities, and procedural fairness."],
    ["School Division Consulting", "Support for discipline systems, investigations, compliance, and administrative practice."],
    ["Policy & Process Review", "Recommendations to strengthen clarity, consistency, and equitable decision-making."],
  ];

  const strengths = [
    "Balanced perspective across families and schools",
    "High-stakes educational matters handled with care",
    "Focus on clarity, consistency, and sound process",
    "Professional presentation that inspires trust",
  ];

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.wrap}>
          <div style={styles.heroGrid}>
            <div>
              <div style={styles.badge}>Anderson Educational Consulting LLC</div>
              <h1 style={styles.h1}>Student Discipline &amp; Title IX Advisory for Families and Schools</h1>
              <p style={styles.heroText}>
                Clear, experienced guidance in high-stakes educational matters,
                grounded in fairness, due process, and sound practice.
              </p>

              <div style={styles.actions}>
                <a href="#contact" style={styles.btnDark}>Request a Consultation</a>
                <a href="#services" style={styles.btnLight}>Explore Services</a>
              </div>

              <div style={styles.pills}>
                <span style={styles.pill}>Family Advocacy</span>
                <span style={styles.pill}>Title IX Advisory</span>
                <span style={styles.pill}>Discipline Hearings</span>
                <span style={styles.pill}>School Advisory</span>
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <img
                  src="/logo-anderson-educational-consulting.png"
                  alt="Anderson Educational Consulting logo"
                  style={styles.logo}
                />
                <div>
                  <h2 style={{ margin: 0, fontSize: "28px" }}>Anderson Educational Consulting</h2>
                  <p style={{ margin: "8px 0 0", color: "#b45309", fontWeight: 600 }}>
                    Balanced guidance for families and school systems
                  </p>
                </div>
              </div>

              <div style={styles.cardGrid}>
                <div style={styles.miniCard}>
                  <h3>For Families</h3>
                  <p>Support navigating student discipline, Title IX concerns, hearing preparation, and due process questions.</p>
                </div>
                <div style={styles.miniAccent}>
                  <h3>For Schools</h3>
                  <p>Guidance on investigations, compliance, administrative decision-making, and equitable discipline practices.</p>
                </div>
                <div style={styles.wide}>
                  <h3>Core Strengths</h3>
                  <p>Student discipline • Title IX processes • Hearings • Investigations • Policy guidance • Administrative consulting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section} id="services">
        <div style={styles.wrap}>
          <div style={styles.centerIntro}>
            <p style={styles.label}>Services</p>
            <h2 style={styles.h2}>Practical support for the moments that matter most</h2>
            <p style={styles.copy}>
              Anderson Educational Consulting serves both families and school systems with a balanced, experienced perspective.
            </p>
          </div>

          <div style={styles.services}>
            {services.map(([title, text]) => (
              <div key={title} style={styles.serviceCard}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.darkSection}>
        <div style={{ ...styles.wrap, ...styles.whyGrid }}>
          <div>
            <p style={{ ...styles.label, color: "#fcd34d" }}>Why Work With Me</p>
            <h2 style={{ ...styles.h2, color: "#fff" }}>
              Experience, fairness, and calm guidance in complex situations
            </h2>
            <p style={styles.darkCopy}>
              Families need support they can trust. School systems need guidance they can stand behind.
              This practice is built around fairness, due process, clear communication, and respect for every student involved.
            </p>
          </div>

          <div style={styles.strengths}>
            {strengths.map((item) => (
              <div key={item} style={styles.strengthCard}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section} id="about">
        <div style={{ ...styles.wrap, ...styles.aboutGrid }}>
          <div>
            <p style={styles.label}>About</p>
            <h2 style={styles.h2}>Trusted support rooted in educational experience</h2>
            <p style={styles.copy}>
              Most families do not realize how high the stakes are in student discipline and Title IX cases until they are in the middle of one.
              Anderson Educational Consulting was created to provide informed, steady guidance for families while also helping school divisions strengthen fair and defensible practices.
            </p>
            <p style={styles.copy}>
              The goal is simple: help families feel supported and informed, and help schools operate with integrity, consistency, and care.
            </p>
          </div>

          <div style={styles.focusCard}>
            <h3>Areas of Focus</h3>
            <ul style={{ lineHeight: 1.9 }}>
              <li>Student Discipline: suspension, expulsion, and hearing support</li>
              <li>Title IX investigations and processes</li>
              <li>Family advocacy and case support</li>
              <li>School division consulting and administrative guidance</li>
              <li>Policy, compliance, and equitable decision-making</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={styles.contact} id="contact">
        <div style={styles.contactWrap}>
          <p style={styles.label}>Contact</p>
          <h2 style={styles.h2}>Ready to talk through your situation?</h2>
          <p style={styles.copy}>
            Whether you are a family facing a difficult educational matter or a school leader seeking experienced guidance,
            Anderson Educational Consulting is available to help.
          </p>

          <div style={{ ...styles.actions, justifyContent: "center" }}>
            <a href="mailto:jd@andersoneducationalconsulting.com" style={styles.btnDark}>
              Email J. D. Anderson
            </a>
            <a href="tel:7034707239" style={styles.btnLight}>
              Call 703-470-7239
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
