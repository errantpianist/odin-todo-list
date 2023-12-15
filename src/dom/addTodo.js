export default function addTodo() {
  if (document.getElementById("todo-name").value === "") return;

  const todoName = document.getElementById("todo-name").value;

  const todo = document.createElement("li");
  todo.classList.add("todo");
  const todoTitle = document.createElement("h4");
  todoTitle.textContent = todoName;
  const todoDescription = document.createElement("p");
  todoDescription.textContent = "Todo description";
  const todoDueDate = document.createElement("p");
  todoDueDate.textContent = "Todo due date";
  const todoPriority = document.createElement("p");
  todoPriority.textContent = "Todo priority";
  todo.appendChild(todoTitle);
  todo.appendChild(todoDescription);
  todo.appendChild(todoDueDate);
  todo.appendChild(todoPriority);
  document.getElementById("todos").appendChild(todo);
  document.getElementById("todo-name").value = "";
}
