import React from 'react';

function Home() {
  const homeStyle = {
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    minHeight: '80vh',
  };

  return (
    <div style={homeStyle}>
      <h1 style={{ color: '#007bff', fontSize: '2.5em' }}>Welcome to Stellar Solutions</h1>
      <p style={{ fontSize: '1.2em', margin: '20px 0' }}>
        We are dedicated to delivering excellence in all our services, driving your business forward with innovative strategies.
      </p>
      <img 
        src="https://placehold.co/600x200/5cb85c/ffffff?text=Innovative+Solutions" 
        alt="Innovative Solutions Placeholder" 
        style={{ borderRadius: '8px', marginTop: '30px' }} 
      />
    </div>
  );
}

export default Home;