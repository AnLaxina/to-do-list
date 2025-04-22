import ProjectManager from "../project-manager";

export default class MainSectionManager {
    static mainSection = document.querySelector("main");
    static firstProject = ProjectManager.listOfProjects[0];
    static #firstInitialization = true;

    static initialize(projectIndex) {
        // console.log("Chicken! I love chicken nuggets!");
        if (this.#firstInitialization) {

            this.#loadProjectTitleDOM(0)
            this.#firstInitialization = false;
        }
        else {
            // TODO: Make it so that clicking a project button in the Sidebar will dynamically change the title, etc.
            // For now, let's just do the title
            this.#loadProjectTitleDOM(projectIndex);
        }
    }

    static #loadProjectTitleDOM(projectIndex) {
        // const projectTitleNode = document.createElement("h2");
        const projectTitleNode = document.querySelector(".project-name");
        const projectName = ProjectManager.listOfProjects[projectIndex].name;
        // this.mainSection.prepend(projectTitleNode);
        projectTitleNode.textContent = projectName;
        // projectTitleNode.classList.add("project-name");


    }
}