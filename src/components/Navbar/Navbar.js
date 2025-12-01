import React from 'react';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#141414',
      padding: '1rem',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{fontSize: '24px', fontWeight: 'bold'}}>
        <span style={{color: '#e50914'}}>CINE</span>
        <span style={{color: 'white'}}>HUB</span>
      </div>
      <div>
        <a href="#home" style={{color: 'white', margin: '0 10px', textDecoration: 'none'}}>Home</a>
        <a href="#movies" style={{color: '#ccc', margin: '0 10px', textDecoration: 'none'}}>Movies</a>
        <a href="#about" style={{color: '#ccc', margin: '0 10px', textDecoration: 'none'}}>About</a>
      </div>
    </nav>
  );
}

export default Navbar;