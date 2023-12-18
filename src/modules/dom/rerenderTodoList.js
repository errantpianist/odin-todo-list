import renderTodos from "./renderTodos";
import clearTodoList from "./clearTodoList";
import createTodo from "../todo";
import saveToLocalStorage from "../saveToLocalStorage";

export default function rerenderTodoList(
  project,
  addTodoText,
  projectListModule
) {
  project.addTodo(createTodo(addTodoText.value));
  console.log(addTodoText.value);
  saveToLocalStorage(projectListModule);
  clearTodoList();
  renderTodos(project, projectListModule);
  addTodoText.value = "";
}
