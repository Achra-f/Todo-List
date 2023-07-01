export class PageLoader {
    constructor() {
        this.content = document.getElementById('content');
        this.sidebar = document.getElementById('sidebar');
    }

    loadProjects(projects) {
        this.sidebar.innerHTML = '';
        projects.forEach((project) => {
            const projectElement = document.createElement('div');
            projectElement.textContent = project.getTitle();
            projectElement.addEventListener('click', () => {
                this.toggleTasks(project);
            });
            this.sidebar.appendChild(projectElement);
        });
    }

    loadTasks(project) {
        this.content.innerHTML = '';
        const tasksDiv = document.createElement('div');

        project.tasks.forEach((task) => {
            const taskElement = document.createElement('div');
            taskElement.textContent = task.title;

            taskElement.addEventListener('click', () => {
                this.showTaskDetails(task);
            });

            tasksDiv.appendChild(taskElement);
        });

        this.content.appendChild(tasksDiv);
    }

    toggleTasks(project) {
        const tasksDiv = this.content.querySelector('.tasks');
        if (tasksDiv) {
            tasksDiv.remove();
        } else {
            this.loadTasks(project);
        }
    }

    showTaskDetails(task) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h3>${task.title}</h3>
                <div class="task-details">
                <p><strong>Description:</strong> ${task.description}</p>
                <p><strong>Due Date:</strong> ${task.dueDate}</p>
                <p><strong>Priority:</strong> ${task.priority}</p>
                <p><strong>Notes:</strong> ${task.notes}</p>
                <p><strong>Checklist:</strong> ${task.checkList}</p>
                </div>
            </div>
        `;

        const closeButton = modal.querySelector('.close');

        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        this.content.appendChild(modal);
        modal.style.display = 'block';

    }

}