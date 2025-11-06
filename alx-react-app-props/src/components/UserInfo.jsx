import React from 'react';
import WelcomeMessage from './WelcomeMessage';

// 2. New component created to fulfill assignment structure
function UserInfo() {
  return (
    <div style={{ padding: '10px', border: '1px solid #f8bbd0', margin: '10px' }}>
      <h3>UserInfo (Intermediate Component)</h3>
      {/* Renders your existing component, which will consume the Context */}
      <WelcomeMessage />
    </div>
  );
}

export default UserInfo;