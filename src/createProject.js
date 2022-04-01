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
    const card = document.createElement('details');
    card.textContent = `${project.description}`;
    const cardContent = document.createElement('summary');
    cardContent.textContent = `${project.title}`;

    card.appendChild(cardContent);
    display.appendChild(card);
  }
}

function displayToDo() {
  //Maybe something that will expand a clicked on project to the right of the screen aka main area
}

export {createProject, projectList}