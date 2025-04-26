import ProjectManager from "../project-manager";
import SidebarManager from "./sidebar-manager";

// This is for creating pop-up windows or dialogs.
export default class ModalManager {
    static #addProjectDialog = document.createElement("dialog");
    static #mainNode = document.querySelector("main");
    // This is for allowing all the necessary modals/dialogs to run ONCE
    static #initialized = false;

    static initialize() {
        if (this.#initialized) {
            console.log("Already initialized!");
        }
        else {
            // If this is the first time, run all the required setup like adding event listeners, etc.
            // Add all required setup for the `Add Project` Dialog
            this.#populateAddProjectDialog();
            this.#addDialogToDocument(this.#addProjectDialog);
            this.#addEventListenersButtons(this.#addProjectDialog);
            this.#addKeyboardEvents(this.#addProjectDialog);

            this.#initialized = true;
        }
    }

    static showAddProjectDialog() {
        this.#addProjectDialog.showModal();
    }

    // This time, I'll make it different by using template tags in HTML
    static showAddTodoDialog(parentToAdd) {
        const template = document.querySelector("#add-todo-template");
        // To actually "instantiate" a template, we need to clone it
        // As it's actually not in the DOM yet
        const clone = template.content.cloneNode(true);
        const dialog = clone.querySelector("dialog");
        this.#addEventsToModalButtons(dialog);

        parentToAdd.appendChild(dialog);
        dialog.showModal();
    }

    // Add click event to each of the modal buttons (Cancel/Submit)
    static #addEventsToModalButtons(dialog) {
        dialog.addEventListener("click", (e) => {
            if (e.target.className === "close-modal-button") {
                dialog.close();
            }
            else if (e.target.className === "add-todo-button") {
                console.log("submitted! But other things need to happen!");
            }
        })
    }

    static #populateAddProjectDialog() {
        this.#addProjectDialog.id = "add-project-modal";
        const dialogContent = `<header id="modal-header">
            <h3 id="modal-header-title">Add a Project</h3>
        </header>
        <div class="form-container">
            <form action="#" method="dialog" id="add-project-form">
                <label for="project-name">Project Name: </label>
                <input type="text" id="project-name" autocomplete="off" name="project-name" placeholder="Ex. Shopping List" required>
                <div class="modal-buttons">
                    <button type="button" class="close-modal-button">Cancel</button>
                    <button type="button" class="add-project-button">Add Project</button>
                </div>
            </form>
        </div>`;
        this.#addProjectDialog.innerHTML = dialogContent;
    }

    static #addDialogToDocument(node) {
        this.#mainNode.appendChild(node);
    }

    // Adds event listeners for any button inside the modal. Using event delegation (for flexibility) we detect if there
    // are any buttons inside the modal
    // param: For event delegation, we use the parent modal to close that specific one
    static #addEventListenersButtons(currentModal) {
        currentModal.addEventListener("click", (e) => {
            if (e.target.className === "close-modal-button") {
                currentModal.close();
            }
            else if (e.target.className === "add-project-button") {
                this.#addProject(currentModal);
            }
        })
    }

    static #addKeyboardEvents(currentModal) {
        const form = currentModal.querySelector("form");

        form.addEventListener("submit", (e) => {
            // While it works without e.preventDefault(), it's a failsafe in case some browsers mess up the
            // modals
            e.preventDefault();
            this.#addProject(currentModal);
        })
    }

    static #addProject(currentModal) {
        const form = currentModal.querySelector("form");
        // If an input is filled (valid), then do whatever you want to do (ex. add to project list, etc.)
        if (form.reportValidity()) {
            // TODO: Add functionality to add to project list once an input has been verified
            const formData = this.#getInputData(form);
            const projectName = [...formData.values()];
            // Once we retrieve the values (like the project name for example, we can use the ProjectManager)
            ProjectManager.createProject(projectName);
            // After submission, re-populate the sidebar
            SidebarManager.displayProjectsDOM();
            form.reset();
            currentModal.close();

        }
    }

    static #getInputData(currentModalForm) {
        const newFormData = new FormData(currentModalForm);
        return newFormData;
    }

}