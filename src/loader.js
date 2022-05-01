import { currentProjectList, renderList } from "./createProject";

function setProjects() {
  if(!localStorage.getItem('projects')) {
    localStorage.setItem('projects', JSON.stringify(currentProjectList));
  } else {
    const old_data = JSON.parse(localStorage.getItem('projects'));
    const new_data = currentProjectList.concat(old_data);
    localStorage.setItem('projects', JSON.stringify(new_data));
  }
}

function getProjects() {
  if(localStorage.getItem('projects') !== null) {
    const old_data = JSON.parse(localStorage.getItem('projects'));
    renderList(old_data);
  } else {
    renderList(currentProjectList);
  }
}

export {setProjects, getProjects};