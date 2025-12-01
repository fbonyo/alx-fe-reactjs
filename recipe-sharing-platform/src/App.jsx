function App() {
  const recipes = [
    { id: 1, name: "Spaghetti Carbonara", time: "30 min", difficulty: "Medium" },
    { id: 2, name: "Chicken Curry", time: "45 min", difficulty: "Easy" },
    { id: 3, name: "Vegetable Stir Fry", time: "20 min", difficulty: "Easy" },
    { id: 4, name: "Chocolate Cake", time: "60 min", difficulty: "Hard" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg"></div>
              <h1 className="text-3xl font-bold text-gray-800">RecipeShare</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-orange-500 font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-orange-500 font-medium">Recipes</a>
              <a href="#" className="text-gray-600 hover:text-orange-500 font-medium">Add Recipe</a>
              <a href="#" className="text-gray-600 hover:text-orange-500 font-medium">About</a>
            </nav>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition">
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Share & Discover Amazing Recipes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our community of food lovers. Share your favorite recipes or discover new ones to try!
          </p>
          <div className="mt-8">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold mr-4 hover:shadow-xl transition">
              Share a Recipe
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full text-lg font-semibold hover:border-orange-500 hover:text-orange-500 transition">
              Browse Recipes
            </button>
          </div>
        </div>

        {/* Recipe Cards */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Featured Recipes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100"></div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{recipe.name}</h4>
                  <div className="flex justify-between text-gray-600 mb-4">
                    <span className="flex items-center">
                      <span className="mr-1">⏱️</span> {recipe.time}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {recipe.difficulty}
                    </span>
                  </div>
                  <button className="w-full bg-gray-100 hover:bg-orange-50 text-gray-800 hover:text-orange-600 py-2 rounded-lg font-medium transition">
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose RecipeShare?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Community Driven</h4>
              <p className="text-gray-600">Recipes shared by real home cooks and professional chefs.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Mobile Friendly</h4>
              <p className="text-gray-600">Access recipes on any device with our responsive design.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Fast & Easy</h4>
              <p className="text-gray-600">Quick search and simple recipe submission process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded"></div>
                <span className="text-2xl font-bold">RecipeShare</span>
              </div>
              <p className="text-gray-400">Sharing the joy of cooking since 2024</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 mb-2">© 2024 Recipe Sharing Platform</p>
              <p className="text-sm text-gray-500">Built with React & Tailwind CSS v4</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
