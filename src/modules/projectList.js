import createProject from "./project";

export default function projectList() {
  let projects = [];
  let currentProject;
  const setupProjects = () => {
    if (localStorage.getItem("projects")) {
      projects = JSON.parse(localStorage.getItem("projects"));
      projects = projects.map((p) => createProject(p.title, p.todos));
      currentProject = projects[0];
    } else {
      const defaultProject = createProject("Main project");
      projects.push(defaultProject);
      currentProject = projects[0];
    }
  };

  const setCurrentProject = (project) => {
    currentProject = project;
  };
  const getCurrentProject = () => currentProject;
  const addProject = (project) => {
    projects.push(project);
  };
  const removeProject = (project) => {
    projects = projects.filter((p) => p.getProject().title !== project);
  };

  const getProject = (project) => {
    return projects.find((p) => p.getProject().title === project);
  };

  const getProjects = () => projects;
  return {
    setupProjects,
    addProject,
    removeProject,
    getProjects,
    setCurrentProject,
    getCurrentProject,
    getProject,
  };
}
