import cyclePriority from "./cyclePriority";
import saveToLocalStorage from "../saveToLocalStorage";

export default function addTodo(todoObj, project, projectListModule) {
  const todoInfo = todoObj.getTodo();

  const todo = document.createElement("li");
  todo.classList.add("todo");
  todo.classList.add(todoInfo.priority);
  const todoCheckbox = document.createElement("input");
  todoCheckbox.type = "checkbox";
  todoCheckbox.checked = todoInfo.isComplete;
  todoCheckbox.addEventListener("change", () => {
    todoObj.toggleComplete();
    saveToLocalStorage(projectListModule);
  });
  const todoMainContent = document.createElement("div");
  todoMainContent.classList.add("todo-main-content");
  const todoTitle = document.createElement("h4");
  todoTitle.textContent = todoInfo.title;

  const todoDescription = document.createElement("textarea");
  todoDescription.classList.add("todo-description");
  todoDescription.textContent = todoInfo.description;
  todoDescription.addEventListener("change", (e) => {
    todoObj.editDescription(e.target.value);
    saveToLocalStorage(projectListModule);
  });
  const hideDescriptionBtn = document.createElement("button");
  hideDescriptionBtn.textContent = "Show/hide description";
  hideDescriptionBtn.classList.add("hide-description-btn");
  hideDescriptionBtn.addEventListener("click", (e) => {
    e.target.parentNode.childNodes[1].classList.toggle("hidden");
  });

  const todoDueDate = document.createElement("input");
  todoDueDate.type = "date";
  todoDueDate.value = todoInfo.dueDate;
  todoDueDate.addEventListener("change", (e) => {
    todoObj.editDueDate(e.target.value);
    saveToLocalStorage(projectListModule);
  });

  const todoPriority = document.createElement("button");
  todoPriority.textContent = "!";
  todoPriority.addEventListener("click", (e) => {
    cyclePriority(e.target.parentNode.parentNode.parentNode);
    todoObj.togglePriority();
    saveToLocalStorage(projectListModule);
  });

  const removeTodoBtn = document.createElement("button");
  removeTodoBtn.textContent = "X";
  removeTodoBtn.classList.add("x-btn");
  removeTodoBtn.addEventListener("click", () => {
    project.removeTodo(todoInfo.title);
    saveToLocalStorage(projectListModule);
    todo.remove();
  });
  todoMainContent.appendChild(todoCheckbox);
  todoMainContent.appendChild(todoTitle);

  const editTodo = document.createElement("div");
  editTodo.classList.add("edit-todo");
  editTodo.appendChild(todoDueDate);
  editTodo.appendChild(todoPriority);
  editTodo.appendChild(removeTodoBtn);
  todoMainContent.appendChild(editTodo);
  todo.appendChild(todoMainContent);
  todo.appendChild(todoDescription);
  todo.appendChild(hideDescriptionBtn);
  document.getElementById("todo-list").appendChild(todo);
  document.getElementById("todo-name").value = "";
}
