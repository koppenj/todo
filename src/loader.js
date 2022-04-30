import { currentProjectList } from "./createProject";

function setProjects() {
  if(!localStorage.getItem('projects')) {
    localStorage.setItem('projects', JSON.stringify(currentProjectList));
  } else {
    let old_data = JSON.parse(localStorage.getItem('projects'))
    let new_data = currentProjectList.push(old_data);
    localStorage.setItem('projects', JSON.stringify(new_data));
  }
}

function getProjects() {
  if(!localStorage.getItem('projects') === null) {
    currentProjectList = JSON.parse(localStorage.getItem('projects'));
  }
};
export {setProjects, getProjects};