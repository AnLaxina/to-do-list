import Project from "./project";

export default class ProjectManager {
    static createProject(projectName) {
        this.newProject = new Project(projectName);
    }
}