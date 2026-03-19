import { defineConfig } from "vite";

export default defineConfig({
  base: '/', 
  build: {
    rollupOptions: {
      input: {
        login: 'index.html',
        todo: 'todo.html',
      }
    }
  }
});