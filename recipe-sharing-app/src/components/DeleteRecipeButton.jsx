import { useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)
  const navigate = useNavigate()

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId)
      navigate('/') // Navigate back to home after deletion
    }
  }

  return (
    <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>
      Delete Recipe
    </button>
  )
}

export default DeleteRecipeButton