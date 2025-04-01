export default class SidebarManager {

    static #projects = document.querySelector("#projects");
    static #addButton = document.querySelector(".add-button");

    static loadDom() {
        const htmlContent = `
            <button type="button" class="todo-button">Shopping List</button>
            <button type="button" class="todo-button">Reading List</button>
        

        <button type="button" class="add-button">Add Project</button>`;

        this.#projects.innerHTML = htmlContent;
    }

}