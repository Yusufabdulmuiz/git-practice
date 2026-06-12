const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return; 

    const li = document.createElement('li');
    
    // Adding the text
    const span = document.createElement('span');
    span.textContent = taskText;
    span.className = 'task-text';
    li.appendChild(span);

    // Complete Button 
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.className = 'complete-btn';
    li.appendChild(completeBtn);

    // Delete Button 
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    li.appendChild(deleteBtn);

    
    taskList.appendChild(li);

    // Clear the input box
    taskInput.value = '';
});

// TASK DELETION FEATURE
taskList.addEventListener('click', function(event) {
    
    if (event.target.classList.contains('delete-btn')) {
        
        const liToRemove = event.target.parentElement;
        taskList.removeChild(liToRemove);
    }
});