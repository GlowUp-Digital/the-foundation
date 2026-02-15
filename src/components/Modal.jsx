import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(26, 26, 26, 0.95)', display: 'flex', 
      justifyContent: 'center', alignItems: 'center', zIndex: 2000
    }}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{
        background: 'white', padding: '60px', maxWidth: '500px', 
        textAlign: 'center', borderTop: '6px solid #2d5a27',
        boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
      }}>
        <h2 style={{ letterSpacing: '4px', textTransform: 'uppercase', color: '#1a1a1a' }}>Preview Protocol</h2>
        <div style={{ width: '40px', height: '2px', background: '#2d5a27', margin: '20px auto' }}></div>
        <p style={{ color: '#555', lineHeight: '1.8', fontSize: '0.9rem' }}>
          This interface is a high-fidelity design demonstration for <strong>The Foundation</strong> tier. 
          Live inquiries are processed via secure encrypted channels in production environments.
        </p>
        <button className="btn-premium" onClick={onClose}>Close Preview</button>
      </div>
    </div>
  );
};

// THIS IS THE LINE THAT IS MISSING:
export default Modal;