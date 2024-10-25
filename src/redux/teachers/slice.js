import { fetchTeachers } from "./operations";
import { createSlice } from "@reduxjs/toolkit";

const fetchIsLoading = (state) => {
  state.isLoading = true;
};
const fetchError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTeachers.pending, fetchIsLoading)
      .addCase(fetchTeachers.rejected, fetchError);
  },
});
export default teachersSlice.reducer;
