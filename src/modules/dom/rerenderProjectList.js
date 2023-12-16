import renderProjects from "./renderProjects";
import clearProjectList from "./clearProjectList";
import createProject from "../project";

export default function rerenderProjectList(projectListModule, addProjectText) {
  const newProject = createProject(addProjectText.value);
  projectListModule.addProject(newProject);
  projectListModule.setCurrentProject(newProject);
  clearProjectList();
  renderProjects(projectListModule);
  addProjectText.value = "";
}
