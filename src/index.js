import './style.css';
import { TodoList } from './todoList.js';
import { PageLoad } from './pageLoad.js';

const todoList = new TodoList();
todoList.addProject('Work');
todoList.addProject('Personal');
todoList.addTaskToProject('Work', 'Finish report', '2023-07-10');
todoList.addTaskToProject('Work', 'Prepare presentation', '2023-07-12');
todoList.addTaskToProject('Personal', 'Go grocery shopping', '2023-07-05');
todoList.addTaskToProject('Inbox', 'Task 1', '2023-07-04');
todoList.addTaskToProject('Inbox', 'Task 2', '2023-07-05');

const pageLoad = new PageLoad(todoList);
pageLoad.displayTodoLists();