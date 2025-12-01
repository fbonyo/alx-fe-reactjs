import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [servings, setServings] = useState(4);
  const [activeTab, setActiveTab] = useState('ingredients');

  // Sample detailed recipe data (in a real app, this would come from an API)
  const detailedRecipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      summary: "A classic Italian pasta dish with eggs, cheese, bacon, and black pepper.",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2b5?w=1200&h=600&fit=crop",
      cookingTime: "30 min",
      difficulty: "Medium",
      rating: 4.7,
      reviews: 128,
      author: "Maria Rossi",
      authorAvatar: "👩‍🍳",
      prepTime: "15 min",
      cookTime: "15 min",
      totalTime: "30 min",
      calories: "450 cal",
      category: "Italian",
      tags: ["Pasta", "Italian", "Quick", "Dinner"],
      ingredients: [
        { name: "Spaghetti", amount: "400g", note: "or any long pasta" },
        { name: "Eggs", amount: "4 large" },
        { name: "Pecorino Romano cheese", amount: "100g", note: "grated" },
        { name: "Guanciale or pancetta", amount: "150g", note: "diced" },
        { name: "Black pepper", amount: "1 tsp", note: "freshly ground" },
        { name: "Salt", amount: "to taste" },
        { name: "Garlic", amount: "1 clove", note: "optional" },
      ],
      instructions: [
        "Bring a large pot of salted water to boil. Cook spaghetti according to package instructions until al dente.",
        "While pasta cooks, whisk eggs, grated cheese, and black pepper in a bowl until well combined.",
        "In a large pan, cook guanciale over medium heat until crispy and fat has rendered, about 5-7 minutes.",
        "Reserve 1 cup of pasta water before draining the spaghetti.",
        "Add drained spaghetti to the pan with guanciale and toss to coat in the fat.",
        "Remove pan from heat and quickly mix in the egg and cheese mixture, adding pasta water as needed to create a creamy sauce.",
        "Serve immediately with extra cheese and black pepper on top.",
      ],
      tips: [
        "Use room temperature eggs to prevent the sauce from curdling.",
        "Never add cream to authentic carbonara!",
        "Work quickly when adding the egg mixture to prevent scrambled eggs.",
      ],
      nutrition: {
        calories: 450,
        protein: "20g",
        carbs: "45g",
        fat: "22g",
        fiber: "3g",
      }
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      summary: "Chunks of grilled chicken (tikka) cooked in a smooth buttery & creamy tomato based gravy.",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1200&h=600&fit=crop",
      cookingTime: "45 min",
      difficulty: "Medium",
      rating: 4.8,
      reviews: 215,
      author: "Raj Patel",
      authorAvatar: "👨‍🍳",
      prepTime: "20 min",
      cookTime: "25 min",
      totalTime: "45 min",
      calories: "380 cal",
      category: "Indian",
      tags: ["Chicken", "Indian", "Creamy", "Spicy"],
      ingredients: [
        { name: "Chicken breast", amount: "500g", note: "boneless, cubed" },
        { name: "Yogurt", amount: "1 cup" },
        { name: "Ginger-garlic paste", amount: "2 tbsp" },
        { name: "Tomato puree", amount: "2 cups" },
        { name: "Heavy cream", amount: "1/2 cup" },
        { name: "Butter", amount: "3 tbsp" },
        { name: "Garam masala", amount: "1 tbsp" },
        { name: "Turmeric powder", amount: "1 tsp" },
        { name: "Cumin powder", amount: "1 tsp" },
        { name: "Coriander powder", amount: "1 tbsp" },
        { name: "Kasuri methi", amount: "1 tsp", note: "dried fenugreek leaves" },
        { name: "Oil", amount: "2 tbsp" },
        { name: "Salt", amount: "to taste" },
      ],
      instructions: [
        "Marinate chicken with yogurt, 1 tbsp ginger-garlic paste, turmeric, and salt for 30 minutes.",
        "Grill or pan-fry chicken until cooked through and slightly charred.",
        "In a separate pan, heat butter and oil. Add remaining ginger-garlic paste and sauté until fragrant.",
        "Add tomato puree and cook for 10 minutes until oil separates.",
        "Add all dry spices and cook for 2 more minutes.",
        "Add cream and kasuri methi, then simmer for 5 minutes.",
        "Add grilled chicken pieces and cook for another 5 minutes.",
        "Garnish with fresh cream and coriander leaves before serving.",
      ],
      tips: [
        "Let the chicken marinate for at least 30 minutes for best flavor.",
        "Cook the tomato puree well to remove raw taste.",
        "Adjust cream according to desired consistency.",
      ],
      nutrition: {
        calories: 380,
        protein: "35g",
        carbs: "12g",
        fat: "24g",
        fiber: "2g",
      }
    },
    // Add more detailed recipes as needed
  ];

  useEffect(() => {
    // Simulate API call
    const fetchRecipe = () => {
      setLoading(true);
      setTimeout(() => {
        const foundRecipe = detailedRecipes.find(r => r.id === parseInt(id));
        if (foundRecipe) {
          setRecipe(foundRecipe);
        } else {
          // If recipe not found, redirect to home
          navigate('/');
        }
        setLoading(false);
      }, 500);
    };

    fetchRecipe();
  }, [id, navigate]);

  const handleServingsChange = (newServings) => {
    if (newServings > 0) {
      setServings(newServings);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
          <p className="mt-4 text-gray-600 text-lg">Loading recipe details...</p>
        </div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">🍳</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Recipe Not Found</h2>
          <p className="text-gray-600 mb-4">The recipe you're looking for doesn't exist.</p>
          <Link to="/" className="text-orange-500 hover:text-orange-600 font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-orange-500 transition"
        >
          <span className="mr-2">←</span>
          Back to Recipes
        </button>
      </div>

      {/* Recipe Header */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
        <div className="md:flex">
          {/* Recipe Image */}
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-full">
              <img 
                src={recipe.image} 
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                  recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {recipe.difficulty}
                </span>
              </div>
            </div>
          </div>

          {/* Recipe Info */}
          <div className="md:w-1/2 p-8">
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 text-xl mr-1">★</span>
                <span className="font-bold text-gray-800">{recipe.rating}</span>
                <span className="text-gray-500 ml-2">({recipe.reviews} reviews)</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
              <p className="text-gray-600 text-lg mb-6">{recipe.summary}</p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">👨‍🍳</span>
                  <span className="text-gray-700">{recipe.author}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">⏱️</span>
                  <span className="text-gray-700">{recipe.totalTime}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">🔥</span>
                  <span className="text-gray-700">{recipe.calories}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition">
                Save Recipe
              </button>
              <button className="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition">
                <span className="text-xl">❤️</span>
              </button>
              <button className="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition">
                <span className="text-xl">📤</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Ingredients & Instructions */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="mb-8">
            <div className="flex border-b border-gray-200">
              <button
                className={`px-6 py-3 font-semibold ${activeTab === 'ingredients' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600 hover:text-gray-800'}`}
                onClick={() => setActiveTab('ingredients')}
              >
                Ingredients
              </button>
              <button
                className={`px-6 py-3 font-semibold ${activeTab === 'instructions' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600 hover:text-gray-800'}`}
                onClick={() => setActiveTab('instructions')}
              >
                Instructions
              </button>
              <button
                className={`px-6 py-3 font-semibold ${activeTab === 'tips' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600 hover:text-gray-800'}`}
                onClick={() => setActiveTab('tips')}
              >
                Tips & Notes
              </button>
            </div>
          </div>

          {/* Servings Selector */}
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Adjust Servings</h3>
                <p className="text-sm text-gray-600">Scale ingredients based on number of servings</p>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => handleServingsChange(servings - 1)}
                  className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
                  disabled={servings <= 1}
                >
                  <span className="text-xl">-</span>
                </button>
                <span className="text-2xl font-bold text-gray-800 w-12 text-center">{servings}</span>
                <button 
                  onClick={() => handleServingsChange(servings + 1)}
                  className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
                >
                  <span className="text-xl">+</span>
                </button>
              </div>
            </div>
          </div>

          {/* Ingredients Tab */}
          {activeTab === 'ingredients' && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Ingredients</h2>
              <ul className="space-y-4">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-200 flex items-center justify-center mr-4">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <span className="font-medium text-gray-800">{ingredient.name}</span>
                      {ingredient.note && (
                        <span className="text-gray-500 text-sm ml-2">({ingredient.note})</span>
                      )}
                    </div>
                    <span className="font-semibold text-gray-700">{ingredient.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Instructions Tab */}
          {activeTab === 'instructions' && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Cooking Instructions</h2>
              <div className="space-y-6">
                {recipe.instructions.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center font-bold mr-4">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-lg">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tips Tab */}
          {activeTab === 'tips' && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Tips & Notes</h2>
              <ul className="space-y-4">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-500">💡</span>
                    </div>
                    <p className="text-gray-700">{tip}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column - Nutrition & Info */}
        <div className="space-y-8">
          {/* Nutrition Info */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Nutrition Information</h3>
            <div className="space-y-3">
              {Object.entries(recipe.nutrition).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-600 capitalize">{key}</span>
                  <span className="font-semibold text-gray-800">{value}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">*Per serving, approximate values</p>
          </div>

          {/* Cooking Times */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Cooking Times</h3>
            <div className="space-y-4">
              {[
                { label: 'Preparation', time: recipe.prepTime, icon: '🥗' },
                { label: 'Cooking', time: recipe.cookTime, icon: '🍳' },
                { label: 'Total', time: recipe.totalTime, icon: '⏱️' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-xl mr-3">{item.icon}</span>
                    <span className="font-medium text-gray-700">{item.label}</span>
                  </div>
                  <span className="font-bold text-gray-800">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Similar Recipes */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Similar Recipes</h3>
            <div className="space-y-4">
              {[
                { name: "Fettuccine Alfredo", time: "25 min", category: "Italian" },
                { name: "Penne Arrabbiata", time: "30 min", category: "Italian" },
                { name: "Shrimp Scampi", time: "20 min", category: "Seafood" },
              ].map((similar, index) => (
                <div key={index} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg mr-4"></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{similar.name}</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-3">{similar.time}</span>
                      <span>{similar.category}</span>
                    </div>
                  </div>
                  <span className="text-gray-400">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
