import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo" style={{letterSpacing: '4px', fontWeight: '800'}}>FOUNDATION</div>
      <div className="nav-links">
        <Link to="hero" smooth={true} duration={500}>Index</Link>
        <Link to="about" smooth={true} duration={500}>Approach</Link>
        <Link to="services" smooth={true} duration={500}>Capabilities</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;