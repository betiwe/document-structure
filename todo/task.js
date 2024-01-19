const taskList = document.querySelector('.tasks__list');
const addButton = document.querySelector('#tasks__add');

function removeTask(event) {
  const newTask = event.target.closest('.task');
  if (newTask) {
    newTask.remove();
  }
}

function addTask(event) {
  event.preventDefault(); 

  const taskInput = document.querySelector('#task__input');

  const taskInputText = taskInput.value.trim();

  if (taskInputText !== '') {
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    const newTaskTitle = document.createElement('div');
    newTaskTitle.classList.add('task__title');
    newTaskTitle.textContent = taskInputText;
    const taskDeletBtn = document.createElement('a');
    taskDeletBtn.classList.add('task__remove');
    taskDeletBtn.innerHTML = '&times;';
    taskDeletBtn.addEventListener('click', removeTask);
    newTask.appendChild(newTaskTitle);
    newTask.appendChild(taskDeletBtn);
    taskList.appendChild(newTask);
    taskInput.value = '';
  }

};

addButton.addEventListener('click', addTask);