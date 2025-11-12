import React from 'react'
import { useRecipeStore } from './recipeStore'

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm)
  const filterRecipes = useRecipeStore(state => state.filterRecipes)

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    filterRecipes() // Trigger filtering when search term changes
  }

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
      style={{
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }}
    />
  )
}

export default SearchBar