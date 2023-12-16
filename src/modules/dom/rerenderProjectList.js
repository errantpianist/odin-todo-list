import renderProjects from "./renderProjects";
import clearProjectList from "./clearProjectList";
import createProject from "../project";

export default function rerenderProjectList(projectListModule, addProjectText) {
  projectListModule.addProject(createProject(addProjectText.value));
  clearProjectList();
  renderProjects(projectListModule);
  addProjectText.value = "";
}
