// src/App.jsx - Final Code

// 3a. Add this line to import the component from the new folder
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    // 3b. Include the <WelcomeMessage /> component inside the return statement
    <div className="App">
      <WelcomeMessage />
    </div>
  );
}

export default App;
