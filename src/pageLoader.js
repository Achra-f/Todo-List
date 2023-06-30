import { Task } from './addTask';
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
        this.projectsElement.innerHTML = '';

        projects.forEach((project) => {
            const projectElement = document.createElement('div');
            projectElement.textContent = project;
            projectElement.classList.add('sidebar__project');
            this.projectsElement.appendChild(projectElement);
        });

        const addProjectButton = document.createElement('button');
        addProjectButton.textContent = 'Add Project';
        addProjectButton.classList.add('sidebar__project');
        addProjectButton.addEventListener('click', () => {
            this.createProjectModal();
        });
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
            taskElement.textContent = task.title;
            taskElement.classList.add('main-content__todos');
            taskList.appendChild(taskElement);

            taskElement.addEventListener('click', () => {
                this.openTaskModal(task);
            });

            taskList.appendChild(taskElement);
        });

        const addTaskButton = document.createElement('button');
        addTaskButton.textContent = 'Add New Task';
        addTaskButton.classList.add('main-content__todos');
        addTaskButton.setAttribute('data-modal', 'task');
        addTaskButton.addEventListener('click', () => {
            this.createTaskModal();
        });
        taskList.appendChild(addTaskButton);

        this.contentElement.innerHTML = '';
        this.contentElement.appendChild(tasksEl);
        this.contentElement.appendChild(taskList);
    }

    openTaskModal(task) {
        const modalContainer = document.createElement('div');
        modalContainer.classList.add('modal-container');

        const closeButton = document.createElement('button');
        closeButton.classList.add('modal-close');
        closeButton.textContent = 'Close';

        closeButton.addEventListener('click', () => {
            modalContainer.remove();
        });

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        modalContent.innerHTML = `
          <h2>${task.title}</h2>
          <div>
          <div>Description:<p>${task.description}</p></div>
          <div>Due Date:<p>${task.dueDate}</p></div>
          <div>Priority:<p>${task.priority}</p></div>
          <div>Notes:<p>${task.notes}</p></div>
          <ul>
            ${task.checkList.map(item => `<li>${item}</li>`).join('')}
          </ul>
          </div>
          
        `;

        modalContent.appendChild(closeButton);
        modalContainer.appendChild(modalContent);

        document.body.appendChild(modalContainer);
    }

    createTaskModal(createTaskCallback) {
        const modalContainer = document.createElement('div');
        modalContainer.classList.add('modal-container');

        const formHTML = `
        <div class="modal-content">
        <h2>New Task</h2>
        <form>
            <label for="title">Title:</label>
            <input type="text" id="title" name="title">
            
            <label for="description">Description:</label>
            <textarea id="description" name="description"></textarea>
            
            <label for="dueDate">Due Date:</label>
            <input type="date" id="dueDate" name="dueDate">
            
            <label for="priority">Priority:</label>
            <select id="priority" name="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            </select>
            
            <label for="notes">Notes:</label>
            <textarea id="notes" name="notes"></textarea>
            
            <label for="checklist">Checklist:</label>
            <textarea id="checklist" name="checklist"></textarea>
            
            <button type="submit">Create Task</button>
        </form>
        <button class="modal-close">Close</button>
        </div>
    `;

        modalContainer.insertAdjacentHTML('beforeend', formHTML);

        const closeButton = modalContainer.querySelector('.modal-close');
        closeButton.addEventListener('click', () => {
            modalContainer.remove();
        });

        // Append the modal container to the document body
        document.body.appendChild(modalContainer);

        modalContainer.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const taskData = Object.fromEntries(formData.entries());

            const newTask = new Task(
                taskData.title,
                taskData.description,
                taskData.dueDate,
                taskData.priority,
                taskData.notes,
                taskData.checklist.split('\n')
            );

            this.inboxList.addTask(newTask);
            this.renderTasks(this.inboxList.getAllTasks());

            modalContainer.remove();
        });

    }

    createProjectModal() {
        const modalContainer = document.createElement('div');
        modalContainer.classList.add('modal-container');

        const formHTML = `
    <div class="modal-content">
      <h2>New Project</h2>
      <form>
        <label for="projectName">Project Name:</label>
        <input type="text" id="projectName" name="projectName">
        <button type="submit">Create Project</button>
      </form>
      <button class="modal-close">Close</button>
    </div>
  `;

        modalContainer.insertAdjacentHTML('beforeend', formHTML);

        const closeButton = modalContainer.querySelector('.modal-close');
        closeButton.addEventListener('click', () => {
            modalContainer.remove();
        });

        // Append the modal container to the document body
        document.body.appendChild(modalContainer);

        modalContainer.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const projectName = formData.get('projectName');

            if (projectName.trim() !== '') {
                // Add the new project to the ProjectList
                this.projectList.addProject(projectName);
                // Re-render the projects
                this.renderProjects(this.projectList.getAllProjects());
                // Close the modal
                modalContainer.remove();
            }
        });
    }

}


