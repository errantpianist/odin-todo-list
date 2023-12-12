export default function addProject(title) {
  const project = document.createElement("div");
  project.classList.add("project");
  const projectTitle = document.createElement("h3");
  projectTitle.textContent = title;
  project.appendChild(projectTitle);
  document.getElementById("projects").appendChild(project);
}
