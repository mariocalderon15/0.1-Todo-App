import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
};

const state = {
    todos: [ new Todo('Prueba') ],
    filter: Filters.All
};

const initStore = () => {
    console.log('initStore');
};

const loadStore = () => {
    if (!localStorage.getItem('state')) return;

    const { todos = [], filter = Filters.All } = JSON.parse(localStorage.getItem('state'));
    state.todos = todos.map(todo => {
        const newTodo = new Todo(todo.description);
        newTodo.id = todo.id;
        newTodo.done = todo.done;
        newTodo.createdAt = new Date(todo.createdAt);
        return newTodo;
    });
    state.filter = filter;
};

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
};

const getTodos = (filter = Filters.All) => {
    const actions = {
        [Filters.All]: () => [...state.todos],
        [Filters.Completed]: () => state.todos.filter(todo => todo.done),
        [Filters.Pending]: () => state.todos.filter(todo => !todo.done)
    };
    if (!actions[filter]) throw new Error(`Option ${filter} is not valid`);
    return actions[filter]();
};

const addTodo = (description) => {
    if (!description) throw new Error('Description is required');
    state.todos.push(new Todo(description));
    saveStateToLocalStorage();
};

const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => 
        todo.id === todoId ? {...todo, done: !todo.done} : todo
    );
    saveStateToLocalStorage();
};

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveStateToLocalStorage();
};

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);
    saveStateToLocalStorage();
};

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
    saveStateToLocalStorage();
};

const getCurrentFilter = () => state.filter;

export default {
    Filters,
    state,
    initStore,
    loadStore,
    saveStateToLocalStorage,
    getTodos,
    addTodo,
    toggleTodo,
    deleteCompleted,
    deleteTodo,
    setFilter,
    getCurrentFilter
};