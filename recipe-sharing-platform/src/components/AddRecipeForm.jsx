import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: ''
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
    if (!formData.steps.trim()) newErrors.steps = 'Preparation steps are required';

    // Check for at least 2 ingredients (split by new lines)
    const ingredientsArray = formData.ingredients.split('\n').filter(item => item.trim());
    if (ingredientsArray.length < 2) {
      newErrors.ingredients = 'Please enter at least 2 ingredients (one per line)';
    }

    // Check for at least 2 steps (split by new lines)
    const stepsArray = formData.steps.split('\n').filter(step => step.trim());
    if (stepsArray.length < 2) {
      newErrors.steps = 'Please enter at least 2 preparation steps (one per line)';
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
        steps: ''
      });
      
      // Show success message or navigate
      alert('Recipe submitted successfully!');
    }, 1000);
  };

  // This function explicitly uses target.value
  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.value; // Explicitly using target.value
    const name = target.name;
    
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-4 md:py-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Add New Recipe</h1>
          <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">
            Share your delicious recipe with our community
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-full md:max-w-2xl lg:max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            {/* Recipe Title */}
            <div className="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg p-4 md:p-6">
              <label className="block text-gray-700 font-medium mb-1 md:mb-2 text-sm md:text-base">
                Recipe Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter recipe title"
                className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border ${errors.title ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base`}
              />
              {errors.title && (
                <p className="mt-1 md:mt-2 text-red-600 text-xs md:text-sm">{errors.title}</p>
              )}
            </div>

            {/* Ingredients */}
            <div className="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg p-4 md:p-6">
              <div className="mb-2 md:mb-3">
                <label className="block text-gray-700 font-medium mb-1 md:mb-2 text-sm md:text-base">
                  Ingredients *
                </label>
                <p className="text-gray-600 text-xs md:text-sm">
                  Enter each ingredient on a new line. Include quantities and measurements.
                </p>
              </div>
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleInputChange}
                rows="4"
                className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base`}
                placeholder={`Example:
• 2 cups all-purpose flour
• 1 cup sugar
• 3 large eggs
• 1 teaspoon vanilla extract`}
              />
              {errors.ingredients && (
                <p className="mt-1 md:mt-2 text-red-600 text-xs md:text-sm">{errors.ingredients}</p>
              )}
              <div className="mt-1 md:mt-2 text-xs md:text-sm text-gray-500">
                Ingredients count: {formData.ingredients.split('\n').filter(item => item.trim()).length}
              </div>
            </div>

            {/* Preparation Steps */}
            <div className="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg p-4 md:p-6">
              <div className="mb-2 md:mb-3">
                <label className="block text-gray-700 font-medium mb-1 md:mb-2 text-sm md:text-base">
                  Preparation Steps *
                </label>
                <p className="text-gray-600 text-xs md:text-sm">
                  Write each step on a new line. Be clear and detailed.
                </p>
              </div>
              <textarea
                name="steps"
                value={formData.steps}
                onChange={handleInputChange}
                rows="4"
                className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border ${errors.steps ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base`}
                placeholder={`Example:
1. Preheat oven to 350°F (175°C)
2. Mix dry ingredients in a bowl
3. In another bowl, whisk wet ingredients
4. Combine wet and dry ingredients
5. Bake for 25-30 minutes until golden`}
              />
              {errors.steps && (
                <p className="mt-1 md:mt-2 text-red-600 text-xs md:text-sm">{errors.steps}</p>
              )}
              <div className="mt-1 md:mt-2 text-xs md:text-sm text-gray-500">
                Steps count: {formData.steps.split('\n').filter(step => step.trim()).length}
              </div>
            </div>

            {/* Form Actions */}
            <div className="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg p-4 md:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="px-4 md:px-6 py-2 md:py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition w-full sm:w-auto text-sm md:text-base"
                >
                  Cancel
                </button>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto mt-2 sm:mt-0 text-sm md:text-base"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <span className="animate-spin rounded-full h-3 md:h-4 w-3 md:w-4 border-b-2 border-white mr-1 md:mr-2"></span>
                      <span className="text-xs md:text-sm">Submitting...</span>
                    </span>
                  ) : (
                    'Submit Recipe'
                  )}
                </button>
              </div>

              {/* Validation Summary */}
              {Object.keys(errors).length > 0 && (
                <div className="mt-3 md:mt-4 p-3 md:p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-1 md:mb-2 text-sm md:text-base">
                    Please fix the following:
                  </h3>
                  <ul className="list-disc list-inside text-red-600 text-xs md:text-sm">
                    {errors.title && <li>{errors.title}</li>}
                    {errors.ingredients && <li>{errors.ingredients}</li>}
                    {errors.steps && <li>{errors.steps}</li>}
                  </ul>
                </div>
              )}
            </div>
          </form>

          {/* Responsive Tips */}
          <div className="mt-6 md:mt-8 p-4 md:p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2 text-sm md:text-base flex items-center">
              <span className="mr-2">💡</span>
              Form Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="text-xs md:text-sm text-blue-700">
                <p className="font-medium mb-1">On Mobile:</p>
                <p>• Use vertical scroll for long inputs</p>
                <p>• Buttons stack vertically</p>
                <p>• Simplified spacing</p>
              </div>
              <div className="text-xs md:text-sm text-blue-700">
                <p className="font-medium mb-1">On Desktop:</p>
                <p>• Larger form with more spacing</p>
                <p>• Buttons arranged horizontally</p>
                <p>• Enhanced shadows and borders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;
