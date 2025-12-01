import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipe from './components/pages/AddRecipe';
import Community from './components/pages/Community';
import Category from './components/pages/Category';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/community" element={<Community />} />
          <Route path="/category/:category" element={<Category />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
