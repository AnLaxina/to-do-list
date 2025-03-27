import ToDoListItem from "./todo";
import Project from "./project";

const listOfToDos = [];
const project = new Project(listOfToDos);

// Date related things, might move these to a separate module
const date = new Date();
const day = date.getDate();
// Turns the month into its actual name instead of just a number
const month = date.toLocaleString("default", { "month": "long" });
const year = date.getFullYear();

const actualDate = `${month} ${day}, ${year}`;


const todo = new ToDoListItem("cheese", "dog", actualDate, "idk what a priority");
const todo2 = new ToDoListItem("bacon", "dog", actualDate, "idk what a priority");

listOfToDos.push(todo);
listOfToDos.push(todo2);

project.viewAllTodos();
