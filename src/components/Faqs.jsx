import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
{
    question: "What is FlexVest?",
    answer:
    "FlexVest is a digital savings platform that allows you to save in USDC, a stablecoin pegged to the US Dollar, protecting your money from Naira inflation and devaluation.",
},
{
    question: "Is FlexVest safe?",
    answer:
    "Yes. Your funds remain in your self-custody wallet. FlexVest uses blockchain technology on Solana for secure and transparent transactions.",
},
{
    question: "How do I start saving?",
    answer:
    "Simply create an account, deposit Naira, and convert it to USDC. You can then set savings goals and track your progress in real time.",
},
{
    question: "What are the fees?",
    answer:
    "FlexVest charges only a 0.5% withdrawal fee. Deposits are free, and there are no hidden costs.",
},
{
    question: "Can I withdraw anytime?",
    answer:
    "Yes! FlexVest gives you 24/7 access to your funds, so you can withdraw anytime, anywhere.",
},
];

const FAQ = () => {
const [activeIndex, setActiveIndex] = useState(null);

const toggleFAQ = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
};

return (
    <section className="faq-section" id="faqs">
    <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <p>
        Everything you need to know about saving with{" "}
        <span className="brand">FlexVest</span>. Can’t find what you’re looking for?{" "}
        <a href="#" className="contact-link">Contact our team</a>.
        </p>
    </div>

    <div className="faq-container">
        {faqs.map((faq, i) => (
        <div
            key={i}
            className={`faq-item ${activeIndex === i ? "active" : ""}`}
            onClick={() => toggleFAQ(i)}
        >
            <div className="faq-question">
            <h4>{faq.question}</h4>
            {activeIndex === i ? (
                <Minus size={22} className="icon minus" />
            ) : (
                <Plus size={22} className="icon plus" />
            )}
            </div>

            <AnimatePresence>
              {activeIndex === i && (
                <motion.div
                  className="faq-answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
