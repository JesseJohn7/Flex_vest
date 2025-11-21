import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";


const Footer = () => {
return (
    <footer className="footer">
    <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
        <h3>FlexVest</h3>
        <p>Empowering Nigerians to save in USDC and beat inflation and Excessive banks charges with Solana speed.</p>
        <div className="social-links">
            
            <a href="https://x.com/Flex_vest" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} />
            </a>
        
        </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="##how-it-works">How it Works</a></li>
            <li><a href="#faqs">FAQS</a></li>
        </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: JesseJohn260@gmail.com</p>
        <p>Phone: +234 8038509708</p>
        <p>Lagos, Nigeria</p>
        <a href="mailto:JesseJohn260@gmail.com" className="contact-link">
            <FaEnvelope size={16} /> Get in Touch
        </a>
        </div>
    </div>

    <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FlexVest. All rights reserved.</p>
        <p>Built on Solana by <a href="https://x.com/Jesse_can_code">Jesse John</a>, for Nigerians.</p>
        
    </div>
    </footer>
);
};

export default Footer;