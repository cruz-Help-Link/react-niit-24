import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Home</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/form">Login</Link></li>
        {/* <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
