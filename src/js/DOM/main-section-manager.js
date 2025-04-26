import ProjectManager from "../project-manager";
import ModalManager from "./modal-manager";
// For testing the newly installed data-fns package
import { format, formatDistanceToNow } from "date-fns";

export default class MainSectionManager {
    static mainSection = document.querySelector("main");
    static #body = document.querySelector("body");
    static firstProject = ProjectManager.listOfProjects[0];
    static #firstInitialization = true;
    static #toDoSection = document.querySelector(".to-dos");

    static initialize(projectIndex) {
        if (this.#firstInitialization) {
            this.#loadProjectTitleDOM(0)
            this.#loadToDosDOM(0);
            this.#firstInitialization = false;
        }
        else {
            // Clicking a project button in the Sidebar will dynamically change the title, etc.
            // For now, let's just do the title
            this.#loadProjectTitleDOM(projectIndex);
        }
        this.#addClickEvents();
    }

    static #loadProjectTitleDOM(projectIndex) {
        const projectTitleNode = document.querySelector(".project-name");
        const projectName = ProjectManager.listOfProjects[projectIndex].name;
        projectTitleNode.textContent = projectName;
    }

    static #loadToDosDOM(projectIndex) {
        ProjectManager.getToDoList(projectIndex).forEach((toDoItem, index) => {
            const divNode = document.createElement("div");
            divNode.classList.add("to-do-item");

            const inputCheckbox = document.createElement("input");
            inputCheckbox.type = "checkbox";
            inputCheckbox.name = `${toDoItem.title}-${index}`;
            inputCheckbox.id = `${toDoItem.title}-${index}`;

            const label = document.createElement("label");
            label.htmlFor = `${toDoItem.title}-${index}`;
            label.textContent = toDoItem.title;

            divNode.appendChild(inputCheckbox);
            divNode.appendChild(label);

            this.#toDoSection.append(divNode);
        })
    }


    static #addClickEvents() {
        // This fixes the issue where it creates multiple modals each time a sidebar is changed
        if (this._alreadyAdded) return;
        this._alreadyAdded = true;

        this.mainSection.addEventListener("click", (e) => {
            if (e.target.className === "add-to-do") {
                ModalManager.showAddTodoDialog();
            }
        });
    }

}