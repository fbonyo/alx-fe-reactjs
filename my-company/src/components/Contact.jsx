import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setSubmitted(true); 
    setFormData({ name: '', email: '', message: '' });
  };

  const contactStyle = {
    padding: '40px',
    backgroundColor: '#fff3cd',
    minHeight: '80vh',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ced4da',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: '#ffc107',
    color: 'black',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '15px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  };

  return (
    <div style={contactStyle}>
      <h1 style={{ color: '#ffc107', textShadow: '1px 1px 2px #333' }}>Get in Touch</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '30px auto', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: 'vertical' }}
          rows="4"
          required
        />
        <button type="submit" style={buttonStyle}>
          Send Message
        </button>
        
        {submitted && (
          <p style={{ color: '#155724', backgroundColor: '#d4edda', padding: '10px', borderRadius: '4px', marginTop: '15px' }}>
            Thank you! Your form data has been logged to the console.
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;