import React from 'react';

const Hero = ({ onOpenModal }) => (
  <section id="hero" className="hero">
    <h1>Boutique Counsel</h1>
    <p>Strategic Legal Architecture</p>
    <button className="btn-premium" onClick={onOpenModal}>Inquire Privately</button>
  </section>
);

export default Hero;