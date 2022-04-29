class Project {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

    // COnsole log is showing what obj im pulling. Possibly write getter/setters for changing state on main view/
}

const projectList = [];
const display = document.querySelector('#main');
const list = document.querySelector('#projectList');

function createProject() {
  const project = new Project(
    document.querySelector('#title').value,
    document.querySelector('#description').value,
    document.querySelector('#dueDate').value,
    document.querySelector('#priority').value,
  );
  projectList.push(project);
  console.log('Created New Project');
  checkList();
}


function checkList () {
  if (projectList.length > 0) {
    //If theres something on the list, use the helper function to populate. otherwise, need to check localStorage
    renderList();
    console.log('Job Complete');
  } else {
    console.log('Nothing to see here');
  }
}

function renderList() {
  //Writes created projects to list on sidebar
  list.replaceChildren();

  for (const project of projectList) {
    const item = document.createElement('div');
    item.textContent = `${project.title}`;
    item.classList.add('listItems');
    item.setAttribute('data-index', projectList.indexOf(project));
    item.addEventListener('click', (event) => {
      viewProject(event);
    });
    list.appendChild(item);
  }
}

/* function radioCheck() {
  if(checked) {
    uncheck
  }

} */

function addTask() {
  const wrapper = document.querySelector('#taskList');
  const task = document.createElement('li');
    task.classList.add('task');
  const completeBubble = document.createElement('input');
    completeBubble.setAttribute('type', 'checkbox');
    completeBubble.setAttribute('name', 'task');
    completeBubble.classList.add('radio');
  const userInput = document.createElement('input');
    userInput.setAttribute('type', 'text');
    userInput.classList.add('userInput');

  task.append(completeBubble,userInput);
  wrapper.appendChild(task);
}

function viewProject(event) {
  // Shows selected project on main card. Need to make a scalable list to add specific to-dos
  display.replaceChildren();
  let selectedObj = projectList[event.target.dataset.index];
  console.log(selectedObj);  // View object in inspector
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

/* function removeFocus () {
  document.activeElement.blur();
} */

export {createProject, projectList, viewProject}