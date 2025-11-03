// src/App.jsx - Final Code

// Import the three new components from the './components' directory
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Include components in the specified order */}
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
