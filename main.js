

if(localStorage.getItem('tasks') == null){
    var taskArray = [];
}else{
    taskArray = JSON.parse(localStorage.getItem('tasks'))
}

    let myForm = document.querySelector('#task-form');
    myForm.addEventListener('submit', function(event) {
        
        event.preventDefault();

        taskArray.push(event.target.elements.task.value);
        taskArrayToLS = JSON.stringify(taskArray);
        localStorage.setItem('tasks', taskArrayToLS);

        event.target.elements.task.value = "";

        let taskArrayFromLS = localStorage.getItem('tasks');
        let taskArrayFromLSj = JSON.parse(taskArrayFromLS);

        let paragraph = document.createElement('p')
        paragraph.textContent = taskArrayFromLSj[taskArrayFromLSj.length - 1];
        document.querySelector('.tasks').appendChild(paragraph);
    
    
    })

let presentTaskArray = localStorage.getItem('tasks');
let presentTaskArrayj = JSON.parse(presentTaskArray);


if(presentTaskArrayj !== null){
    presentTaskArrayj.forEach(function(oneTask){
        let paragraph = document.createElement('p');
        paragraph.textContent = oneTask;
        document.querySelector('.tasks').appendChild(paragraph);
    })  
}
