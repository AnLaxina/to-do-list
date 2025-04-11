import Project from "./project";

export default class ProjectManager {

    static listOfProjects = []

    static createProject(projectName) {
        this.listOfProjects.push(new Project(projectName));
    }

    static listProjects() {
        for (const project of this.listOfProjects) {
            console.log(project.name);
        }
    }
}