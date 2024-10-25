import { getTeachers } from "../../utils/database.js";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchAll",
  async (params, thunkAPI) => {
    try {
      const response = await getTeachers(params);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
