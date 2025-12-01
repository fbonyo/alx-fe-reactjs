import { Link } from 'react-router-dom';

const AddRecipe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-8">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl mb-6">📝</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Add Recipe Page</h1>
        <p className="text-gray-600 mb-8">This page will be implemented in Task 3.</p>
        <Link 
          to="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AddRecipe;
