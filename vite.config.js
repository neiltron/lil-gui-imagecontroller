import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'main.js'),
      name: 'YOUR_LIBRARY_NAME',
      fileName: (format) => `lil-gui-imagecontroller.${format}.js`
    }
  }
});