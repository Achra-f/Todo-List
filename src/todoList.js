import { Project } from './project.js';
import { Task } from './task.js';

export class TodoList {
    constructor() {
        this.projects = [new Project('Inbox')];
    }

    addProject(name) {
        const newProject = new Project(name);
        this.projects.push(newProject);
    }

    addTaskToProject(projectName, taskDescription, taskDueDate) {
        const project = this.projects.find(project => project.name === projectName);
        if (project) {
            const newTask = new Task(taskDescription, taskDueDate);
            project.tasks.push(newTask);
        }
    }

    getTasksByProject(projectName) {
        const project = this.projects.find(project => project.name === projectName);
        if (project) {
            return project.tasks;
        }
        return [];
    }
}
