const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
let tasks = [];
function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                tasks.push({ text: taskText});
                taskInput.value = "";
                displayTasks();
            }
        }
                function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            displayTasks();
        }
            function clearCompletedTasks() {
            tasks = tasks.filter(task => !task.completed);
            displayTasks();
        }
        addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
 displayTasks();