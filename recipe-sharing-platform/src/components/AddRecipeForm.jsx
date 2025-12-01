import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
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
    if (!formData.ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    if (!formData.instructions.trim()) newErrors.instructions = 'Instructions are required';

    // Check for at least 2 ingredients (split by new lines)
    const ingredientsArray = formData.ingredients.split('\n').filter(item => item.trim());
    if (ingredientsArray.length < 2) {
      newErrors.ingredients = 'Please enter at least 2 ingredients (one per line)';
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
      console.log('Recipe submitted:', formData);
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        title: '',
        ingredients: '',
        instructions: ''
      });
      
      // Show success message or navigate
      alert('Recipe submitted successfully!');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Add New Recipe</h1>
          <p className="text-gray-600 mt-2">Share your delicious recipe with our community</p>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Recipe Title */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <label className="block text-gray-700 font-medium mb-2">
                Recipe Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter recipe title"
                className={`w-full px-4 py-3 rounded-lg border ${errors.title ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
              />
              {errors.title && (
                <p className="mt-2 text-red-600 text-sm">{errors.title}</p>
              )}
            </div>

            {/* Ingredients */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <label className="block text-gray-700 font-medium mb-2">
                Ingredients *
              </label>
              <p className="text-gray-600 text-sm mb-3">
                Enter each ingredient on a new line. Include quantities and measurements.
              </p>
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                rows="6"
                placeholder={`Example:
• 2 cups all-purpose flour
• 1 cup sugar
• 3 large eggs
• 1 teaspoon vanilla extract`}
                className={`w-full px-4 py-3 rounded-lg border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
              />
              {errors.ingredients && (
                <p className="mt-2 text-red-600 text-sm">{errors.ingredients}</p>
              )}
              <div className="mt-2 text-sm text-gray-500">
                Ingredients count: {formData.ingredients.split('\n').filter(item => item.trim()).length}
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <label className="block text-gray-700 font-medium mb-2">
                Preparation Steps *
              </label>
              <p className="text-gray-600 text-sm mb-3">
                Write each step on a new line. Be clear and detailed.
              </p>
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                rows="6"
                placeholder={`Example:
1. Preheat oven to 350°F (175°C)
2. Mix dry ingredients in a bowl
3. In another bowl, whisk wet ingredients
4. Combine wet and dry ingredients
5. Bake for 25-30 minutes until golden`}
                className={`w-full px-4 py-3 rounded-lg border ${errors.instructions ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
              />
              {errors.instructions && (
                <p className="mt-2 text-red-600 text-sm">{errors.instructions}</p>
              )}
              <div className="mt-2 text-sm text-gray-500">
                Steps count: {formData.instructions.split('\n').filter(step => step.trim()).length}
              </div>
            </div>

            {/* Form Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition w-full sm:w-auto"
                >
                  Cancel
                </button>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Recipe'
                  )}
                </button>
              </div>

              {/* Validation Summary */}
              {Object.keys(errors).length > 0 && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">Please fix the following:</h3>
                  <ul className="list-disc list-inside text-red-600">
                    {errors.title && <li>{errors.title}</li>}
                    {errors.ingredients && <li>{errors.ingredients}</li>}
                    {errors.instructions && <li>{errors.instructions}</li>}
                  </ul>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;
