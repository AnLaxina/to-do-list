import ModalManager from "./modal-manager";
import ProjectManager from "../project-manager";
import MainSectionManager from "./main-section-manager";

import SidebarLogo from "../../img/to-do-list.png";
export default class SidebarManager {

    static #projects = document.querySelector("#projects");
    static #aside = document.querySelector("aside");
    static #logo = document.querySelector("#logo");

    static #intialized = false;

    // By default, let's make it the first one on the sidebar (in this case, Shopping List)
    static selectedProjectTitle = ProjectManager.listOfProjects[0];
    static selectedProjectIndex = 0;

    static initialize() {
        if (this.#intialized) {
            console.log("Sidebar already initialized!");
        }
        else {
            this.displayProjectsDOM();
            this.#addEventListeners();
            this.#displayImages();
            // From the get-go, the first item in the project list will be the one that's highlighted
            const selectedProjectDiv = document.querySelector(".project-button");
            this.#highlightSelectedProject(selectedProjectDiv);
        }
    }

    static #displayImages() {
        const logoImage = document.createElement("img");
        logoImage.src = SidebarLogo;
        logoImage.alt = "A logo of the to-do list application";
        logoImage.id = "logo-image";
        this.#logo.prepend(logoImage);
    }

    // For each project, create a "button" that corresponds with a paricular name;
    static displayProjectsDOM() {
        let htmlContent = " ";
        for (let i = 0; i < ProjectManager.listOfProjects.length; i++) {
            htmlContent += `<div class="project-button" data-delete-index=${i}><p>${ProjectManager.listOfProjects[i].name}</p><button type="button"
        class="delete-project">x</button></div>`;
        }

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
        this.#aside.addEventListener("click", (e) => {
            if (e.target.className === "add-button") {
                ModalManager.showAddProjectDialog();
            }
            else if (e.target.className === "delete-project") {
                const parent = e.target.closest(".project-button");
                const deleteIndex = parent?.dataset.deleteIndex;
                this.#removeProjectDOM(deleteIndex);
            }
            else if (e.target.tagName === "P") {
                const parent = e.target.closest(".project-button");
                this.#highlightSelectedProject(parent);
                const deleteIndex = parent?.dataset.deleteIndex;
                this.selectedProject = e.target.textContent;
                this.#testToDoProjects(deleteIndex);
                MainSectionManager.initialize(deleteIndex);
            }
            else if (e.target.className === "project-button") {
                // This essentially removes the 'x' (the delete button) at the end of the textContent string
                // By default, retrieving the text content of this div gives: "{projectName}x"
                const deleteIndex = e.target.dataset.deleteIndex;
                this.#highlightSelectedProject(e.target);
                const title = e.target.textContent.substring(0, e.target.textContent.length - 1);
                this.selectedProject = title;
                this.#testToDoProjects(deleteIndex);
                MainSectionManager.initialize(deleteIndex);
            }
        })

        // Mouse "hovered" events. Using mouseenter & mouseleave as they do not bubble and don't cause the flickering
        // 'x' issue.
        this.#projects.addEventListener("mouseenter", (e) => {
            if (e.target.className === "project-button" || e.target.className === "project-button highlighted") {
                this.#showDeleteProjectButton(e.target);
            }
        }, true)

        this.#projects.addEventListener("mouseleave", (e) => {
            if (e.target.className === "project-button" || e.target.className === "project-button highlighted") {
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

    // This is for testing adding Todo's etc.
    static #testToDoProjects(deleteIndex) {
        ProjectManager.addToDos(deleteIndex);
        ProjectManager.listOfProjects[deleteIndex].viewAllTodos();
    }

    static #highlightSelectedProject(parent) {
        const allProjects = document.querySelectorAll(".project-button");
        for (const project of allProjects) {
            project.classList.remove("highlighted");
        }
        parent.classList.add("highlighted");
    }

}