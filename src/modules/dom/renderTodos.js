import addTodo from "./addTodoToDom.js";

export default function renderTodos(project) {
  const todos = project.getProject().todos;
  console.log(todos);
  todos.forEach((todo) => {
    addTodo(todo, project);
  });
}
