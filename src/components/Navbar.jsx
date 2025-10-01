import React, { useState } from 'react';

const Navbar = () => {
  // declare state for toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Flex<span className='vest'>vest</span></div>

      {/* Hamburger Icon (mobile) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How it Works</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#faqs">Faqs</a></li>
        <li><a href="#team">Team</a></li>
         <li className="mobile-btn">
          <button className="nav-btn">Connect Wallet</button>
        </li>
      </ul>

      {/* Button */}
      <button className="nav-btn">Connect Wallet</button>
    </nav>
  );
}


export default Navbar;
