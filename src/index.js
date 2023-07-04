import './style.css';
import { TodoList } from './todoList.js';
import { PageLoad } from './pageLoad.js';

const todoList = new TodoList();


const pageLoad = new PageLoad(todoList);
pageLoad.displayTodoLists();