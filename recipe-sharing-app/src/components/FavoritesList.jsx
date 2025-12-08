import { useRecipeStore } from './recipeStore'
import { Link } from 'react-router-dom'

const FavoritesList = () => {
  const favorites = useRecipeStore(state => 
    state.favorites.map(id =>
      state.recipes.find(recipe => recipe.id === id)
    ).filter(recipe => recipe !== undefined) // Filter out undefined recipes
  )
  const removeFavorite = useRecipeStore(state => state.removeFavorite)

  const handleRemoveFavorite = (recipeId) => {
    removeFavorite(recipeId)
  }

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>⭐ My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet. Start adding some!</p>
      ) : (
        favorites.map(recipe => (
          <div key={recipe.id} style={{ 
            border: '1px solid #ffd700', 
            padding: '10px', 
            margin: '10px 0',
            backgroundColor: '#fff9e6'
          }}>
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
            <button 
              onClick={() => handleRemoveFavorite(recipe.id)}
              style={{
                backgroundColor: '#ff6b6b',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Remove from Favorites
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default FavoritesList