import React from "react";
import { motion } from "framer-motion";

// Import your real avatars (make sure these exist in src/assets/avatars/)
import amina from "../assets/avatars/avatar1.jpg";
import chinedu from "../assets/avatars/avatar2.jpg";
import grace from "../assets/avatars/avatar3.jpg";
import musa from "../assets/avatars/avatar4.jpg";
import kemi from "../assets/avatars/avatar5.jpg";
import david from "../assets/avatars/avatar6.jpg";

const testimonials = [
  {
    id: 1,
    name: "justdaveconect",
    role: "Crypto , Defi",
    text: "FlexVest platform makes saving funds simple secure and rewarding.",
    avatar: amina,
  },
  {
    id: 2,
    name: "mickycrypt2",
    role: "Crypto Enthusiast",
    text: `Flexing with FlexVest. Saving made easy, secure, and rewarding. If you’re not in yet, you’re missing out big time.`,
    avatar: chinedu,
  },
  {
    id: 3,
    name: "salifud01",
    role: "We3 Writer",
    text: "Totally agree, if you’re not saving on Flexvestyet, you’re missing out.",
    avatar: grace,
  },
  {
    id: 4,
    name: "web3andrw",
    role: "Web3 Content Creator",
    text: "Platform trusted, progress guaranteed, savings unstoppable.",
    avatar: musa,
  },
  {
    id: 5,
    name: "wagmirise",
    role: "@SentientAGI",
    text: "Smart saving, secure platform FlexVest helps grow your financial future.",
    avatar: kemi,
  },
  {
    id: 6,
    name: "0xBeasttt",
    role: "Upcoming Python Dev",
    text: "Saving in USDC with FlexVest on Solana is a clean hedge against inflation while keeping full flexibility.",
    avatar: david,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-header">
        <h2>Why Nigerians Love FlexVest</h2>
        <p>
          Hear from people who are protecting their savings from Naira inflation 
          and securing their financial future.
        </p>
      </div>

  <motion.div
  className="testimonial-grid"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25, // each card animates after the previous one
      },
    },
  }}
>
  {testimonials.map((t) => (
    <motion.div
      key={t.id}
      className="testimonial-card"
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        rotateZ: 1, // subtle tilt
        boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
        transition: { duration: 0.3 },
      }}
    >
      <div className="testimonial-user">
        <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
        <div>
          <h4>{t.name}</h4>
          <span>{t.role}</span>
        </div>
      </div>
      <p className="testimonial-text">“{t.text}”</p>
    </motion.div>
  ))}
</motion.div>

    </section>
  );
};

export default Testimonials;
