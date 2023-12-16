export default function addProject(name, projectListModule) {
  const project = document.createElement("div");
  project.classList.add("project");
  const projectTitle = document.createElement("h3");
  projectTitle.textContent = name;
  const removeProjectBtn = document.createElement("button");
  removeProjectBtn.textContent = "X";
  removeProjectBtn.addEventListener("click", () => {
    projectListModule.removeProject(name);
    project.remove();
  });

  project.appendChild(projectTitle);
  project.appendChild(removeProjectBtn);
  document.getElementById("project-list").appendChild(project);
}
