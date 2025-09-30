import React from "react";
import solanaImg from "../assets/solana.png"; // put Solana logo in /src/assets

const Features = () => {
  const stats = [
    {
      title: "Nigerian Naira Inflation Rate",
      value: "22.41%",
      desc: "Annual inflation rate (April 2025)",
    },
    {
      title: "Active FlexVest Users",
      value: "25,000+",
      desc: "Growing community across Nigeria",
    },
    {
      title: "Mobile Access Rate",
      value: "99.7%",
      desc: "Platform availability on mobile devices",
    },
  ];

  const features = [
    {
      icon: "💵",
      title: "Stable Dollar Savings",
      desc: "Save in USDC to protect your money from Naira inflation and devaluation.",
      points: [
        "USDC pegged to USD",
        "Protection from inflation",
        "Globally accepted",
        "Stable value storage",
      ],
    },
    {
      icon: solanaImg,
      title: "Fast Transactions",
      desc: "Instant deposits and withdrawals powered by Solana's lightning-fast blockchain.",
      points: ["High speed", "Low latency", "Reliable network"],
      isLogo: true,
    },
    {
      icon: "🔐",
      title: "Self-Custody",
      desc: "Your funds stay in your wallet. No intermediaries, complete control over your money.",
    },
    {
      icon: "🎯",
      title: "Savings Goals",
      desc: "Create personalized savings goals and track your progress in real-time.",
    },
    {
      icon: "💰",
      title: "Low Fees",
      desc: "Only 0.5% withdrawal fee. No hidden charges, no expensive international transfers.",
    },
    {
      icon: "🌍",
      title: "24/7 Access",
      desc: "Access your money anytime, anywhere with our mobile-friendly platform.",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Features</h2>
        <p>
          Why Choose <span className="highlight">FlexVest</span>? <br />
          FlexVest combines the stability of digital dollars with the speed of{" "}
          <span className="highlight">Solana</span> to help you achieve your
          financial goals while protecting your savings from inflation.
        </p>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div className="stat-card" key={i}>
            <h3>{stat.value}</h3>
            <p>{stat.title}</p>
            <small>{stat.desc}</small>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <div className="icon">
              {f.isLogo ? (
                <img src={f.icon} alt="Solana" className="logo-icon" />
              ) : (
                f.icon
              )}
            </div>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
            {f.points && (
              <ul>
                {f.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="cta-card">
        <div className="cta-content">
          <h2>Ready to protect your savings from inflation?</h2>
          <p>
            Join thousands of Nigerians who are already saving in digital
            dollars with <span className="brand">FlexVest</span>.
          </p>
          <div className="cta-buttons">
            <a href="#" className="btn primary">Create Account</a>
            <a href="#" className="btn secondary">Learn More</a>
          </div>
        </div>
        <div className="cta-logo">
          <img src={solanaImg} alt="Solana Logo" />
        </div>
      </div>
    </section>
  );
};

export default Features;
