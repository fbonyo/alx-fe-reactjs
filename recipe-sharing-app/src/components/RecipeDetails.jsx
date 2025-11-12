import { useParams } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'
import FavoriteButton from './FavoriteButton'
import { Link } from 'react-router-dom'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipeId = parseInt(id)
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  )

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found</p>
        <Link to="/">Back to Recipes</Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/">← Back to Recipes</Link>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <div style={{ marginBottom: '20px' }}>
        <FavoriteButton recipeId={recipe.id} />
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
      <EditRecipeForm recipe={recipe} />
    </div>
  )
}

export default RecipeDetails