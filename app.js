// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  form.addEventListener("submit", addTask);
  // remove task event
  taskList.addEventListener("click", removeTask);
}

// Add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("add a task");
  }
  // Creat LI element
  const li = document.createElement("li");
  // Add class
  li.className = "collection-item";
  // Create text node append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // crate new link element
  const link = document.createElement("a");
  // add class
  link.className = "delete-item secondary-content";
  // Add icom html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear the ipuut
  taskInput.value = "";

  e.preventDefault();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
  }
  console.log(e.target);
}
