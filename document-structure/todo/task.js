let taskInput = document.getElementById('task__input');
let tasksAdd = document.getElementById('tasks__add');
let tasksList = document.getElementById('tasks__list');

let addingTask = () => {
    tasksList.insertAdjacentHTML('afterbegin', `
        <div class="task">
            <div class="task__title">
                ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`
    )
    taskInput.value = ''; 
}

tasksList.addEventListener("click", e => {
    if (e.target.classList.contains("task__remove")) {
        e.target.parentElement.remove();
    }
});

let tasksAddButton = () => {
    tasksAdd.addEventListener('click', e => {
        e.preventDefault();
        if (taskInput.value.trim().length > 0) {
            addingTask()
        }
    })
}
tasksAddButton();