// Strict null checks handled
const taskForm = document.getElementById("taskForm") as HTMLFormElement;
const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;
const listContainer = document.getElementById(
  "listContainer"
) as HTMLDivElement;
const emptyState = document.getElementById("emptyState") as HTMLDivElement;

// Initial null check
if (!taskForm || !taskInput || !taskList || !listContainer || !emptyState) {
  throw new Error("Critical DOM elements missing!");
}

function updateUI(): void {
  const hasTasks = taskList.children.length > 0;
  listContainer.style.display = hasTasks ? "block" : "none";
  emptyState.style.display = hasTasks ? "none" : "block";
}

taskForm.addEventListener("submit", (e: Event) => {
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
