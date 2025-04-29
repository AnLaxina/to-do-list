export default class ToDo {
    constructor(title, description, priority, dueDate = new Date()) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    }
}