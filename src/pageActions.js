import { createProject } from "./createProject";

const formModal = document.getElementById('formModal');
const createBtn = document.getElementById('createProject');
const span = document.getElementsByClassName('close')[0];
const form = document.querySelector('#bookInput');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  createProject();
  formModal.style.display = 'none';
  form.reset();
});

span.addEventListener('click', () => {
  formModal.style.display = 'none';
});

createBtn.addEventListener('click', () => {
  formModal.style.display = 'block';
});

window.addEventListener('click', (event) => {
  if (event.target === formModal) {
    formModal.style.display = 'none';
  }
});
