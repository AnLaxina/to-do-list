export default class Project {
    constructor(listOfToDos) {
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
        // Deletes a ToDo at a specified index but only 1
        this.listOfToDos.splice(index, 1);
    }
}