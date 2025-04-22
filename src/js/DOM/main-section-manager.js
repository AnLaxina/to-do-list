import ProjectManager from "../project-manager";

export default class MainSectionManager {
    static mainSection = document.querySelector("main");
    static firstProject = ProjectManager.listOfProjects[0];
    static #firstInitialization = true;

    static initialize(projectIndex) {
        if (this.#firstInitialization) {
            this.#loadProjectTitleDOM(0)
            this.#firstInitialization = false;
        }
        else {
            // Clicking a project button in the Sidebar will dynamically change the title, etc.
            // For now, let's just do the title
            this.#loadProjectTitleDOM(projectIndex);
        }
    }

    static #loadProjectTitleDOM(projectIndex) {
        const projectTitleNode = document.querySelector(".project-name");
        const projectName = ProjectManager.listOfProjects[projectIndex].name;
        projectTitleNode.textContent = projectName;
    }
}