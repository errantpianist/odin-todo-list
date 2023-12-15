export default function addProject() {
  if (document.getElementById("project-name").value === "") return;
  const projectName = document.getElementById("project-name");
  const project = document.createElement("div");
  project.classList.add("project");
  const projectTitle = document.createElement("h3");
  projectTitle.textContent = projectName.value;
  project.appendChild(projectTitle);
  document.getElementById("projects").appendChild(project);
  projectName.value = "";
}
