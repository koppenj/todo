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
    //If theres something on the list, for each item in the array, use the helper function
    renderList();
    console.log('Job Complete');
  } else {
    console.log('Nothing to see here');
  }
}

function renderList() {
  //Draw the stuff to the project div
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

function viewProject(event) {
  // Open selected project onto main div when project on list is clicked. need to append that whole class card that is editable
  let selectedObj = projectList[event.target.dataset.index];

  const title = document.createElement('h4');
  const details = document.createElement('p');
  const addTask = document.createElement('btn');

  console.log(selectedObj);

}

export {createProject, projectList, viewProject}