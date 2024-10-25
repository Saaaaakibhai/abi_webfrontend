import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/abi_webfrontend/', // Ensure this is correct
  plugins: [react()],
});
