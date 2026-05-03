import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
   toggleFavorite: (state, action) => {
    const recipe = action.payload;
    if (state.favoriterecipes.includes(recipe.foodID)) {
      state.favoriterecipes = state.favoriterecipes.filter((id) => id !== recipe.foodID);
    } else {
      state.favoriterecipes.push(recipe);
    }
  }
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
