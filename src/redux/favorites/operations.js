import { getTeachersFavorite } from "../../utils/databaseFavorite";
import { addTeacherFavorite } from "../../utils/databaseFavorite";
import { deleteTeacher } from "../../utils/databaseFavorite";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFavorite = createAsyncThunk(
  "favorite/fetchAll",
  async (params, thunkAPI) => {
    console.log("start");
    try {
      const response = await getTeachersFavorite(params.userId, params.filters);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  "favorite/addFavorite",
  async (params, thunkAPI) => {
    try {
      const response = await addTeacherFavorite(
        params.teacherId,
        params.userId
      );
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  "favorite/deleteFavorite",
  async (favoritesId, thunkAPI) => {
    try {
      await deleteTeacher(favoritesId);

      return favoritesId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
