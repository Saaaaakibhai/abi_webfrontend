// src/features/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Set initial state for user
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Set user information
    },
    logout: (state) => {
      state.user = null; // Clear user info on logout
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
