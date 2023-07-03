export class PageLoad {
    constructor(todoList) {
        this.todoList = todoList;
        this.listsContainer = document.getElementById('lists');
        this.tasksContainer = document.getElementById('tasks');
        this.currentProject = null;
    }

    displayTodoLists() {
        this.clearListsContainer();
        this.clearTasksContainer();

        this.todoList.projects.forEach((project, index) => {
            const listElement = document.createElement('div');
            listElement.textContent = project.name;
            listElement.classList.add('list-item');

            // Add event listener to show associated tasks when clicked
            listElement.addEventListener('click', () => {
                this.currentProject = project;
                this.displayTasks(project.tasks);
            });

            this.listsContainer.appendChild(listElement);
        });
    }

    displayTasks(tasks) {
        this.clearTasksContainer();

        const listTitle = document.createElement('h2');
        listTitle.textContent = this.currentProject.name;
        this.tasksContainer.appendChild(listTitle);
        tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.textContent = task.title;
            taskElement.classList.add('task-item');
            this.tasksContainer.appendChild(taskElement);
        });
    }

    clearListsContainer() {
        this.listsContainer.innerHTML = '';
    }

    clearTasksContainer() {
        this.tasksContainer.innerHTML = '';
    }
}