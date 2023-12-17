import cyclePriority from "./cyclePriority";

export default function addTodo(todoObj, project) {
  const todoInfo = todoObj.getTodo();
  const todo = document.createElement("li");
  todo.classList.add("todo");
  todo.classList.add(todoInfo.priority);
  // todo.classList.add("show-details");
  todo.addEventListener("click", () => {
    console.log(todoObj);
  });
  const todoTitle = document.createElement("h4");
  todoTitle.textContent = todoInfo.title;
  const todoDescription = document.createElement("p");
  const todoDueDate = document.createElement("p");
  const todoPriority = document.createElement("button");
  todoPriority.textContent = "!";
  todoPriority.addEventListener("click", (e) => {
    cyclePriority(e.target.parentNode);
    todoObj.togglePriority();
  });

  const removeTodoBtn = document.createElement("button");
  removeTodoBtn.textContent = "X";
  removeTodoBtn.classList.add("x-btn");
  removeTodoBtn.addEventListener("click", () => {
    project.removeTodo(name);
    todo.remove();
  });
  todo.appendChild(todoTitle);
  todo.appendChild(todoDescription);
  todo.appendChild(todoDueDate);
  todo.appendChild(todoPriority);
  todo.appendChild(removeTodoBtn);
  document.getElementById("todo-list").appendChild(todo);
  document.getElementById("todo-name").value = "";
}
