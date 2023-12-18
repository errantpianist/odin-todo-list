import rerenderProjectList from "./rerenderProjectList";
import rerenderTodoList from "./rerenderTodoList";

export default function addEventListeners(projectListModule) {
  const addProjectBtn = document.getElementById("add-project-btn");
  const addProjectText = document.getElementById("project-name");

  addProjectBtn.addEventListener("click", (e) => {
    if (addProjectText.value !== "") {
      rerenderProjectList(projectListModule, addProjectText, projectListModule);
      document.getElementById("todo-list").innerHTML = "";
    }
  });

  addProjectText.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && addProjectText.value !== "") {
      rerenderProjectList(projectListModule, addProjectText);
      document.getElementById("todo-list").innerHTML = "";
    }
  });

  const addTodoBtn = document.getElementById("add-todo-btn");
  const addTodoText = document.getElementById("todo-name");

  addTodoBtn.addEventListener("click", (e) => {
    if (addTodoText.value !== "") {
      rerenderTodoList(
        projectListModule.getCurrentProject(),
        addTodoText,
        projectListModule
      );
    }
  });

  addTodoText.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && addTodoText.value !== "") {
      rerenderTodoList(
        projectListModule.getCurrentProject(),
        addTodoText,
        projectListModule
      );
    }
  });
}
