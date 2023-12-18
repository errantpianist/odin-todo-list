import projectList from "./projectList.js";
import addEventListeners from "./dom/addEventListeners.js";
import renderProjects from "./dom/renderProjects.js";
import renderTodos from "./dom/renderTodos.js";

export default function onLoad() {
  const projectListModule = projectList();
  projectListModule.setupProjects();

  addEventListeners(projectListModule);
  renderProjects(projectListModule);
  renderTodos(projectListModule.getCurrentProject(), projectListModule);
}
