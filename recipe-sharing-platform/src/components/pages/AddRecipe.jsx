import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddRecipe = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    prepTime: '',
    cookTime: '',
    difficulty: 'Easy',
    servings: '',
    ingredients: '',
    instructions: '',
    tips: '',
    image: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const categories = [
    'Italian', 'Asian', 'Mexican', 'Indian', 'American', 
    'Mediterranean', 'Dessert', 'Breakfast', 'Vegetarian', 
    'Vegan', 'Seafood', 'Comfort Food', 'Healthy', 'Quick Meals'
  ];

  const difficultyLevels = ['Easy', 'Medium', 'Hard'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field if user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required field validations
    if (!formData.title.trim()) newErrors.title = 'Recipe title is required';
    if (!formData.category) newErrors.category = 'Please select a category';
    if (!formData.prepTime) newErrors.prepTime = 'Preparation time is required';
    if (!formData.cookTime) newErrors.cookTime = 'Cooking time is required';
    if (!formData.servings) newErrors.servings = 'Number of servings is required';
    
    // Ingredients validation - check for at least 2 items
    const ingredientsArray = formData.ingredients.split('\n').filter(item => item.trim());
    if (ingredientsArray.length < 2) {
      newErrors.ingredients = 'Please enter at least 2 ingredients (one per line)';
    }
    
    // Instructions validation
    if (!formData.instructions.trim()) newErrors.instructions = 'Cooking instructions are required';
    else if (formData.instructions.split('\n').filter(step => step.trim()).length < 2) {
      newErrors.instructions = 'Please provide at least 2 steps (one per line)';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          title: '',
          category: '',
          prepTime: '',
          cookTime: '',
          difficulty: 'Easy',
          servings: '',
          ingredients: '',
          instructions: '',
          tips: '',
          image: ''
        });
        setSubmitSuccess(false);
        navigate('/');
      }, 2000);
    }, 1500);
  };

  const handleAddMore = () => {
    setFormData({
      title: '',
      category: '',
      prepTime: '',
      cookTime: '',
      difficulty: 'Easy',
      servings: '',
      ingredients: '',
      instructions: '',
      tips: '',
      image: ''
    });
    setErrors({});
    setSubmitSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-orange-500 transition"
          >
            <span className="mr-2">←</span>
            Back to Recipes
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mt-4">Share Your Recipe</h1>
          <p className="text-gray-600 mt-2">Fill in the details below to add your delicious recipe to our community</p>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="mb-8 bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl text-green-600">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800">Recipe Submitted Successfully!</h3>
                <p className="text-green-600">Thank you for sharing your recipe with our community.</p>
              </div>
            </div>
          </div>
        )}

        {/* Form Container */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-3">📋</span>
                Basic Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Recipe Title */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Recipe Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g., Creamy Garlic Pasta"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.title ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                  />
                  {errors.title && (
                    <p className="mt-2 text-red-600 text-sm flex items-center">
                      <span className="mr-1">⚠</span> {errors.title}
                    </p>
                  )}
                </div>

                {/* Category */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.category ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                  >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="mt-2 text-red-600 text-sm flex items-center">
                      <span className="mr-1">⚠</span> {errors.category}
                    </p>
                  )}
                </div>

                {/* Difficulty */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Difficulty Level
                  </label>
                  <div className="flex space-x-4">
                    {difficultyLevels.map(level => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => handleChange({ target: { name: 'difficulty', value: level } })}
                        className={`flex-1 py-3 rounded-lg border font-medium transition ${
                          formData.difficulty === level
                            ? level === 'Easy' ? 'bg-green-100 border-green-500 text-green-700'
                            : level === 'Medium' ? 'bg-yellow-100 border-yellow-500 text-yellow-700'
                            : 'bg-red-100 border-red-500 text-red-700'
                            : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Prep Time & Cook Time */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Preparation Time *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="prepTime"
                      value={formData.prepTime}
                      onChange={handleChange}
                      placeholder="e.g., 15 min"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.prepTime ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                    />
                  </div>
                  {errors.prepTime && (
                    <p className="mt-2 text-red-600 text-sm flex items-center">
                      <span className="mr-1">⚠</span> {errors.prepTime}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Cooking Time *
                  </label>
                  <input
                    type="text"
                    name="cookTime"
                    value={formData.cookTime}
                    onChange={handleChange}
                    placeholder="e.g., 30 min"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.cookTime ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                  />
                  {errors.cookTime && (
                    <p className="mt-2 text-red-600 text-sm flex items-center">
                      <span className="mr-1">⚠</span> {errors.cookTime}
                    </p>
                  )}
                </div>

                {/* Servings */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Servings *
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="servings"
                      min="1"
                      max="20"
                      value={formData.servings}
                      onChange={handleChange}
                      placeholder="e.g., 4"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.servings ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                    />
                  </div>
                  {errors.servings && (
                    <p className="mt-2 text-red-600 text-sm flex items-center">
                      <span className="mr-1">⚠</span> {errors.servings}
                    </p>
                  )}
                </div>

                {/* Image URL */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Recipe Image URL (Optional)
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://example.com/recipe-image.jpg"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <p className="mt-2 text-gray-500 text-sm">
                    Leave empty to use a default recipe image
                  </p>
                </div>
              </div>
            </div>

            {/* Ingredients Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-3">🥕</span>
                Ingredients *
              </h2>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  List each ingredient on a new line. Include amounts and any special notes.
                </label>
                <textarea
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                  rows="6"
                  placeholder={`Example:
• 2 cups all-purpose flour
• 1 cup sugar
• 3 large eggs
• 1 tsp vanilla extract
• Pinch of salt`}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                />
                {errors.ingredients && (
                  <p className="mt-2 text-red-600 text-sm flex items-center">
                    <span className="mr-1">⚠</span> {errors.ingredients}
                  </p>
                )}
              </div>
              <div className="text-sm text-gray-500">
                <p className="flex items-center mb-1">
                  <span className="mr-2">💡</span>
                  Tip: Start each ingredient on a new line with a bullet point or dash
                </p>
                <p>Current ingredients count: {formData.ingredients.split('\n').filter(item => item.trim()).length}</p>
              </div>
            </div>

            {/* Instructions Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-3">👨‍🍳</span>
                Cooking Instructions *
              </h2>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Write each step on a new line. Be as detailed as possible.
                </label>
                <textarea
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  rows="8"
                  placeholder={`Example:
1. Preheat oven to 350°F (175°C)
2. Mix dry ingredients in a large bowl
3. In another bowl, whisk eggs and sugar until fluffy
4. Gradually combine wet and dry ingredients
5. Pour batter into prepared pan and bake for 30-35 minutes`}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.instructions ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
                />
                {errors.instructions && (
                  <p className="mt-2 text-red-600 text-sm flex items-center">
                    <span className="mr-1">⚠</span> {errors.instructions}
                  </p>
                )}
              </div>
              <div className="text-sm text-gray-500">
                <p>Current steps count: {formData.instructions.split('\n').filter(step => step.trim()).length}</p>
              </div>
            </div>

            {/* Tips & Notes Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-3">💡</span>
                Tips & Notes (Optional)
              </h2>
              <textarea
                name="tips"
                value={formData.tips}
                onChange={handleChange}
                rows="4"
                placeholder="Add any helpful tips, substitutions, or serving suggestions..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Form Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="text-gray-600">
                  <p className="font-medium">* Required fields</p>
                  <p className="text-sm">Please fill all required fields before submitting</p>
                </div>
                
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  
                  {submitSuccess ? (
                    <button
                      type="button"
                      onClick={handleAddMore}
                      className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
                    >
                      Add Another Recipe
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                          Submitting...
                        </span>
                      ) : (
                        'Submit Recipe'
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* Form Validation Summary */}
              {Object.keys(errors).length > 0 && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2 flex items-center">
                    <span className="mr-2">⚠</span>
                    Please fix the following errors:
                  </h3>
                  <ul className="list-disc list-inside text-red-600">
                    {Object.values(errors).map((error, index) => (
                      error && <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </form>

          {/* Preview Section (Desktop only) */}
          <div className="hidden lg:block mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">👁️</span>
              Form Preview
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Recipe Title</p>
                <p className="font-medium">{formData.title || 'Not entered yet'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Category</p>
                <p className="font-medium">{formData.category || 'Not selected'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Time</p>
                <p className="font-medium">
                  {formData.prepTime && formData.cookTime 
                    ? `${formData.prepTime} + ${formData.cookTime}` 
                    : 'Not entered'}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Ingredients Count</p>
                <p className="font-medium">{formData.ingredients.split('\n').filter(item => item.trim()).length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
