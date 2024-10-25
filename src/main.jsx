// index.jsx or App.jsx (wherever your entry point is)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/abi_webfrontend/">
      <RouterProvider router={router} />
    </BrowserRouter>
  </StrictMode>
);
