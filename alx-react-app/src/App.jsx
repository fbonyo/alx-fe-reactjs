// src/App.jsx - Final Code

// Import the new UserProfile component
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <h1>User Profile Card Demo</h1>
      
      {/* 3. Use the component with props as specified */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      
      {/* You can add more profiles easily! */}
      <UserProfile 
        name="Bob" 
        age="30" 
        bio="Full-stack developer and coffee enthusiast" 
      />
    </div>
  );
}

export default App;
