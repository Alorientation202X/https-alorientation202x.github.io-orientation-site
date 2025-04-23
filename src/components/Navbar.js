import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">🏠 Accueil</Link></li>
        <li><Link to="/apropos">📘 À propos</Link></li>
        <li><Link to="/contact">📞 Contact</Link></li>
        <li><Link to="/test">🧪 Test RIASEC</Link></li>
        <li><Link to="/bibliotheque">📚 Bibliothèque</Link></li>
        <li><Link to="/services">🛠️ Services</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;









