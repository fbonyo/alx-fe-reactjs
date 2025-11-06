import React from 'react';
import UserInfo from './UserInfo';

// 1. New component created to fulfill assignment structure
function ProfilePage() {
  return (
    <div style={{ padding: '10px', border: '1px solid #ffccbc', margin: '10px' }}>
      <h2>ProfilePage (Intermediate Component)</h2>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;