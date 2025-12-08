import { useRecipeStore } from './recipeStore'

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore(state => state.favorites)
  const addFavorite = useRecipeStore(state => state.addFavorite)
  const removeFavorite = useRecipeStore(state => state.removeFavorite)

  const isFavorite = favorites.includes(recipeId)

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId)
    } else {
      addFavorite(recipeId)
    }
  }

  return (
    <button 
      onClick={handleToggleFavorite}
      style={{
        backgroundColor: isFavorite ? '#ffd700' : '#f0f0f0',
        color: isFavorite ? '#000' : '#666',
        border: '1px solid #ccc',
        padding: '5px 10px',
        borderRadius: '4px',
        cursor: 'pointer',
        marginRight: '10px'
      }}
    >
      {isFavorite ? '⭐ Remove Favorite' : '☆ Add to Favorites'}
    </button>
  )
}

export default FavoriteButton