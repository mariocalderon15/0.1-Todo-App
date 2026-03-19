import html from '../app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos, renderPending } from './models/use-cases';

if (!localStorage.getItem('isLoggedIn')) {
    window.location.href = 'index.html';
}

const ElementsIDS = {
    borrarCompletado: '.clear-completed',
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    TodoFilters: '.filtro',
    PendingCountLabel: '#pending-count',
};

export const App = (elementId) => {
    const container = document.querySelector(elementId);
    if (!container) return console.error(`El elemento con id ${elementId} no existe`);

    container.innerHTML = '';
    const app = document.createElement('div');
    app.innerHTML = html;
    container.append(app);

    const newDescriptionInput = app.querySelector(ElementsIDS.NewTodoInput);
    const todoListUl = app.querySelector(ElementsIDS.TodoList);
    const clearCompletedBtn = app.querySelector(ElementsIDS.borrarCompletado);
    const filtersLis = app.querySelectorAll(ElementsIDS.TodoFilters);
    const pendingCountLabel = app.querySelector(ElementsIDS.PendingCountLabel);

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(todoListUl, todos);
        renderPending(pendingCountLabel);
    };

    displayTodos();

    newDescriptionInput.addEventListener('keydown', ({ key, target }) => {
        if (key !== 'Enter') return;
        const description = target.value.trim();
        if (!description) return;
        todoStore.addTodo(description);
        displayTodos();
        target.value = '';
    });

    todoListUl.addEventListener('click', ({ target }) => {
        if (target.classList.contains('toggle')) {
            const li = target.closest('[data-id]');
            todoStore.toggleTodo(li.getAttribute('data-id'));
            displayTodos();
        } else if (target.classList.contains('destroy')) {
            const li = target.closest('[data-id]');
            todoStore.deleteTodo(li.getAttribute('data-id'));
            displayTodos();
        }
    });

    clearCompletedBtn.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersLis.forEach(el => {
        el.addEventListener('click', (event) => {
            filtersLis.forEach(f => f.classList.remove('selected'));
            event.target.classList.add('selected');

            switch (event.target.textContent) {
                case 'Todos':
                    todoStore.setFilter(todoStore.Filters.All);
                    break;
                case 'Pendientes':
                    todoStore.setFilter(todoStore.Filters.Pending);
                    break;
                case 'Completados':
                    todoStore.setFilter(todoStore.Filters.Completed);
                    break;
            }
            displayTodos();
        });
    });
};