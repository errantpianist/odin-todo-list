import cyclePriority from "./cyclePriority";

export default function addTodo(todoObj, project) {
  const todoInfo = todoObj.getTodo();

  const todo = document.createElement("li");
  todo.classList.add("todo");
  todo.classList.add(todoInfo.priority);
  const todoCheckbox = document.createElement("input");
  todoCheckbox.type = "checkbox";
  todoCheckbox.checked = todoInfo.isComplete;
  todoCheckbox.addEventListener("change", () => {
    todoObj.toggleComplete();
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
  });
  const hideDescriptionBtn = document.createElement("button");
  hideDescriptionBtn.textContent = "Show/hide description";
  hideDescriptionBtn.classList.add("hide-description-btn");
  hideDescriptionBtn.addEventListener("click", (e) => {
    e.target.parentNode.childNodes[1].classList.toggle("hidden");
  });

  const todoDueDate = document.createElement("p");
  const todoPriority = document.createElement("button");
  todoPriority.textContent = "!";
  todoPriority.addEventListener("click", (e) => {
    cyclePriority(e.target.parentNode.parentNode);
    todoObj.togglePriority();
  });

  const removeTodoBtn = document.createElement("button");
  removeTodoBtn.textContent = "X";
  removeTodoBtn.classList.add("x-btn");
  removeTodoBtn.addEventListener("click", () => {
    project.removeTodo(todoInfo.title);
    todo.remove();
  });
  todoMainContent.appendChild(todoCheckbox);
  todoMainContent.appendChild(todoTitle);
  todoMainContent.appendChild(todoDueDate);
  todoMainContent.appendChild(todoPriority);
  todoMainContent.appendChild(removeTodoBtn);
  todo.appendChild(todoMainContent);
  todo.appendChild(todoDescription);
  todo.appendChild(hideDescriptionBtn);
  document.getElementById("todo-list").appendChild(todo);
  document.getElementById("todo-name").value = "";
}
