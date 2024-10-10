document.getElementById("addTaskBtn").addEventListener("click", function() {
    const taskName = document.getElementById("newTaskInput").value.trim();
    if (taskName) {
        addTaskToList(taskName);
        document.getElementById("newTaskInput").value = "";
    }
});

function addTaskToList(taskName) {
    const todoList = document.getElementById("todoList");
    const newTask = document.createElement("li");
    newTask.classList.add("todo-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskLabel = document.createElement("span");
    taskLabel.innerText = taskName;

    const removeTaskBtn = document.createElement("button");
    removeTaskBtn.innerText = "×";
    removeTaskBtn.classList.add("remove-task");

    newTask.appendChild(checkbox);
    newTask.appendChild(taskLabel);
    newTask.appendChild(removeTaskBtn);

    todoList.appendChild(newTask);

    removeTaskBtn.addEventListener("click", function() {
        newTask.remove();
    });
}