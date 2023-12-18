import clearTodoList from "./clearTodoList";
import renderTodos from "./renderTodos";
import saveToLocalStorage from "../saveToLocalStorage";

export default function addProject(name, projectListModule) {
  const project = document.createElement("div");
  project.classList.add("project");
  const projectTitle = document.createElement("h3");
  projectTitle.textContent = name;

  if (name == projectListModule.getCurrentProject().getProject().title) {
    projectTitle.classList.add("active-project");
  }
  projectTitle.addEventListener("click", (e) => {
    projectListModule.setCurrentProject(projectListModule.getProject(name));
    const activeProject = document.querySelector(".active-project");
    if (activeProject) {
      activeProject.classList.remove("active-project");
    }

    e.target.classList.add("active-project");
    clearTodoList();
    renderTodos(projectListModule.getCurrentProject(), projectListModule);
  });
  const removeProjectBtn = document.createElement("button");
  removeProjectBtn.textContent = "X";
  removeProjectBtn.classList.add("x-btn");
  removeProjectBtn.addEventListener("click", () => {
    if (projectListModule.getProjects().length === 1) {
      return;
    }
    projectListModule.removeProject(name);
    saveToLocalStorage(projectListModule);
    project.remove();
    projectListModule.setCurrentProject(projectListModule.getProjects()[0]);
    clearTodoList();
    renderTodos(projectListModule.getCurrentProject(), projectListModule);
  });

  project.appendChild(projectTitle);
  project.appendChild(removeProjectBtn);
  document.getElementById("project-list").appendChild(project);
}
