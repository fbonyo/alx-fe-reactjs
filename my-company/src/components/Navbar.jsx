import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '15px 0',
    backgroundColor: '#007bff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 20px',
    padding: '8px 15px',
    borderRadius: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;