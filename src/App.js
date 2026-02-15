import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="App">
      <Navbar />
      {/* Pass the toggle function to components that need it */}
      <Hero onOpenModal={toggleModal} />
      <About />
      <Services />
      <Contact onOpenModal={toggleModal} />
      
      <footer className="main-footer">
        <div className="footer-content">
          <p>© 2026 THE FOUNDATION | STRATEGIC ARCHITECTURE</p>
          <div className="footer-links">
            <span>PRIVACY | </span>
            <span>TERMS</span>
          </div>
        </div>
      </footer>

      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}

export default App;