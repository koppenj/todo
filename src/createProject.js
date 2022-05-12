import { setProjects, renderList } from "./loader";

export class Project {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.storage = [];
  }
  setToDo(task) {
    this.storage.push(task);
    setProjects();
  }
  getToDo() {
    console.log(this.storage);
  }
}

let currentProjectList = [];

function createProject() {
  const project = new Project(
    document.querySelector('#title').value,
    document.querySelector('#description').value,
    document.querySelector('#dueDate').value,
    document.querySelector('#priority').value,
  );
  currentProjectList.push(project);
  renderList(currentProjectList);
  setProjects();
  console.log(project.dueDate);
}

export {createProject, currentProjectList }