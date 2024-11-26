// src/features/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Initial state with no user
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Ensure this includes profileImage and other data
    },
    logout: (state) => {
      state.user = null; // Clear user info on logout
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
