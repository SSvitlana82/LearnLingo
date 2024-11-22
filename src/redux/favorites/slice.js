import { fetchFavorite } from "./operations";
import { addFavorite } from "./operations";
import { deleteFavorite } from "./operations";
import { createSlice } from "@reduxjs/toolkit";

const fetchIsLoading = (state) => {
  state.isLoading = true;
};
const fetchError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchFavorite.pending, fetchIsLoading)
      .addCase(fetchFavorite.rejected, fetchError)
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addFavorite.pending, fetchIsLoading)
      .addCase(addFavorite.rejected, fetchError)
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter((item) => {
          return item.id !== action.payload.id;
        });
      })
      .addCase(deleteFavorite.pending, fetchIsLoading)
      .addCase(deleteFavorite.rejected, fetchError);
  },
});

export default favoriteSlice.reducer;
