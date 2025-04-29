import Project from "./project";
import ToDo from "./todo";
import { format } from "date-fns";

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

    static printToDoList(projectIndex) {
        console.log("Here are the to-do's for the following project: ");
        for (const toDo of this.getToDoList(projectIndex)) {
            console.log(`Title: ${toDo.title}`);
            console.log(`Description: ${toDo.description}`);
            console.log(`Priority: ${toDo.priority}`);
            console.log(`Due Date: ${toDo.dueDate}`);
            console.log('\n');
        }
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
        if (formDataList.length !== 0) {
            let userDate = new Date(formDataList[3]);
            if (formDataList[3] === '') {
                userDate = new Date();
            }
            this.listOfProjects[projectIndex].addToDo(new ToDo(formDataList[0], formDataList[1], formDataList[2], format(userDate, "MMMM d, y")));
        }
    }
}