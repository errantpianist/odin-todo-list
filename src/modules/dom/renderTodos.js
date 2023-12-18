import addTodo from "./addTodoToDom.js";

export default function renderTodos(project, projectListModule) {
  const todos = project.getProject().todos;
  console.log(todos);
  todos.forEach((todo) => {
    addTodo(todo, project, projectListModule);
  });
}
