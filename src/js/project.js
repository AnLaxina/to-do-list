export default class Project {
    constructor(listOfToDos = []) {
        this.listOfToDos = listOfToDos;
    }

    viewAllTodos() {
        console.log("List of All To-Do Items:");
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
}