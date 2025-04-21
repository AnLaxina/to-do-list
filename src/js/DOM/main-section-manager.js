import ProjectManager from "../project-manager";

export default class MainSectionManager {
    static mainSection = document.querySelector("main");
    static firstProject = ProjectManager.listOfProjects[0];

    static initialize() {
        // console.log("Chicken! I love chicken nuggets!");
        this.#loadProjectTitleDOM(0)
    }

    static #loadProjectTitleDOM(projectIndex) {
        const projectTitleNode = document.createElement("h2");
        const projectName = ProjectManager.listOfProjects[projectIndex].name;
        projectTitleNode.textContent = projectName;
        projectTitleNode.classList.add("project-name");

        this.mainSection.prepend(projectTitleNode);
    }
}