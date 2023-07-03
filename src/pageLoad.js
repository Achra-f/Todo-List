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

        const inboxProject = this.todoList.getProject('Inbox');

        if (inboxProject) {


            const inboxListElement = document.createElement('div');
            inboxListElement.textContent = inboxProject.name;
            inboxListElement.classList.add('list-item');

            inboxListElement.addEventListener('click', () => {
                this.currentProject = inboxProject;
                this.displayTasks();
            });

            this.listsContainer.appendChild(inboxListElement);

            const projectsTitle = document.createElement('h2');
            projectsTitle.textContent = 'Projects';
            this.listsContainer.appendChild(projectsTitle);
        }

        const otherProjects = this.todoList.projects.filter(project => project.name !== 'Inbox');

        otherProjects.forEach(project => {
            const listElement = document.createElement('div');
            listElement.textContent = project.name;
            listElement.classList.add('list-item');

            listElement.addEventListener('click', () => {
                this.currentProject = project;
                this.displayTasks();
            });

            this.listsContainer.appendChild(listElement);
        });

        const addTaskButton = document.createElement('button');
        addTaskButton.textContent = 'Add Project';
        addTaskButton.id = 'add-project-btn';
        addTaskButton.addEventListener('click', () => {
            addTaskButton.style.display = 'none';
            this.displayTaskForm(buttonContainer, addTaskButton);
        });

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.appendChild(addTaskButton);

        this.listsContainer.appendChild(buttonContainer);
    }


    displayTasks() {
        this.clearTasksContainer();

        if (this.currentProject) {
            const projectTitle = document.createElement('h2');
            projectTitle.textContent = this.currentProject.name;
            this.tasksContainer.appendChild(projectTitle);

            this.currentProject.tasks.forEach(task => {
                const taskElement = document.createElement('div');
                taskElement.textContent = task.title;
                taskElement.classList.add('task-item');
                this.tasksContainer.appendChild(taskElement);
            });
        }

    }

    displayTaskForm(buttonContainer, addTaskButton) {
        this.clearTasksContainer();

        const formContainer = document.createElement('div');
        formContainer.classList.add('form-container');

        const nameInput = document.createElement('input');
        nameInput.type = 'text';

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Add';
        submitButton.classList.add('addBtn');

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.classList.add('cancelBtn');

        formContainer.appendChild(nameInput);
        formContainer.appendChild(submitButton);
        formContainer.appendChild(cancelButton);

        this.listsContainer.appendChild(formContainer);

        submitButton.addEventListener('click', () => {
            const projectName = nameInput.value;

            // Hide the form
            formContainer.style.display = 'none';

            // Clear the tasks container
            this.clearTasksContainer();

            // Show the button and add task button
            buttonContainer.style.display = 'block';
            addTaskButton.style.display = 'block';

            // Add the project if the project name is not empty
            if (projectName.trim() !== '') {
                this.todoList.addProject(projectName);
                this.displayTodoLists();
            }

        });

        cancelButton.addEventListener('click', () => {
            formContainer.style.display = 'none';

            this.clearTasksContainer();

            buttonContainer.style.display = 'block';
            addTaskButton.style.display = 'block';

        });
    }


    clearListsContainer() {
        this.listsContainer.innerHTML = '';
    }

    clearTasksContainer() {
        this.tasksContainer.innerHTML = '';
    }
}