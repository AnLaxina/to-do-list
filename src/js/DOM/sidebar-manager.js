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
        for (let i = 0; i < ProjectManager.listOfProjects.length; i++) {
            htmlContent += `<div type="button" class="project-button">${ProjectManager.listOfProjects[i].name}<button type="button"
        class="delete-project" delete-index=${i}>x</button></div>`;
        }

        // At the end, add an 'add button'
        htmlContent += `<button type="button" class="add-button">Add Project</button>`
        this.#projects.innerHTML = htmlContent;
    }

    static #removeProjectDOM(index) {
        ProjectManager.deleteProject(index);
        this.displayProjectsDOM();
    }

    static #addEventListeners() {
        // Use event delegation so that any thing that is clicked/pressed under
        // the projects sidebar can be changed/added

        // Click events
        this.#projects.addEventListener("click", (e) => {
            if (e.target.className === "add-button") {
                ModalManager.showAddProjectDialog();
            }
            else if (e.target.className === "delete-project") {
                let deleteIndex = e.target.getAttribute("delete-index");
                this.#removeProjectDOM(deleteIndex);
            }
        })

        // Mouse "hovered" events. Using mouseenter & mouseleave as they do not bubble and don't cause the flickering
        // 'x' issue.
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