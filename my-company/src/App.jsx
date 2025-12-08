import React from 'react';
// 1. Import necessary components from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 2. Import all page and structural components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    // Wrap the entire application with the Router
    <Router>
      {/* Container for layout: column structure and minimum height for footer placement */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* Navigation Bar (appears outside the Routes, so it shows on every page) */}
        <Navbar />

        {/* Main Content Area */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            {/* Define the routes for each of the four pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer (appears outside the Routes, so it shows on every page) */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;