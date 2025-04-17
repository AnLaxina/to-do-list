import Project from "./project";
import ToDo from "./todo";

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

    static getToDoList(projectIndex) {
        return listOfProjects[projectIndex].listOfToDos;
    }

    // This method may or may not be for testing,
    // All it does is add a bunch of to-do's with the name chicken lol
    static addToDos(projectIndex) {
        for (let i = 0; i < 5; i++) {
            this.listOfProjects[projectIndex].addToDo(new ToDo(`Chicken ${i}`, `I love Chicken ${i}!`));
        }
    }
}