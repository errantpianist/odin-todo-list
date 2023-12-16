import addProject from "./dom/addProjectToDom.js";
import projectList from "./projectList.js";

export default function renderProjects(projectListModule) {
  const projects = projectListModule.getProjects();
  projects.forEach((project) => {
    addProject(project.getProject().title);
  });
}
