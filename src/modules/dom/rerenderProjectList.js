import renderProjects from "./renderProjects";
import clearProjectList from "./clearProjectList";
import createProject from "../project";
import saveToLocalStorage from "../saveToLocalStorage";

export default function rerenderProjectList(projectListModule, addProjectText) {
  const newProject = createProject(addProjectText.value);
  projectListModule.addProject(newProject);
  projectListModule.setCurrentProject(newProject);

  saveToLocalStorage(projectListModule);

  clearProjectList();
  renderProjects(projectListModule);
  addProjectText.value = "";
}
