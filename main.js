
if (localStorage.getItem('task') == null) {
    var taskArray = [];
} else {
    taskArray = JSON.parse(localStorage.getItem('task'));
}


function addTaskToDOM(taskText, index) {
    let paragraph = document.createElement('p');
    paragraph.textContent = taskText;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';

    paragraph.appendChild(deleteButton);
    document.querySelector('.tasks').appendChild(paragraph);

    
    deleteButton.addEventListener('click', function() {
        paragraph.remove(); 

        
        taskArray.splice(index, 1); 
        localStorage.setItem('task', JSON.stringify(taskArray)); 
    });
}


taskArray.forEach((task, index) => {
    addTaskToDOM(task, index);
});


let toDoForm = document.querySelector('#task-form');
toDoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let taskValue = event.target.elements.task.value.trim();
    if (taskValue !== '') {
        taskArray.push(taskValue); 
        localStorage.setItem('task', JSON.stringify(taskArray)); 

        addTaskToDOM(taskValue, taskArray.length - 1); 
        event.target.elements.task.value = ''; 
    }
});
