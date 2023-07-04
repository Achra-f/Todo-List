import { Project } from './project.js';
import { Task } from './task.js';

export class TodoList {
    constructor() {
        this.projects = [new Project('Inbox')];
        this.loadTodoList();
    }

    addProject(name) {
        const newProject = new Project(name);
        this.projects.push(newProject);
        this.saveTodoList();
    }

    getProject(name) {
        return this.projects.find(project => project.name === name);
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

    saveTodoList() {
        const todoListData = this.projects.map(project => ({
          name: project.name,
          tasks: project.tasks.map(task => ({
            title: task.title,
            description: task.description,
            dueDate: task.dueDate,
            priority: task.priority,
            notes: task.notes,
            checklist: task.checklist,
            status: task.status
          }))
        }));
      
        localStorage.setItem('todoList', JSON.stringify(todoListData));
      }

    loadTodoList() {
        const savedTodoList = localStorage.getItem('todoList');
        const projectsLoaded = localStorage.getItem('projectsLoaded');
      
        if (savedTodoList) {
          const todoListData = JSON.parse(savedTodoList);
          this.projects = todoListData.map(projectData => {
            const project = new Project(projectData.name);
            projectData.tasks.forEach(taskData => {
              const task = new Task(
                taskData.title,
                taskData.description,
                taskData.dueDate,
                taskData.priority,
                taskData.notes,
                taskData.checklist,
                taskData.status
              );
              project.tasks.push(task);
            });
            return project;
          });
        } else if (!projectsLoaded) {
          this.addProject('Work');
          this.addProject('Personal');
          this.addTaskToProject('Work', 'Finish report', '2023-07-10');
          this.addTaskToProject('Work', 'Prepare presentation', '2023-07-12');
          this.addTaskToProject('Personal', 'Go grocery shopping', '2023-07-05');
          this.addTaskToProject('Inbox', 'Task 1', '2023-07-04');
          this.addTaskToProject('Inbox', 'Task 2', '2023-07-05');
      
          localStorage.setItem('projectsLoaded', true);
        }
      }



}
