const tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];

function showTasks(clearTasks = false) {
  const taskContent = document.querySelector('.content');

  if (clearTasks) {
    taskContent.innerHTML = '';
  }
  if (tasksArray.length > 0) {
    tasksArray.forEach((task) => {
      taskContent.innerHTML =
        taskContent.innerHTML +  
        `<div class="task-card"><input type="checkbox" id ="realized" onclick="taskChecked()"/>
        <p class ="taskIncluded">${task.taskDescription}</p>
        <button onclick="this.parentNode.remove()" id = "deleteButton">
        <img class = "img-remove" src="cancel.png"></button>
        </div>`;
    });
  } else {
 
    taskContent.innerHTML = 'Sem tarefas a cumprir.';
  }
}
const taskForm = document.querySelector('#taskForm');

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let task = {};
  task.taskDescription = document.getElementById('taskDescription').value;
  
  const alertMessage = document.querySelector('.alert');
  if (task.taskDescription === '') {
    alertMessage.innerHTML = 'Por favor, preencha a tarefa.';
    alertMessage.style = 'display: block; color: red';
  } else {
    tasksArray.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
    showTasks(true);
    alertMessage.innerHTML = 'Tarefa adicionada com sucesso!';
    alertMessage.style = 'display: block; color: green';
       
    setTimeout(() => {
      alertMessage.innerHTML = '';
      taskForm.reset();
    }, 1000);
  }
});

window.onload = function () {
  showTasks();
};
//Não consegui funcionar esta função
function taskChecked(){
  const taskIncluded = document.querySelector('.taskIncluded');

  if (document.getElementById('realized').checked){
        
       taskIncluded.style ='text-decoration-line: line-through';
  }
}
