import createTodo from "./todo.js";
import createProject from "./project.js";
import projectList from "./projectList.js";
import addProject from "./dom/addProject.js";
import addTodo from "./dom/addTodo.js";

const projectListModule = projectList();
projectListModule.setupProjects();
const renderProjects = () => {
  const projects = projectListModule.getProjects();
  projects.forEach((project) => {
    addProject(project.getProject().title);
  });
};
renderProjects();

const addProjectBtn = document.getElementById("add-project-btn");
const addProjectText = document.getElementById("project-name");

addProjectBtn.addEventListener("click", addProject);

addProjectText.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addProject();
  }
});

document.getElementById("add-todo").addEventListener("click", addTodo);
document.getElementById("todo-name").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

addTodo();
addProject("test");
