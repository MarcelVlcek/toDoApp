

function createNewLi() {
    let myForm = document.querySelector('#task-form');
    myForm.addEventListener('submit', function(event) {
        
        event.preventDefault();

        let newLi = document.createElement('li');
        newLi.textContent = event.target.task.value;

        newLi.classList.add('li-style')

        let taskList = document.querySelector('.tasks');
        taskList.appendChild(newLi);

        event.target.task.value = ''
    })


}
createNewLi();