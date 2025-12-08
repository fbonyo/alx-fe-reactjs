// src/App.jsx - FINAL FIX (Minimal code for Task 3)

import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      {/* 3. The UserProfile component with CORRECTLY formatted props */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
    </div>
  );
}

export default App;
