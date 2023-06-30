import './style.css';
import { ProjectList } from './projectList';
import { InboxList } from './inboxList';
import { PageLoader } from './pageLoader';
import { Task } from './addTask';

const projectList = new ProjectList();
const inboxList = new InboxList();



const task1 = new Task('Complete assignment', 'Finish the project assignment', '2023-07-01', 'High', 'Take references from the textbook', ['Task 1', 'Task 2', 'Task 3']);
inboxList.addTask(task1);

const task2 = new Task('Buy groceries', 'Purchase essential items for the week', '2023-07-02', 'Medium', 'Remember to buy milk', ['Task 1', 'Task 2']);
inboxList.addTask(task2);

// Retrieve all tasks
const allTasks = inboxList.getAllTasks();
console.log(allTasks);

const pageLoader = new PageLoader(projectList, inboxList);
pageLoader.loadInitialData();