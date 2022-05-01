import { currentProjectList, renderList, setCurrentProjectList } from "./createProject";

function storageAvailable(type) {
  var storage;
  try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  }
}

function setProjects() {
  if(storageAvailable('localStorage')) {
    localStorage.setItem('projects', JSON.stringify(currentProjectList));
  }
  else {
    console.log(`Can't Access localStorage`);
  }
}

function getProjects() {
  if(localStorage.getItem('projects') !== null) {
    const old_data = JSON.parse(localStorage.getItem('projects'));
    setCurrentProjectList(old_data);
    renderList(old_data);
  } else {
    renderList(currentProjectList);
  }
}

export {setProjects, getProjects};