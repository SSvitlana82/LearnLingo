import { getTeachers } from "../../utils/databaseTeachers";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchAll",
  async (params, thunkAPI) => {
    try {
      const response = await getTeachers(params);
      const newTeachers = response.map((teacher, index) => {
        const newTeacher = {
          ...teacher,
          id: index,
        };
        return newTeacher;
      });

      return newTeachers;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
