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
  setToDo(toDo) {
    this.toDo = toDo;
  }
  getToDo() {
    return this.toDo;
  }
  addToDo(newToDo) {
    this.toDo= toDo.push(newToDo);
  }
}

let currentProjectList = [];
let activeObj;
export const setCurrentProjectList = (newList) => (currentProjectList = newList);

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
  const display = document.querySelector('#main');
    display.replaceChildren();
  activeObj = currentProjectList[event.target.dataset.index];
  const projectCard = document.createElement('div');
    projectCard.id = 'visibleCard';
    projectCard.innerHTML = `
      <h2>${activeObj.title}</h2>
      <p>${activeObj.description}</p>
      <button class = 'actionButtons' id = 'addTask'>Add Task</button>
      <div id = 'taskArea'>
        <ul id = 'taskList'>
        </ul>
      </div>
`
  display.appendChild(projectCard);
  const enableAddTask = document.querySelector('#addTask');
  enableAddTask.addEventListener('click', addTask);
}

export {createProject, viewProject, renderList, currentProjectList, activeObj }