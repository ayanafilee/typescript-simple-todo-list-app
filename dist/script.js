"use strict";
// Strict null checks handled

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const listContainer = document.getElementById("listContainer");
const emptyState = document.getElementById("emptyState");
// Initial null check
if (!taskForm || !taskInput || !taskList || !listContainer || !emptyState) {
  throw new Error("Critical DOM elements missing!");
}
function updateUI() {
  const hasTasks = taskList.children.length > 0;
  listContainer.style.display = hasTasks ? "block" : "none";
  emptyState.style.display = hasTasks ? "none" : "block";
}
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    const taskContent = document.createElement("span");
    taskContent.className = "task-content";
    taskContent.textContent = taskText;
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener("click", () => {
      taskItem.remove();
      updateUI();
    });
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
    taskInput.value = "";
    taskInput.focus();
    updateUI();
  }
});
// Initial UI setup
updateUI();
