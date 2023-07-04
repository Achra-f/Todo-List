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
            const projectElement = document.createElement('div');
            projectElement.classList.add('list-item');

            const projectName = document.createElement('span');
            projectName.textContent = project.name;
            projectElement.appendChild(projectName);

            const deleteIcon = document.createElement('i');
            deleteIcon.classList.add('fa', 'fa-trash-o');

            deleteIcon.addEventListener('click', () => {
                this.deleteProject(project);
            });

            projectElement.appendChild(deleteIcon);

            projectElement.addEventListener('click', () => {
                this.currentProject = project;
                this.displayTasks();
            });

            this.listsContainer.appendChild(projectElement);
        });

        const addProjectButton = document.createElement('button');
        addProjectButton.textContent = 'Add Project';
        addProjectButton.id = 'add-project-btn';
        addProjectButton.addEventListener('click', () => {
            addProjectButton.style.display = 'none';
            this.displayProjectForm(buttonContainer, addProjectButton);
        });

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.appendChild(addProjectButton);

        this.listsContainer.appendChild(buttonContainer);
    }

    deleteProject(project) {
        const projectIndex = this.todoList.projects.indexOf(project);
        if (projectIndex !== -1) {
            this.todoList.projects.splice(projectIndex, 1);
            if (this.currentProject === project) {
                this.currentProject = null;
                this.clearTasksContainer();
            }
            this.displayTodoLists();
            this.displayTasks()
            this.todoList.saveTodoList();
        }
    }

    displayTasks() {
        this.clearTasksContainer();

        if (this.currentProject) {
            const projectTitle = document.createElement('h2');
            projectTitle.textContent = this.currentProject.name;
            this.tasksContainer.appendChild(projectTitle);

            this.currentProject.tasks.forEach(task => {
                const taskElement = document.createElement('div');
                taskElement.classList.add('task-item');

                const taskTitle = document.createElement('span');
                taskTitle.textContent = task.title;
                taskElement.appendChild(taskTitle);

                const deleteIcon = document.createElement('i');
                deleteIcon.classList.add('fa', 'fa-trash-o');
                taskElement.appendChild(deleteIcon);

                taskElement.addEventListener('click', () => {
                    this.openTaskDetails(task);
                });

                deleteIcon.addEventListener('click', (event) => {
                    event.stopPropagation();
                    this.deleteTask(task);
                });

                this.tasksContainer.appendChild(taskElement);
            });

            const addButton = document.createElement('button');
            addButton.classList.add('addBtn');
            addButton.textContent = 'Add Task';
            addButton.addEventListener('click', () => {
                this.displayTaskForm();
            });

            this.tasksContainer.appendChild(addButton);
        }
    }

    openTaskDetails(task) {
        const taskModal = document.getElementById('taskModal');
        const taskTitle = document.getElementById('taskTitle');
        const taskDescription = document.getElementById('taskDescription');
        const taskDueDate = document.getElementById('taskDueDate');
        const taskPriority = document.getElementById('taskPriority');
        const taskNotes = document.getElementById('taskNotes');
        const taskChecklist = document.getElementById('taskChecklist');
        const taskStatus = document.getElementById('taskStatus');

        taskTitle.textContent = task.title;
        taskDescription.textContent = task.description;
        taskDueDate.textContent = 'Due Date: ' + task.dueDate;
        taskPriority.textContent = 'Priority: ' + task.priority;
        taskNotes.textContent = 'Notes: ' + task.notes;
        taskChecklist.innerHTML = '';
        task.checklist.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            taskChecklist.appendChild(li);
        });
        taskStatus.textContent = 'Status: ' + task.status;

        taskModal.style.display = 'block';

        const closeBtn = document.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            taskModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === taskModal) {
                taskModal.style.display = 'none';
            }
        });
    }

    deleteTask(task) {
        if (this.currentProject) {
            const taskIndex = this.currentProject.tasks.indexOf(task);
            if (taskIndex > -1) {
                this.currentProject.tasks.splice(taskIndex, 1);
                this.displayTasks();
                console.log('test')
            }
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

            formContainer.style.display = 'none';

            this.clearTasksContainer();

            buttonContainer.style.display = 'block';
            addTaskButton.style.display = 'block';

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

        const notesLabel = document.createElement('label');
        notesLabel.textContent = 'Notes:';
        const notesInput = document.createElement('textarea');

        const addButton = document.createElement('button');
        addButton.classList.add('addBtn');
        addButton.textContent = 'Add Task';
        addButton.addEventListener('click', () => {
            const title = titleInput.value;
            const description = descriptionInput.value;
            const dueDate = dueDateInput.value;
            const priority = priorityInput.value;
            const notes = notesInput.value;

            const newTask = new Task(title, description, dueDate, priority);
            newTask.notes = notes;
            this.currentProject.addTask(newTask);

            titleInput.value = '';
            descriptionInput.value = '';
            dueDateInput.value = '';
            priorityInput.value = '';
            notesInput.value = '';

            this.displayTasks();
        });

        const cancelButton = document.createElement('button');
        cancelButton.classList.add('cancelBtn');
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
        formContainer.appendChild(notesLabel);
        formContainer.appendChild(notesInput);
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