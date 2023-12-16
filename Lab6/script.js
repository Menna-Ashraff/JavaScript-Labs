const loginForm = document.getElementById("login-form")
const loginButton = document.getElementById("login_form")
const loginErrorMsg = document.getElementById("errormsg")

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value
    const password = loginForm.password.value

    if (username === "admin" && password === "123")
    {
        alert("Welcome")  
    } 
    else 
    {
        loginErrorMsg.style.opacity = 1
    }
})

function myFunc(){
    window.location = "scc.html"
}

function addTask() 
{
    var taskName = document.getElementById('task-holder').value
    if (taskName) {
        var taskList = document.getElementById('taskList')
        var taskItem = document.createElement('li')
        taskItem.className = 'task-item'
        taskItem.innerHTML = `${taskName}
            <span class="done-btn" onclick="markDone(this)">✓</span>
            <span class="delete-btn" onclick="deleteTask(this)">✗</span>
        `;
        taskList.appendChild(taskItem);
        document.getElementById('newTask').value = ''
    }
}

function markDone(element) 
{
    element.parentElement.classList.toggle('done')
}

function deleteTask(element) 
{
    element.parentNode.remove()
}