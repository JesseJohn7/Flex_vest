import React, { useState } from 'react';

const Navbar = () => {
  // declare state for toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">FlexPage</div>

      {/* Hamburger Icon (mobile) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#about">About</a></li>
        <li><a href="#faqs">FAQs</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Button */}
      <button className="nav-btn">Get Started</button>
    </nav>
  );
};

export default Navbar;
