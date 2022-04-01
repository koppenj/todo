class Project {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const projectList = [];
const display = document.querySelector('.main');

function createProject() {
  const project = new Project(
    document.querySelector('#title').value,
    document.querySelector('#description').value,
    document.querySelector('#dueDate').value,
    document.querySelector('#priority').value,
  );
  projectList.push(project);
  console.log('Created New Project');
  console.table(projectList);
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
  //Draw the stuff to main div
  display.replaceChildren();
  for (const project of projectList) {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = `${project.title}`;

    const card = document.createElement('div');
    card.classList.add('projectCard');
    card.id = `project-` + projectList.indexOf(project) + 1;
    card.textContent = `${project.description}`;

    details.appendChild(card);
    details.appendChild(summary);
    display.appendChild(details);
  }
}

function displayToDo() {
  //Maybe something that will expand a clicked on project to the right of the screen aka main area
}

export {createProject, projectList}