import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: {
    name: "marcio",
  },
};

const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.email = action.payload.email;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userName = action.payload.userName;
    },
    setSignOut: (state) => {
      state.email = null;
      state.userName = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setSignIn, setSignOut } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;
export const selectUser = (state) => state.userAuth.user;
export default authSlice.reducer;
