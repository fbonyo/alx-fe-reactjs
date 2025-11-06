import React from 'react';

function About() {
  const aboutStyle = {
    padding: '40px',
    backgroundColor: '#fff',
    minHeight: '80vh',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto',
  };

  return (
    <div style={aboutStyle}>
      <h1 style={{ color: '#007bff', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>About Us</h1>
      <p style={{ marginTop: '20px', fontSize: '1.1em' }}>
        Founded in 1990, Stellar Solutions has grown from a small consulting firm into a leading enterprise, committed to client success through strategic innovation. Our team comprises industry veterans and dynamic young talent, all focused on providing tailored solutions that meet the evolving demands of the global market.
      </p>
      <p style={{ marginTop: '20px', fontSize: '1.1em' }}>
        We specialize in various fields including cutting-edge technology integration, strategic market analysis, and bespoke consultancy services, ensuring our clients stay ahead of the curve.
      </p>
    </div>
  );
}

export default About;