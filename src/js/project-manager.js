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
        return this.listOfProjects[projectIndex].listOfToDos;
    }

    // This method takes the appropriate project index as the first parameter, then the list of form data retrieved
    // from the "Add To-Do" modal as the second parameter.
    // All it does is add a new To-Do based off what the user has inputted
    static addToDos(projectIndex, formDataList) {
        // If the formDataList is not empty, then go through the list accordingly:
        // First item: Title (Required)
        // Second item: Description (Required)
        // Third Item: Priority (Required)
        // Fourth Item: Due Date (Optional, if not provided, the date is today's date)
        this.listOfProjects[projectIndex].addToDo(new ToDo(`Chicken ${i}`, `I love Chicken ${i}!`, "Today", "Urgent"));
    }
}