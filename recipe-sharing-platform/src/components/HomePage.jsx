import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Load recipes from data.json
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/src/data.json');
        const data = await response.json();
        setRecipes(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  // Filter recipes based on search term
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Discover Amazing Recipes</h1>
            <p className="text-xl mb-8 opacity-90">
              Share your culinary creations and explore recipes from food lovers around the world
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search recipes by name or ingredient..."
                  className="w-full px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-orange-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="absolute right-2 top-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">{recipes.length}</div>
            <div className="text-gray-600">Total Recipes</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-green-500 mb-2">{recipes.filter(r => r.difficulty === 'Easy').length}</div>
            <div className="text-gray-600">Easy Recipes</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-purple-500 mb-2">24/7</div>
            <div className="text-gray-600">Available</div>
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {searchTerm ? `Search Results for "${searchTerm}"` : 'Featured Recipes'}
              <span className="text-gray-500 text-lg ml-2">({filteredRecipes.length} recipes)</span>
            </h2>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                Filter
              </button>
              <Link 
                to="/add-recipe" 
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg transition"
              >
                Add Recipe
              </Link>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
              <p className="mt-4 text-gray-600">Loading delicious recipes...</p>
            </div>
          ) : filteredRecipes.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🍳</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">No recipes found</h3>
              <p className="text-gray-600">Try searching for something else or add your own recipe!</p>
              <Link 
                to="/add-recipe" 
                className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg transition"
              >
                Add Your First Recipe
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </div>

        {/* Categories Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Popular Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Italian', icon: '🍝', count: 12 },
              { name: 'Asian', icon: '🥢', count: 18 },
              { name: 'Desserts', icon: '🍰', count: 24 },
              { name: 'Vegetarian', icon: '🥦', count: 15 },
              { name: 'Quick Meals', icon: '⚡', count: 30 },
              { name: 'Healthy', icon: '🥗', count: 22 },
              { name: 'Comfort Food', icon: '🍲', count: 20 },
              { name: 'Breakfast', icon: '🍳', count: 16 },
            ].map((category) => (
              <Link 
                key={category.name}
                to={`/category/${category.name.toLowerCase()}`}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition duration-300 cursor-pointer hover:bg-orange-50 group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{category.icon}</div>
                <h4 className="font-semibold text-gray-800 group-hover:text-orange-600">{category.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{category.count} recipes</p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Share Your Recipes?</h3>
          <p className="text-xl mb-8 opacity-90">Join our community of food lovers and share your culinary creations.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/add-recipe"
              className="px-8 py-4 bg-white text-gray-800 rounded-full font-bold hover:bg-gray-100 transition"
            >
              Start Sharing Now
            </Link>
            <Link 
              to="/community"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition"
            >
              Explore Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
