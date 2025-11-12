import { useRecipeStore } from './recipeStore'
import { Link } from 'react-router-dom'
import DeleteRecipeButton from './DeleteRecipeButton'
import FavoriteButton from './FavoriteButton'

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes)
  const searchTerm = useRecipeStore((state) => state.searchTerm)
  const recipes = useRecipeStore((state) => state.recipes)

  // Use filteredRecipes if there's a search term, otherwise use all recipes
  const displayRecipes = searchTerm ? filteredRecipes : recipes

  return (
    <div>
      <h2>Recipes</h2>
      {displayRecipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
          <div>
            <FavoriteButton recipeId={recipe.id} />
            <DeleteRecipeButton recipeId={recipe.id} />
          </div>
        </div>
      ))}
      {searchTerm && displayRecipes.length === 0 && (
        <p>No recipes found matching "{searchTerm}"</p>
      )}
    </div>
  )
}

export default RecipeList