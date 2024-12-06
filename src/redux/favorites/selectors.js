import { createSelector } from "@reduxjs/toolkit";

// Basic selector to get the entire teachers state
export const selectFavoriteState = (state) => state.favorite;

// Selector to get the list of teacher items
export const selectFavoriteItems = (state) => state.favorite.items;

// Selector to get the loading status
export const selectFavoriteLoading = createSelector(
  selectFavoriteState,
  (state) => state.favorite.isLoading
);

// Selector to get the error message (if any)
export const selectFavoriteError = createSelector(
  selectFavoriteState,
  (state) => state.favorite.error
);
