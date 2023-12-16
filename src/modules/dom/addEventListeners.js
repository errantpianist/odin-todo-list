import renderProjects from "../renderProjects";
import addTodo from "./addTodoToDom";
import createProject from "../project";

export default function addEventListeners(projectListModule) {
  const addProjectBtn = document.getElementById("add-project-btn");
  const addProjectText = document.getElementById("project-name");

  addProjectBtn.addEventListener("click", (e) => {
    projectListModule.addProject(createProject(addProjectText.value));
    console.log(projectListModule.getProjects());
    renderProjects(projectListModule);
  });

  addProjectText.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      projectListModule.addProject(addProjectText.value);
    }
  });

  document.getElementById("add-todo").addEventListener("click", addTodo);
  document.getElementById("todo-name").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  });
}
