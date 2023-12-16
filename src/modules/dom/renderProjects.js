import addProject from "./addProjectToDom.js";

export default function renderProjects(projectListModule) {
  const projects = projectListModule.getProjects();
  projects.forEach((project) => {
    addProject(project.getProject().title, projectListModule);
  });
}
