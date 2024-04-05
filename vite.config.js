import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import path from 'path';

// https://vitejs.dev/config/

import dotenv from 'dotenv';
const __dirname = path.resolve(path.dirname(''));
dotenv.config({ path: resolve(__dirname, '.env') });
export default defineConfig({
  plugins: [react()],
})
