import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    currentUser: null,
    error: null,
    loggedInUser: null,
  },
  reducers: {
    initialUserData: (state, action) => {
      if (action.payload) {
        const { displayName, email, photoURL } = action?.payload?.user;
        return {
          ...state,
          loading: false,
          currentUser: { displayName, email, photoURL },
        };
      } else {
        return {
          ...state,
          loading: false,
          currentUser: null,
        };
      }
    },
    registerUser: (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        currentUser: action.payload,
      };
    },
    registerFailed: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    signIn: (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        currentUser: action.payload,
      };
    },
    loggedInUserData: (state, action) => {
      return {
        ...state,
        loggedInUser: action.payload,
      };
    },
    signOutCurrentUser: (state, action) => {
      return {
        ...state,
        error: null,
        currentUser: null,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  initialUserData,
  registerUser,
 
  signIn,
  loggedInUserData,
  signOutCurrentUser,
  registerFailed,
} = userSlice.actions;


export default userSlice.reducer;
