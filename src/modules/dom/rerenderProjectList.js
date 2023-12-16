import renderProjects from "../renderProjects";
import clearProjectList from "./clearProjectList";
import createProject from "../project";

export default function rerenderProjectList(projectListModule, addProjectText) {
  projectListModule.addProject(createProject(addProjectText.value));
  console.log(projectListModule.getProjects());
  clearProjectList();
  renderProjects(projectListModule);
  addProjectText.value = "";
}
