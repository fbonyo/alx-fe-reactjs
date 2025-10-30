// Correct Imports: Notice the path includes './components/' and the file extension '.jsx'
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import './App.css'; // This line is standard for the default React app

function App() {
  return (
    // React Fragment is used as the root element
    <>
      {/* Components included in the application */}
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App;
