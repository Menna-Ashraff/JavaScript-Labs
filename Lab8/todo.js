window.onload = function() 
{
    var savedTasks = JSON.parse(localStorage.getItem('tasks'))
    if (savedTasks) 
    {
        var taskList = document.getElementById('taskList')
        taskList.innerHTML = savedTasks
    }
}

function addTask() 
{
    var taskName = document.getElementById('task-holder').value
    if (taskName) 
    {
        var taskList = document.getElementById('taskList')
        var taskItem = document.createElement('li')
        taskItem.className = 'task-item'
        taskItem.innerHTML = `${taskName}
            <span class="done-btn" onclick="markDone(this)">✓</span>
            <span class="delete-btn" onclick="deleteTask(this)">✗</span>
        `
        taskList.appendChild(taskItem)
        saveTasksToLocalStorage()
        document.getElementById('newTask').value = ''
    }
}

function markDone(element) 
{
    element.parentElement.classList.toggle('done')
    saveTasksToLocalStorage()
}

function deleteTask(element) 
{
    element.parentNode.remove()
    saveTasksToLocalStorage()
}

function saveTasksToLocalStorage() 
{
    var taskList = document.getElementById('taskList').innerHTML
    localStorage.setItem('tasks', JSON.stringify(taskList))
}