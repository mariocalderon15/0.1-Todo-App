import todoStore from '../../../store/todo.store';
const { Filters } = todoStore;

export const renderPending = (labelElement) => {
    labelElement.textContent = todoStore.getTodos(Filters.Pending).length;
};