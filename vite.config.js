import { defineConfig } from "vite";

export default defineConfig({
  base: '/0.1-Todo-App/', // la subcarpeta donde se sirve la página en GitHub Pages
  build: {
    rollupOptions: {
      input: {
        login: 'index.html',
        todo: 'todo.html',
      }
    }
  }
});