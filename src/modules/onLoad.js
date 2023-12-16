import projectList from "./projectList.js";
import addEventListeners from "./dom/addEventListeners.js";
import renderProjects from "./renderProjects.js";

export default function onLoad() {
  const projectListModule = projectList();
  projectListModule.setupProjects();

  addEventListeners(projectListModule);
  renderProjects(projectListModule);
}
