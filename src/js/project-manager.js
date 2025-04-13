import Project from "./project";

export default class ProjectManager {

    // For now, let's put in example projects in this list to populate the sidebar
    static listOfProjects = [new Project("Shopping List"), new Project("Reading List")];

    static createProject(projectName) {
        this.listOfProjects.push(new Project(projectName));
    }

    static listProjects() {
        for (const project of this.listOfProjects) {
            console.log(project.name);
        }
    }

    static deleteProject(index) {
        this.listOfProjects.splice(index, 1);
    }
}