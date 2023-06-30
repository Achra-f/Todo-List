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
            this.projectsElement.appendChild(projectElement);
        });
    }

    renderTasks(tasks) {
        tasks.forEach((task) => {
            const taskElement = document.createElement('div');
            taskElement.textContent = task;
            this.contentElement.appendChild(taskElement);
        });
    }
}