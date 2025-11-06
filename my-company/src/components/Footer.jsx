import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#343a40',
    color: 'white',
    textAlign: 'center',
    padding: '15px 0',
    fontSize: '0.9em',
    // position: 'sticky', // Removing sticky as it can look odd on short content
    bottom: 0,
    width: '100%',
    marginTop: 'auto', // Pushes the footer to the bottom
  };

  return (
    <footer style={footerStyle}>
      &copy; {new Date().getFullYear()} Stellar Solutions. All rights reserved.
    </footer>
  );
}

export default Footer;