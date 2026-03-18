import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriteRecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const article = action.payload; 
      const existingIndex = state.favoriteRecipes.findIndex(
        (item) => item.id === article.idArticle 
      );
      if (existingIndex >= 0) {
        state.favoriteRecipes.splice(existingIndex, 1); // Remove from favorites
      } else {
        state.favoriteRecipes.push(article); // Add to favorites
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
