import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './solutions/02-data-fetching',
  server: {
    port: 3016,
  },
});
