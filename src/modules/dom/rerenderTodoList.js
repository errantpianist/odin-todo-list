import renderTodos from "./renderTodos";
import clearTodoList from "./clearTodoList";
import createTodo from "../todo";

export default function rerenderTodoList(project, addTodoText) {
  project.addTodo(createTodo(addTodoText.value));
  clearTodoList();
  renderTodos(project);
  addTodoText.value = "";
}
