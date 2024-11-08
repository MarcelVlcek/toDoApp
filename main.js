    
    if(localStorage.getItem('task') == null){
        var taskArray = [];

    }else{
        taskArray = JSON.parse(localStorage.getItem('task'))
    }
    
    

    let toDoForm = document.querySelector('#task-form');
    toDoForm.addEventListener('submit', function(event){
        event.preventDefault();

        let taskValue = event.target.elements.task.value.trim();
        if(taskValue !== ''){
            taskArray.push(taskValue);

        let taskArrayToLS = JSON.stringify(taskArray);
        localStorage.setItem('task', taskArrayToLS);
    
        event.target.elements.task.value = '';

        let taskArrayFromLS = localStorage.getItem('task');
        let taskArrayFromLSj = JSON.parse(taskArrayFromLS);

        


        let paragraph = document.createElement('p');
        paragraph.textContent = taskArrayFromLSj[taskArrayFromLSj.length - 1];

        document.querySelector('.tasks').appendChild(paragraph); 
        }
})

    let actualTaskArray = localStorage.getItem('task');
    let actualTaskArrayJ = JSON.parse(actualTaskArray);

    if(actualTaskArrayJ != null) {
        actualTaskArrayJ.forEach(function(oneTask) {
            let paragraph = document.createElement('p');
            paragraph.textContent = oneTask
            document.querySelector('.tasks').appendChild(paragraph);
        })
    }



