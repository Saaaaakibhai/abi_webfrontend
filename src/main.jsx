// src/main.jsx or src/index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.jsx';
import { Provider } from 'react-redux';  // Import Provider
import { store } from './store';  // Import the Redux store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  {/* Wrap your app with Provider and pass the store */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
