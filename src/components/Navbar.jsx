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
        <li><a href="#faqs">About</a></li>
        <li><a href="#services">Features</a></li>
        <li><a href="#contact">Faqs</a></li>
        <li><a href="#footer">Contact</a></li>
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
