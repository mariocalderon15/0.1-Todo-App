import { defineConfig } from "vite";

export default defineConfig({
  base: '/0.1-Todo-App/', 
  build: {
    rollupOptions: {
      input: {
        login: 'index.html',
        todo: 'todo.html',
      }
    }
  }
});