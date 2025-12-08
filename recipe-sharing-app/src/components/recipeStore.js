import { create } from 'zustand'

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  
  // Recipe management actions
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  setRecipes: (recipes) => set({ recipes }),
  
  // Search and filtering actions
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  
  // Favorites actions
  addFavorite: (recipeId) => set((state) => ({ 
    favorites: [...state.favorites, recipeId] 
  })),
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  // Recommendations action
  generateRecommendations: () => set((state) => {
    // Simple recommendation logic: recommend recipes similar to favorites
    const favoriteRecipes = state.recipes.filter(recipe => 
      state.favorites.includes(recipe.id)
    );
    
    // If no favorites, recommend random recipes
    if (favoriteRecipes.length === 0) {
      const randomRecommendations = state.recipes
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      return { recommendations: randomRecommendations };
    }
    
    // Otherwise, recommend recipes with similar titles/descriptions
    const recommended = state.recipes.filter(recipe => {
      const isFavorite = state.favorites.includes(recipe.id);
      if (isFavorite) return false; // Don't recommend already favorited recipes
      
      // Check if recipe shares keywords with favorite recipes
      const favoriteKeywords = favoriteRecipes.flatMap(fav => 
        `${fav.title} ${fav.description}`.toLowerCase().split(' ')
      );
      const recipeKeywords = `${recipe.title} ${recipe.description}`.toLowerCase().split(' ');
      
      return recipeKeywords.some(keyword => 
        favoriteKeywords.includes(keyword) && keyword.length > 3
      ) || Math.random() > 0.7; // Include some random recommendations
    });
    
    return { recommendations: recommended.slice(0, 5) }; // Limit to 5 recommendations
  })
}))

export { useRecipeStore }