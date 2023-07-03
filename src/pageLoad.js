import { Task } from "./task";
import { Project } from "./project";
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
            this.displayProjectForm(buttonContainer, addTaskButton);
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

            const addButton = document.createElement('button');
            addButton.textContent = 'Add Task';
            addButton.addEventListener('click', () => {
                this.displayTaskForm();
            });

            this.tasksContainer.appendChild(addButton);
        }
    }


    displayProjectForm(buttonContainer, addTaskButton) {
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

    displayTaskForm() {
        this.clearTasksContainer();

        const formContainer = document.createElement('div');
        formContainer.classList.add('form-container');

        const titleLabel = document.createElement('label');
        titleLabel.textContent = 'Title:';
        const titleInput = document.createElement('input');
        titleInput.type = 'text';

        const descriptionLabel = document.createElement('label');
        descriptionLabel.textContent = 'Description:';
        const descriptionInput = document.createElement('textarea');

        const dueDateLabel = document.createElement('label');
        dueDateLabel.textContent = 'Due Date:';
        const dueDateInput = document.createElement('input');
        dueDateInput.type = 'date';

        const priorityLabel = document.createElement('label');
        priorityLabel.textContent = 'Priority:';
        const priorityInput = document.createElement('select');
        const option1 = document.createElement('option');
        option1.textContent = 'High';
        const option2 = document.createElement('option');
        option2.textContent = 'Medium';
        const option3 = document.createElement('option');
        option3.textContent = 'Low';
        priorityInput.appendChild(option1);
        priorityInput.appendChild(option2);
        priorityInput.appendChild(option3);

        const addButton = document.createElement('button');
        addButton.textContent = 'Add Task';
        addButton.addEventListener('click', () => {
            const title = titleInput.value;
            const description = descriptionInput.value;
            const dueDate = dueDateInput.value;
            const priority = priorityInput.value;

            // Create a new task object and add it to the current project
            const newTask = new Task(title, description, dueDate, priority);
            this.currentProject.addTask(newTask);

            // Clear the form inputs
            titleInput.value = '';
            descriptionInput.value = '';
            dueDateInput.value = '';
            priorityInput.value = '';

            // Display the updated task list
            this.displayTasks();
        });

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', () => {
            this.clearTasksContainer();
            this.displayTasks();
        });

        formContainer.appendChild(titleLabel);
        formContainer.appendChild(titleInput);
        formContainer.appendChild(descriptionLabel);
        formContainer.appendChild(descriptionInput);
        formContainer.appendChild(dueDateLabel);
        formContainer.appendChild(dueDateInput);
        formContainer.appendChild(priorityLabel);
        formContainer.appendChild(priorityInput);
        formContainer.appendChild(addButton);
        formContainer.appendChild(cancelButton);

        this.tasksContainer.appendChild(formContainer);
    }



    clearListsContainer() {
        this.listsContainer.innerHTML = '';
    }

    clearTasksContainer() {
        this.tasksContainer.innerHTML = '';
    }
}