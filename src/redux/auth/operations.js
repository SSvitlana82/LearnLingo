import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUp, signIn, logOut } from "../../utils/auth";
import { getAuth, updateProfile } from "firebase/auth";

export const userSignUp = createAsyncThunk(
  "auth/signUp",
  async (userData, thunkAPI) => {
    const { email, password, name } = userData;
    try {
      const userCredential = await signUp(email, password);
      await updateProfile(userCredential.user, { displayName: name });

      return userCredential.user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const userSignIn = createAsyncThunk(
  "auth/signIn",
  async (userData, thunkAPI) => {
    const { email, password } = userData;
    try {
      const userCredential = await signIn(email, password);
      return userCredential.user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const userLogOut = createAsyncThunk(
  "auth/logOut",
  async (userData, thunkAPI) => {
    try {
      await logOut();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
