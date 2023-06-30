export class ProjectList {
    constructor() {
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project);
    }

    removeProject(project) {
        const projectIndex = this.projects.indexOf(project);
        if (projectIndex !== -1) {
            this.projects.splice(projectIndex, 1);
        }
    }

    getAllProjects() {
        return this.projects;
    }
}