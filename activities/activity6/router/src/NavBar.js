import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f2f2f2' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '15px' }}>About</Link>
      <Link to="/contact" style={{ marginRight: '15px' }}>Contact</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default NavBar;