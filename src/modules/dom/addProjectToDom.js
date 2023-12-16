export default function addProject(name) {
  const project = document.createElement("div");
  project.classList.add("project");
  const projectTitle = document.createElement("h3");
  projectTitle.textContent = name;
  project.appendChild(projectTitle);
  document.getElementById("projects").appendChild(project);
}
