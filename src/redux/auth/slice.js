import { createSlice } from "@reduxjs/toolkit";
import { userSignUp, userSignIn, userLogOut } from "./operations";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const onRejected = (state, action) => {
  state.isLoading = false;
  if (action.payload === "Unable to fetch user") {
    return;
  }
  toast.error(action.payload, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },

    isLoggedIn: false,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.displayName;
        state.user.id = action.payload.uid;

        state.isLoggedIn = true;
      })
      .addCase(userSignIn.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user.email = action.payload.email;
        state.user.name = action.payload.displayName;
        state.user.id = action.payload.uid;
        state.isLoggedIn = true;
      })
      .addCase(userLogOut.fulfilled, (state) => {
        state.user = { name: null, email: null };

        state.isLoggedIn = false;
      })

      .addCase(userSignUp.rejected, onRejected)
      .addCase(userSignIn.rejected, onRejected)
      .addCase(userLogOut.rejected, onRejected);
  },
});
export const authReducer = authSlice.reducer;
