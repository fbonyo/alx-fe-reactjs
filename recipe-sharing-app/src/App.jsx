import RecipeList from './components/RecipeList'  // Keep filename RecipeList and import as RecipeList
import AddRecipeForm from './components/AddRecipeForm'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm />
      <RecipeList />  {/* Keep this as RecipeList */}
    </div>
  )
}

export default App