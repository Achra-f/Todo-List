import './style.css';
import { Project } from './project';
import { Task } from './task';
import { PageLoader } from './pageLoader';


const pageLoader = new PageLoader();

const inbox = new Project('Inbox');
inbox.addTask(new Task('Inbox Task 1', 'Description 1', '2023-07-05', 'High', 'Some notes', ['Task 1 Subtask 1', 'Task 1 Subtask 2']));

const project1 = new Project('Project 1');
project1.addTask(new Task('Project 1 Task 1', 'Description 1', '2023-07-10', 'Medium', 'Some notes', []));

const project2 = new Project('Project 2');
project2.addTask(new Task('Project 2 Task 1', 'Description 1', '2023-07-15', 'Low', 'Some notes', []));

const project3 = new Project('Project 3');
project3.addTask(new Task('Project 3 Task 1', 'Description 1', '2023-07-20', 'High', 'Some notes', ['Task 1 Subtask 1', 'Task 1 Subtask 2', 'Task 1 Subtask 3']));

const projects = [inbox, project1, project2, project3];

pageLoader.loadProjects(projects);



