// This is for creating pop-up windows or dialogs.
export default class ModalManager {
    static #addProjectDialog = document.createElement("dialog");
    static #mainNode = document.querySelector("main");


    static showAddProjectDialog() {
        this.#addDialogToDocument(this.#addProjectDialog);
        this.#populateAddProjectDialog();
        this.#addProjectDialog.showModal();
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
}