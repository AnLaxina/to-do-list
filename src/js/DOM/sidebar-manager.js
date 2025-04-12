import ModalManager from "./modal-manager";
import ProjectManager from "../project-manager";

export default class SidebarManager {

    static #projects = document.querySelector("#projects");
    static #addButton = undefined;
    static #intialized = false;

    static initialize() {
        if (this.#intialized) {
            console.log("Sidebar already initialized!");
        }
        else {
            this.#loadDom();
            this.#addEventListeners();
        }
    }

    static #loadDom() {
        const htmlContent = `${ProjectManager.displayObjectsDOM()}<button type="button" class="add-button">Add Project</button>`;

        this.#projects.innerHTML = htmlContent;
        this.#addButton = document.querySelector(".add-button");
    }

    static #addEventListeners() {
        // Add an event listener to the addButton
        this.#addButton.addEventListener("click", () => {
            ModalManager.showAddProjectDialog();
        })
    }

}