import ToDoListItem from "./js/todo";
import Project from "./js/project";
import DateTime from "./js/datetime";

import SidebarManager from "./js/DOM/sidebar-manager";
import ModalManager from "./js/DOM/modal-manager";

import "./css/style.css";
import "./css/reset.css";


// DOM related methods
SidebarManager.loadDom();

// for Testing, will remove later 
ModalManager.showAddProjectDialog();

// const listOfToDos = [];
// // const project = new Project(listOfToDos);

// // const todo = new ToDoListItem("cheese", "dog", DateTime.getCurrentDate(), "idk what a priority");
// // const todo2 = new ToDoListItem("bacon", "dog", DateTime.getCurrentDate(), "idk what a priority");

// // // listOfToDos.push(todo);
// // // listOfToDos.push(todo2);

// // // project.viewAllTodos();

// // // console.log("After deleting one ToDo, here are all the ToDo's now:");
// // // project.deleteTodo(1);
// // // project.viewAllTodos();
