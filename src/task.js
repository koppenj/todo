import { activeObj } from "./createProject";

export function addTask() {
  console.log(activeObj);
  const taskList = document.querySelector('#taskList');

  const task = document.createElement('li');
    task.classList.add('task');
  const completeBubble = document.createElement('input');
    completeBubble.setAttribute('type', 'checkbox');
    completeBubble.setAttribute('name', 'task');
    completeBubble.classList.add('radio');
  const userInput = document.createElement('input');
    userInput.setAttribute('type', 'text');
    userInput.classList.add('userInput');
    userInput.addEventListener('keypress', (e) => {
      if(e.key == 'Enter') {
        console.log(activeObj);
        userInput.blur();
        activeObj.setToDo('test');
      }
    });
  const dateSet = document.createElement('li');
    dateSet.textContent = `${activeObj.dueDate}`;
  task.append(completeBubble,userInput, dateSet);
  taskList.appendChild(task);
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
