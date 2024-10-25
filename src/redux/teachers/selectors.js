import { createSelector } from "@reduxjs/toolkit";

// Basic selector to get the entire teachers state
export const selectTeachersState = (state) => state.teachers;

// Selector to get the list of teacher items
export const selectTeachersItems = (state) => state.teachers.items;

// Selector to get the loading status
export const selectTeachersLoading = createSelector(
  selectTeachersState,
  (state) => state.teachers.isLoading
);

// Selector to get the error message (if any)
export const selectTeachersError = createSelector(
  selectTeachersState,
  (state) => state.teachers.error
);
