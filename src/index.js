document.addEventListener("DOMContentLoaded", () => {

  //form & input values
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  // form submit event listener
  form.addEventListener('submit', addTask);
  // delete event listener
  taskList.addEventListener('click', removeTask);

  //Add task
  function addTask(e) {
    e.preventDefault();
    // get input value
    const newTaskDescription = document.getElementById('new-task-description').value;
    console.log(newTaskDescription);
    // create new li element
    const li = document.createElement('li');
    // add text node with input value
    li.appendChild(document.createTextNode(newTaskDescription));
    // create delete button element
    const deleteBtn = document.createElement('button');
    // attach node to deleteBtn
    deleteBtn.appendChild(document.createTextNode('X'));
    // attach button to list
    li.appendChild(deleteBtn);
    // append li to list
    taskList.appendChild(li);
  };

  // Remove Task
  function removeTask(e) {
    if (e.target.nodeName === 'BUTTON') {
      if (confirm('Are you sure?')) {
        let li = e.target.parentElement;
        taskList.removeChild(li);
      }
    }
  };
});
