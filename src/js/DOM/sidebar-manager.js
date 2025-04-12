import ModalManager from "./modal-manager";
import ProjectManager from "../project-manager";

export default class SidebarManager {

    static #projects = document.querySelector("#projects");
    static #intialized = false;

    static initialize() {
        if (this.#intialized) {
            console.log("Sidebar already initialized!");
        }
        else {
            this.#displayProjectsDOM();
            this.#addEventListeners();
        }
    }

    // For each project, create a "button" that corresponds with a paricular name;
    static #displayProjectsDOM() {
        let htmlContent = " ";
        for (const project of ProjectManager.listOfProjects) {
            htmlContent += `<button type="button" class="project-button">${project.name}</button>`;
        }
        // At the end, add an 'add button'
        htmlContent += `<button type="button" class="add-button">Add Project</button>`
        this.#projects.innerHTML = htmlContent;
    }

    static #addEventListeners() {
        // Use event delegation so that any thing that is clicked/pressed under
        // the projects sidebar can be changed/added
        this.#projects.addEventListener("click", (e) => {
            if (e.target.className === "add-button") {
                ModalManager.showAddProjectDialog();
                ProjectManager.displayProjectsDOM();
            }
        })
    }

}