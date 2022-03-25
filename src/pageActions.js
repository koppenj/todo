const formModal = document.getElementById('formModal');
const createBtn = document.getElementById('createProject');
const span = document.getElementsByClassName('close')[0];

span.addEventListener('click', () => {
  formModal.style.display = 'none';
});

createBtn.addEventListener('click', () => {
  formModal.style.display = 'block';
});
