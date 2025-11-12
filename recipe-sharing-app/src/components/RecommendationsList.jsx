import { useRecipeStore } from './recipeStore'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations)
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations)
  const recipes = useRecipeStore(state => state.recipes)

  // Generate recommendations when component mounts or when recipes change
  useEffect(() => {
    if (recipes.length > 0) {
      generateRecommendations()
    }
  }, [recipes, generateRecommendations])

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>💡 Recommended For You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available. Add some recipes to get personalized suggestions!</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} style={{ 
            border: '1px solid #4CAF50', 
            padding: '10px', 
            margin: '10px 0',
            backgroundColor: '#f0fff0'
          }}>
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default RecommendationsList