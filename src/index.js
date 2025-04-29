import SidebarManager from "./js/DOM/sidebar-manager";
import ModalManager from "./js/DOM/modal-manager";
import MainSectionManager from "./js/DOM/main-section-manager";
import ProjectManager from "./js/project-manager";

import Project from "./js/project";
import ToDo from "./js/todo";

import "./css/style.css";
import "./css/reset.css";
import "./css/modal.css";
import "./css/main-section.css";


// DOM related methods
// ProjectManager.addToDos(0);
SidebarManager.initialize();
ModalManager.initialize();
MainSectionManager.initialize();