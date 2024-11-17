function adicionarTarefa(){
  // Get the input element and its value
  const taskInput = document.getElementById(`task-input`);
  const taskText = taskInput.value.trim();

  // Check if the input is not empty
  if (taskText !== '' ) {
    // Create a new list item
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
  
    // Create a "Tarefa Concluida" button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Finished'
    completeBtn.onclick = function( ) {
      // Remover the task from the list
      newTask.remove();
    };

    // Append the button to the list item
    newTask.appendChild(completeBtn);

    // Add the new task to the task list
    const taskList = document.getElementById('task-list');
    taskList.appendChild(newTask);

    // Clear the input field
    taskInput.value = '';
  } else {
    alert('Por favor, insira uma tarefa.')
  }
}