import { createTodoHTML } from './create-todo-html';

export const renderTodos = (ulElement, todos = []) => {
    ulElement.innerHTML = '';
    todos.forEach(todo => ulElement.append(createTodoHTML(todo)));
};