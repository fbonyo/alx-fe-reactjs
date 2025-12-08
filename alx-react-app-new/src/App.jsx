import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <UserProfile 
        name="John Doe"
        age={28}
        bio="Travel enthusiast and city explorer"
      />
      <MainContent />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;