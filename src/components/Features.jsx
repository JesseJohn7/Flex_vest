import React from "react";
import {Users,DollarSign,Smartphone,Lock,Target,Percent,Globe} from "lucide-react";
import solanaImg from '../assets/solana.png'; // Ensure this path is correct

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again later.</h2>;
    }
    return this.props.children;
  }
}

const Features = () => {
  const stats = [
    {
      title: "Nigerian Naira Inflation Rate",
      value: "22.41%",
      desc: "Annual inflation rate (April 2025)",
      icon: <DollarSign size={32} color="#22c55e" />,
    },
    {
      title: "Active FlexVest Users",
      value: "50+",
      desc: "Growing community across Nigeria",
      icon: <Users size={32} color="#22c55e" />,
    },
    {
      title: "Mobile Access Rate",
      value: "99.7%",
      desc: "Platform availability on mobile devices",
      icon: <Smartphone size={32} color="#22c55e" />,
    },
  ];

  const features = [
    {
      icon: <DollarSign size={32} color="#22c55e" />,
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
      icon: <Lock size={32} color="#22c55e" />,
      title: "Self-Custody",
      desc: "Your funds stay in your wallet. No intermediaries, complete control over your money.",
    },
    {
      icon: <Target size={32} color="#22c55e" />,
      title: "Savings Goals",
      desc: "Create personalized savings goals and track your progress in real-time.",
    },
    {
      icon: <Percent size={32} color="#22c55e" />,
      title: "Low Fees",
      desc: "Only 0.5% withdrawal fee. No hidden charges, no expensive international transfers.",
    },
    {
      icon: <Globe size={32} color="#22c55e" />,
      title: "24/7 Access",
      desc: "Access your money anytime, anywhere with our mobile-friendly platform.",
    },
  ];

  return (
    <ErrorBoundary>
      <section className="features-section" id="features">
        <div className="features-header">
          <button className="features-badge">Powerful Features</button>
          <p>
            <span className="highlight why-choose">Why Choose FlexVest?</span>{" "}
            <br />
            FlexVest combines the stability of digital dollars with the speed of{" "}
            <span className="highlight">Solana</span> to help you achieve your
            financial goals while protecting your savings from inflation.
          </p>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div className="stat-card" key={i}>
              {stat.icon && <div className="stat-icon">{stat.icon}</div>}
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
              <a href="https://x.com/Flex_vest" className="btn secondary">Learn More</a>
            </div>
          </div>
          <div className="cta-logo">
            <img src={solanaImg} alt="Solana Logo" />
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default Features;