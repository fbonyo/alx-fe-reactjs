import { useRecipeStore } from './recipeStore'  // Change this line

const Recipelist = () => {
  const recipes = useRecipeStore((state) => state.recipes)

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Recipelist