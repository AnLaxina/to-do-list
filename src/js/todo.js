export default class ToDo {
    constructor(title, description, dueDate = new Date(), priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}