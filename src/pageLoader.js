export class PageLoader {
    constructor(projectList, inboxList) {
        this.projectList = projectList;
        this.inboxList = inboxList;
        this.projectsElement = document.querySelector('#projects');
        this.contentElement = document.querySelector('#content');
    }

    loadInitialData() {
        const initialProjects = this.projectList.getAllProjects();
        const initialTasks = this.inboxList.getAllTasks();

        this.renderProjects(initialProjects);
        this.renderTasks(initialTasks);
    }

    renderProjects(projects) {
        projects.forEach((project) => {
            const projectElement = document.createElement('div');
            projectElement.textContent = project;
            projectElement.classList.add('sidebar__project');
            this.projectsElement.appendChild(projectElement);
        });

        const addProjectButton = document.createElement('button');
        addProjectButton.textContent = 'Add Project';
        addProjectButton.classList.add('sidebar__project');
        this.projectsElement.appendChild(addProjectButton);


    }

    renderTasks(tasks) {
        const tasksEl = document.createElement('div');
        tasksEl.classList.add('tasks');
        tasksEl.textContent = 'Inbox';

        const taskList = document.createElement('div');
        taskList.classList.add('main-content__todo');

        tasks.forEach((task) => {
            const taskElement = document.createElement('div');
            taskElement.textContent = task;
            taskElement.classList.add('main-content__todos');
            taskList.appendChild(taskElement);
        });

        const addTaskButton = document.createElement('button');
        addTaskButton.textContent = 'Add New Task';
        addTaskButton.classList.add('main-content__todos');
        addTaskButton.setAttribute('data-modal', 'task');
        taskList.appendChild(addTaskButton);

        this.contentElement.appendChild(tasksEl);
        this.contentElement.appendChild(taskList);
    }

}