// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice'; // Assuming you have an authSlice

export const store = configureStore({
  reducer: {
    auth: authReducer, // Your auth reducer here
  },
});
