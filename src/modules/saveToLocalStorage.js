export default function saveToLocalStorage(projectListModule) {
  let projectInfos = projectListModule.getProjects().map((p) => p.getProject());

  for (let project of projectInfos) {
    project.todos = project.todos.map((t) => t.getTodo());
  }

  localStorage.setItem("projects", JSON.stringify(projectInfos));
}
