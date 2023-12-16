export default function addTodo(name, project) {
  const todo = document.createElement("li");
  todo.classList.add("todo");
  // todo.classList.add("show-details");
  // todo.addEventListener("click", () => {
  //   todo.classList.toggle("show-details");
  // });
  const todoTitle = document.createElement("h4");
  todoTitle.textContent = name;
  const todoDescription = document.createElement("p");
  const todoDueDate = document.createElement("p");
  const todoPriority = document.createElement("p");
  const removeTodoBtn = document.createElement("button");
  removeTodoBtn.textContent = "X";
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
