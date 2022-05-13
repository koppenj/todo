import { currentProjectList, Project } from "./createProject";
import { renderTasks, addTask } from "./task";

function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function setProjects() {
  if (storageAvailable("localStorage")) {
    localStorage.setItem("projects", JSON.stringify(currentProjectList));
  } else {
    console.error(`Can't Access localStorage`);
  }
}

function getProjects() {
  if (localStorage.getItem("projects") !== null) {
    const testObj = new Project();
    const old_data = JSON.parse(localStorage.getItem("projects"));
    old_data.forEach((project) => {
      Object.setPrototypeOf(project, testObj);
      currentProjectList.push(project);
    });
    renderList(old_data);
  } else {
    console.log(currentProjectList);
    renderList(currentProjectList);
  }
}

// Draw to DOM every project that is available to the sidebar
function renderList(fromStorage) {
  const list = document.querySelector("#projectList");
  if (fromStorage.length > 0) {
    list.replaceChildren();
    for (const project of fromStorage) {
      const item = document.createElement("div");
      item.textContent = `${project.title}`;
      item.classList.add("listItems");
      item.setAttribute("data-index", fromStorage.indexOf(project));
      item.addEventListener("click", (event) => {
        viewProject(event);
      });
      list.appendChild(item);
    }
  } else {
    const noticeDiv = document.createElement("div");
    noticeDiv.textContent = "Nothing To See Here";
    noticeDiv.id = "noticeDiv";
    list.append(noticeDiv);
  }
}

let activeObj;
// Make selected project expand onto main div section
function viewProject(event) {
  const display = document.querySelector("#main");
  display.replaceChildren();
  activeObj = currentProjectList[event.target.dataset.index];
  const projectCard = document.createElement("div");
  projectCard.id = "visibleCard";
  projectCard.innerHTML = `
      <h2>${activeObj.title}</h2>
      <p>${activeObj.description}</p>
      <p>Due By: ${activeObj.dueDate}</p>
      <button class = 'actionButtons' id = 'addTask'>Add Task</button>
      <div id = 'taskArea'>
        <ul id = 'taskList'>
        </ul>
      </div>`;
  display.appendChild(projectCard);
  const enableAddTask = document.querySelector("#addTask");
  enableAddTask.addEventListener("click", addTask);
  if (activeObj.storage) {
    renderTasks(activeObj.storage);
  }
}

export { setProjects, getProjects, renderList, activeObj };
