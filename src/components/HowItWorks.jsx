import React, { useState, useEffect } from "react";
import { Wallet, DollarSign, Target, ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Connect Your Wallet",
    desc: "Link your Phantom or other Solana wallet to FlexVest with just a click.",
    icon: <Wallet size={28} />,
  },
  {
    id: 2,
    title: "Deposit USDC",
    desc: "Add USDC to your FlexVest account using our simple deposit interface.",
    icon: <DollarSign size={28} />,
  },
  {
    id: 3,
    title: "Create Savings Goals",
    desc: "Set up personal savings goals and watch your digital dollars grow.",
    icon: <Target size={28} />,
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Cycle active step every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % steps.length) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="works-section" id="how-it-works">
      <h2>How FlexVest Works</h2>
      <p className="subtitle">
        Start saving in digital dollars in just a few simple steps, protecting
        your money from Naira inflation.
      </p>

      {/* Step navigation */}
      <div className="steps-nav">
        {steps.map((step, i) => (
          <div key={step.id} className="step-wrapper">
            <div
              className={`step-circle ${
                activeStep === step.id ? "active" : ""
              }`}
              onClick={() => setActiveStep(step.id)}
            >
              {step.id}
            </div>
            {i < steps.length - 1 && <div className="step-line"></div>}
          </div>
        ))}
      </div>
      {/* Step cards */}
      <div className="steps-cards">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`step-card ${
              activeStep === step.id ? "active-card" : ""
            }`}
          >
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
            <a href="#" className="details-link">
              Show details
            </a>
            <span className="step-bg">{step.id}</span>
          </div>
        ))}
      </div>
      {/* CTA */}
      <div className="works-cta">
        <button className="cta-btn">
        <a href="https://flourished-usability-875918.framer.app/">Get Started Now</a> <span className="arrow-animate"><ArrowRight size={18} /></span>
        </button>
        <p className="helper-text">
          No technical knowledge required. We’ll guide you through each step.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
