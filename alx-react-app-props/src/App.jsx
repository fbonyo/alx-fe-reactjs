import React from 'react';
import ProfilePage from './components/ProfilePage'; // ⬅️ REQUIRED BY ASSIGNMENT
import UserContext from './components/UserContext';

function App() {
  const userData = { 
    name: "Jane Doe (Context API)", 
    email: "jane.doe@context.com",
    role: "Data Provider"
  };
  
  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '30px',
    backgroundColor: '#e0f7fa',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div style={appStyle}>
      {/* Wrap the required top-level component, ProfilePage */}
      <UserContext.Provider value={userData}>
        <div style={{ padding: '20px', border: '2px solid #00bcd4', borderRadius: '8px', backgroundColor: 'white' }}>
          <h1>App Component (Data Source)</h1>
          <ProfilePage /> 
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;