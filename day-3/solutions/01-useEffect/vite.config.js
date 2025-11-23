import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './solutions/01-useEffect',
  server: {
    port: 3015,
  },
});
