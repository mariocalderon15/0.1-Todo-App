import './style-app.css';
import { App } from './todos/app';
import todoStore from './store/todo.store';
import { logout } from './todos/logout/logout';

logout();                // cerrar sesión si es necesario
todoStore.loadStore();    // cargar tareas desde localStorage
App('#app');              // inicializar app en contenedor principal