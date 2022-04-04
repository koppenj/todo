class Project {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
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

function addTask() {
  const wrapper = document.querySelector('#visibleCard');
  const form = document.createElement('form');
    form.classList.add('todo');
  const completeBubble = document.createElement('input');
    completeBubble.setAttribute('type', 'radio');
    completeBubble.setAttribute('name', 'task');
    completeBubble.classList.add('radio')
  const textInput = document.createElement('input');
    textInput.setAttribute('type', 'text');
    textInput.classList.add('textInput');
  const label = document.createElement('label');
    label.setAttribute('for', 'task');


  form.append(completeBubble, textInput, label);
  wrapper.appendChild(form);
}

function viewProject(event) {
  // Shows selected project on main card. Need to make a scalable list to add specific to-dos
  display.replaceChildren();
  let selectedObj = projectList[event.target.dataset.index];

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

  wrapper.append(title,details,addNewTask);
  display.appendChild(wrapper);

}

export {createProject, projectList, viewProject}