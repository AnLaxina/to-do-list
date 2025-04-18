import ToDo from "./todo.js";

export default class Project {
    constructor(name, listOfToDos = []) {
        this.listOfToDos = listOfToDos;
        this.name = name;
    }

    viewAllTodos() {
        console.log(`List of All To-Do Items: for ${this.name}`);
        for (const toDo of this.listOfToDos) {
            // For now let's just print the title and duedate to the console
            console.log(`${toDo.title} - Due Date: ${toDo.dueDate}`)
        }
    }

    deleteTodo(index) {
        // Deletes a ToDo at a specified index but deletes only 1 item
        this.listOfToDos.splice(index, 1);
    }

    editTitle(index, title) {
        this.listOfToDos[index].title = title;
    }

    editDescription(index, description) {
        this.listOfToDos[index].description = description;
    }

    editDueDate(index, dueDate) {
        this.listOfToDos[index].dueDate = dueDate;
    }

    editPriority(index, priority) {
        this.listOfToDos[index].priority = priority;
    }

    addToDo(newToDo = new ToDo("New Todo", "New Description", "Today", "Urgent")) {
        this.listOfToDos.push(newToDo);
    }
}