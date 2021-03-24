import React from 'react';

function Footer() {
  return(
    <header style={footerStyle}>
    &copy; Saku Kekki
    </header>
  )
}

    const footerStyle = { 
      background: '#333333',
      color: '#ffffff',
      textAlign: 'center',
      padding: '10px',
      position: 'fixed'
    }
    export default Footer;