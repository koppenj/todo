import { activeObj } from "./createProject";

export function addTask() {
  const taskList = document.querySelector('#taskList');
  const task = document.createElement('li');
  task.classList.add('task');
  task.contentEditable = true;
  taskList.appendChild(task);
  task.focus();
  task.addEventListener('keypress', (e) => {
    if(e.key == 'Enter' ) {
      saveTask(task);
      task.contentEditable = false;
      task.blur();
    }
  });
}
/* const handleTaskEvent = () => {
  if(e.key == 'Enter') {
    saveTask(task);
    task.contentEditable = false;
    task.blur();
  }
} */  // Create callback to reduce DRY code

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
    task.addEventListener('keypress', (e) => {
      if(e.key == 'Enter' ) {
        saveTask(task);
        task.contentEditable = false;
        task.blur();
      }
    });
    taskList.appendChild(task);
  });
}

