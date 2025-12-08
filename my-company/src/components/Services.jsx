import React from 'react';

function Services() {
  const servicesStyle = {
    padding: '40px',
    backgroundColor: '#f0f8ff',
    minHeight: '80vh',
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '40px',
    maxWidth: '600px',
    margin: '20px auto',
    textAlign: 'left',
  };

  const itemStyle = {
    fontSize: '1.1em',
    marginBottom: '15px',
    padding: '10px',
    borderLeft: '4px solid #5cb85c',
    backgroundColor: '#eaf7e8',
    borderRadius: '4px',
  };

  return (
    <div style={servicesStyle}>
      <h1 style={{ color: '#5cb85c', textAlign: 'center' }}>Our Core Services</h1>
      <ul style={listStyle}>
        <li style={itemStyle}>Technology Consulting: Offering expert advice on cloud infrastructure, cybersecurity, and digital transformation.</li>
        <li style={itemStyle}>Market Analysis: Providing deep insights into consumer trends and competitive landscapes to inform strategic decisions.</li>
        <li style={itemStyle}>Product Development: Managing the full lifecycle from concept ideation to market launch for digital and physical products.</li>
        <li style={itemStyle}>Training & Workshops: Customized corporate training programs to upskill your internal teams.</li>
      </ul>
    </div>
  );
}

export default Services;