import React from 'react';
import Search from './components/Search';
import './index.css'; // Ensure Tailwind CSS is imported

const App = () => {
  return (
    <div className="app">
      <Search />
    </div>
  );
};

export default App; // <-- This is the crucial default export
