import { activeObj } from "./createProject";

export function addTask() {
  const taskList = document.querySelector('#taskList');
  const task = document.createElement('li');
  task.classList.add('task');
  task.contentEditable = true;
  taskList.appendChild(task);
  task.focus();
  task.addEventListener('keypress', (e) => {
    if(e.key == 'Enter') {
      saveTask(task);
      task.contentEditable = false;
      task.blur();
      console.log('hi ');
    }
  });
}

function saveTask(task) {
  let newTask = task.textContent;;
  activeObj.setToDo(newTask);
}

export function renderTasks(array) {
  const taskList = document.querySelector('#taskList');
  array.forEach(value => {
    const task = document.createElement('li');
    task.classList.add('task');
    task.textContent = value;
    task.addEventListener
    taskList.appendChild(task);
  });
}
/* function saveTasks(e) {
  // Blurring input of todo, and setting it onto object for recall.
  if (e.classList.contains('userInput')) {
    e.blur();
  }
  let newTask = `${e.value}`;
  activeObj.toDo.push(newTask); // This works, but isnt using class methods!!!!!!!
  setProjects();
} */
