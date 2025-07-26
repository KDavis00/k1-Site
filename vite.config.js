import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/k1-Site/', // 👈 THIS IS CRUCIAL
  plugins: [react()],
});
