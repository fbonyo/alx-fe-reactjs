import React, { useContext } from 'react';
import UserContext from './UserContext';

// This component uses useContext to grab data directly
function WelcomeMessage() {
  const userData = useContext(UserContext);

  const style = { 
    padding: '20px', 
    border: '2px solid #00796b', 
    borderRadius: '6px', 
    backgroundColor: '#e0f2f1',
    marginTop: '15px',
    textAlign: 'left'
  };

  return (
    <div style={style}>
      <h4>WelcomeMessage (Data Consumer)</h4>
      <p>Data successfully accessed via Context:</p>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Role:</strong> {userData.role}</p>
    </div>
  );
}

export default WelcomeMessage;