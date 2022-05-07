import { setProjects } from "./loader";
import { addTask, renderTasks } from "./task";


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
    console.log(activeObj);
    console.table(this.storage.indexOf(task));
    setProjects();
  }
  getToDo() {
    console.log(this.storage);
  }
}

let currentProjectList = [];
let activeObj;

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
}

function renderList (fromStorage) {
  const list = document.querySelector('#projectList');
  if(fromStorage.length > 0) {
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
  } else {
    const noticeDiv = document.createElement('div');
    noticeDiv.textContent = 'Nothing To See Here';
    noticeDiv.id = 'noticeDiv';
    list.append(noticeDiv);
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
      </div>`
  display.appendChild(projectCard);
  const enableAddTask = document.querySelector('#addTask');
  enableAddTask.addEventListener('click', addTask);
  if(activeObj.storage) {
    renderTasks(activeObj.storage);
  }
}

export {createProject, viewProject, renderList, currentProjectList, activeObj }