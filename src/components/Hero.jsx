import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=usd-coin&vs_currencies=ngn"
        );
        const data = await res.json();
        setRate(data["usd-coin"].ngn);
      } catch (err) {
        console.error("Error fetching exchange rate:", err);
      }
    };
    fetchRate();
  }, []);

  return (
    <section className="hero" id="home">
      {/* Left Text Section */}
      <div className="hero-text">
        <h1>Protect Your <span className="highlight">Savings</span> with <span className="highlight">Stability</span></h1>
        <p>
          Inflation and volatility can eat into your Naira savings. Switch to
          USDC and secure your money with stable value.
        </p>
        <motion.button
          className="cta-btn flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Saving Now
          <motion.span
            animate={{ x: [0, 6, 0] }} // move right and back
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
          <ArrowRight size={20} />
        </motion.span>
      </motion.button>

      </div>

      {/* Right Exchange Card */}
      <div className="exchange-card">
        <div className="card-header">
          <h3>Naira vs. USDC</h3>
          <p>See the difference in stability</p>
        </div>

        <div className="card-body">
          {/* Naira Row */}
          <div className="value-row">
            <span className="label">Naira Value</span>
            <span className="volatile">Volatile</span>
          </div>
          <div className="amount">
            <span className="big">
              ₦{rate ? rate.toLocaleString() : "..."}
            </span>
            <span>= $1.00</span>
          </div>
          <div className="progress red"></div>

          {/* USDC Row */}
          <div className="value-row">
            <span className="label">USDC Value</span>
            <span className="stable">Stable</span>
          </div>
          <div className="amount">
            <span className="big">$1.00</span>
            <span>= $1.00</span>
          </div>
          <div className="progress green"></div>
        </div>

        {/* Mini Projections */}
        <div className="projection">
          <h4>Your 1-Year Savings Projection</h4>
          <div className="mini-card">
            <div className="mini-row">
              <span>₦100,000 in Naira</span>
              <span className="volatile">-22% value</span>
            </div>
            <div className="progress red small"></div>
          </div>
          <div className="mini-card">
            <div className="mini-row">
              <span>₦100,000 in USDC</span>
              <span className="stable">Value maintained</span>
            </div>
            <div className="progress green small"></div>
          </div>
        </div>

        <div className="card-footer">
          <button className="save-btn">
            Start Saving in USDC →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

