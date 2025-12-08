import { Link, useParams } from 'react-router-dom';

const Category = () => {
  const { category } = useParams();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <Link 
            to="/"
            className="text-gray-600 hover:text-orange-500 transition"
          >
            ← Back to Home
          </Link>
        </div>
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 capitalize">{category} Recipes</h1>
          <p className="text-gray-600 mb-8">Browse all recipes in the {category} category.</p>
          <div className="text-5xl mb-6">🍽️</div>
          <p className="text-gray-500">Category page implementation coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
