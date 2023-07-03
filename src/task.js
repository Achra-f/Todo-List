export class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = '';
        this.checklist = [];
        this.status = 'Incomplete';
    }

    markAsComplete() {
        this.status = 'Complete';
    }

    addNote(note) {
        this.notes += note + '\n';
    }

    addChecklistItem(item) {
        this.checklist.push(item);
    }

    removeChecklistItem(index) {
        this.checklist.splice(index, 1);
    }
}
