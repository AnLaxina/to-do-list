// This is for creating pop-up windows or dialogs.
export default class ModalManager {
    static #addProjectDialog = document.createElement("dialog");
    static #mainNode = document.querySelector("main");


    static showAddProjectDialog() {
        this.#addDialogToDocument(this.#addProjectDialog);
        this.#addProjectDialog.showModal();
    }

    static #addDialogToDocument(node) {
        this.#mainNode.appendChild(node);
    }
}