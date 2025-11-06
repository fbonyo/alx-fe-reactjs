import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <UserProfile 
        name="John Traveler" 
        age={28} 
        bio="Passionate explorer who loves discovering new cultures and hidden gems around the world."
      />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;