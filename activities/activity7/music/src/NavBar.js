import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f2f2f2', marginBottom: '20px' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/newalbum" style={{ marginRight: '15px' }}>New Album</Link>
    </nav>
  );
};

export default NavBar;