// src/App.jsx
import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <h1>User Profiles</h1>

      {/* Example user profiles */}
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <UserProfile name="Fred Bonyo" age={30} bio="Frontend dev, coffee lover" />
      <UserProfile name="Sam" age={22} bio="Student and musician" />
    </div>
  );
}

export default App;
