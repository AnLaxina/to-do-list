import ToDoListItem from "./todo";
import Project from "./project";
import DateTime from "./datetime";

import "./css/style.css";
import "./css/reset.css";

const listOfToDos = [];
const project = new Project(listOfToDos);

const todo = new ToDoListItem("cheese", "dog", DateTime.getCurrentDate(), "idk what a priority");
const todo2 = new ToDoListItem("bacon", "dog", DateTime.getCurrentDate(), "idk what a priority");

listOfToDos.push(todo);
listOfToDos.push(todo2);

project.viewAllTodos();

console.log("After deleting one ToDo, here are all the ToDo's now:");
project.deleteTodo(1);
project.viewAllTodos();
