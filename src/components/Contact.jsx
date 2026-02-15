import React from 'react';

const Contact = ({ onOpenModal }) => {
  return (
    <section id="contact" style={{ background: '#1a1a1a', color: 'white', padding: '120px 0' }}>
      <h2 style={{ fontWeight: '300', letterSpacing: '4px', textTransform: 'uppercase' }}>
        Begin the Dialogue
      </h2>
      <p style={{ color: '#888', marginTop: '10px' }}>Discrete counsel for global interests.</p>
      <button 
        className="btn-premium" 
        style={{ background: 'transparent', borderColor: 'white', color: 'white' }} 
        onClick={onOpenModal}
      >
        Request Consultation
      </button>
    </section>
  );
};

export default Contact;