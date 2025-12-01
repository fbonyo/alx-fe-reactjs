const RecipeCard = ({ recipe }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer">
      {/* Recipe Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(recipe.difficulty)}`}>
            {recipe.difficulty}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center bg-black/70 text-white px-3 py-1 rounded-full">
          <span className="text-yellow-400 mr-1">★</span>
          <span>{recipe.rating}</span>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
            {recipe.title}
          </h3>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {recipe.summary}
        </p>

        {/* Recipe Info */}
        <div className="flex items-center justify-between text-gray-500 text-sm mb-6">
          <div className="flex items-center">
            <span className="mr-1">⏱️</span>
            <span>{recipe.cookingTime}</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
            <span>Available</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition duration-300 group-hover:from-orange-600 group-hover:to-red-600">
            View Recipe
          </button>
          <button className="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition">
            <span className="text-xl">❤️</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
