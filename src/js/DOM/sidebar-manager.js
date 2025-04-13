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
            this.displayProjectsDOM();
            this.#addEventListeners();
        }
    }

    // For each project, create a "button" that corresponds with a paricular name;
    static displayProjectsDOM() {
        let htmlContent = " ";
        for (const project of ProjectManager.listOfProjects) {
            htmlContent += `<div type="button" class="project-button">${project.name}<button type="button"
        class="project-button delete-project">x</button></div>`;
        }

        // <!-- For testing, adding a project-button with a delete button -->
        // htmlContent += `<div type="button" class="project-button">Chicken Nugget <button type="button"
        // class="delete-project">x</button></div>`;

        // At the end, add an 'add button'
        htmlContent += `<button type="button" class="add-button">Add Project</button>`
        this.#projects.innerHTML = htmlContent;
    }

    static #addEventListeners() {
        // Use event delegation so that any thing that is clicked/pressed under
        // the projects sidebar can be changed/added

        // Click events
        this.#projects.addEventListener("click", (e) => {
            if (e.target.className === "add-button") {
                ModalManager.showAddProjectDialog();
            }
        })

        this.#projects.addEventListener("mouseenter", (e) => {
            if (e.target.className === "project-button") {
                this.#showDeleteProjectButton(e.target);
            }
        }, true)

        this.#projects.addEventListener("mouseleave", (e) => {
            if (e.target.className === "project-button") {
                this.#removeDeleteProjectButton(e.target);
            }
        }, true)
    }

    static #showDeleteProjectButton(projectButton) {
        const deleteProjectButton = projectButton.querySelector("button.delete-project");
        deleteProjectButton.style.setProperty("visibility", "visible");

    }

    static #removeDeleteProjectButton(projectButton) {
        const deleteProjectButton = projectButton.querySelector("button.delete-project");
        deleteProjectButton.style.setProperty("visibility", "hidden");
    }

}