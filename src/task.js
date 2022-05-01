export function addTask() {
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