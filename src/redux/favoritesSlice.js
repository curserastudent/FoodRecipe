import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriteRecipes: [], // Updated to handle favorite food
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const food = action.payload; 
      const existingIndex = state.favoriteRecipes.findIndex(
        (item) => item.idFood === food.idFood 
      );
      if (existingIndex >= 0) {
        state.favoriteRecipes.splice(existingIndex, 1); // Remove from favorites
      } else {
        state.favoriteRecipes.push(food); // Add to favorites
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
