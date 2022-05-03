import { setProjects } from "./loader";
import { addTask } from "./task";


export class Project {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.toDo = [];
  }
  static setToDo(toDo) {
    this.toDo = toDo;
  }
  static getToDo() {
    return this.toDo;
  }
  static addToDo(newToDo) {
    this.toDo= toDo.push(newToDo);
  }
  static sayHi() {
    console.log('Hello');
  }
}






let currentProjectList = [];
let selectedObj;
export const setCurrentProjectList = (newList) => (currentProjectList = newList);

const display = document.querySelector('#main');
const list = document.querySelector('#projectList');

function createProject() {
  const project = new Project(
    document.querySelector('#title').value,
    document.querySelector('#description').value,
    document.querySelector('#dueDate').value,
    document.querySelector('#priority').value,
  );
  currentProjectList.push(project);
  setProjects();
  renderList(currentProjectList);
}

function renderList (fromStorage) {
  list.replaceChildren();

  for (const project of fromStorage) {
    const item = document.createElement('div');
    item.textContent = `${project.title}`;
    item.classList.add('listItems');
    item.setAttribute('data-index', fromStorage.indexOf(project));
    item.addEventListener('click', (event) => {
      viewProject(event);
    });
    list.appendChild(item);
  }
}

function viewProject(event) {
  display.replaceChildren();
  selectedObj = currentProjectList[event.target.dataset.index];
  console.log(selectedObj.toDo);
  const wrapper = document.createElement('div');
    wrapper.id = 'visibleCard';
  const title = document.createElement('h2');
    title.textContent = selectedObj.title;
  const details = document.createElement('p');
    details.textContent = selectedObj.description;
  const addNewTask = document.createElement('btn');
    addNewTask.classList.add('actionButtons');
    addNewTask.textContent = 'Add Task';
    addNewTask.addEventListener('click', addTask);
  const taskArea = document.createElement('div');
    taskArea.id = 'taskArea';
  const list = document.createElement('ul');
    list.classList.add('todo');
    list.id = 'taskList';
  taskArea.append(list);
  wrapper.append(title,details,addNewTask,taskArea);
  display.appendChild(wrapper);
}

export {createProject, viewProject, renderList, currentProjectList, selectedObj }