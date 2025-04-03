export default class SidebarManager {

    static #projects = document.querySelector("#projects");
    static #addButton = undefined;

    static loadDom() {
        const htmlContent = `
            <button type="button" class="todo-button">Shopping List</button>
            <button type="button" class="todo-button">Reading List</button>
        

        <button type="button" class="add-button">Add Project</button>`;

        this.#projects.innerHTML = htmlContent;
        this.#addButton = document.querySelector(".add-button");
    }

    static addEventListeners() {
        // Add an event listener to the addButton
        this.#addButton.addEventListener("click", () => {
            console.log("Hello tarnished!");
        })
    }

}