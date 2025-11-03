// src/App.jsx - Comprehensive Final Code

// Components from Task 2 (If required to be present)
// If you are absolutely sure Task 2 components are NOT needed, delete these lines
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

// Component from Task 3
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      {/* Include Task 2 Components (Optional, but safe if required) */}
      <Header />
      <MainContent />
      <Footer />
      
      {/* Title for the UserProfile section */}
      <h1>User Profile Card Demo</h1>
      
      {/* 3. The UserProfile component with CORRECTLY formatted props */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      
      {/* Ensure the 'age' prop is passed as a string or number. */}
      {/* Using age="25" (string) is safer for simple props. */}
    </div>
  );
}

export default App;
