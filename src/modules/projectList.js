import createProject from "./project";

export default function projectList() {
  let projects = [];
  let currentProject;
  const setupProjects = () => {
    const defaultProject = createProject("Hi from projectList.js");
    projects.push(defaultProject);
    currentProject = projects[0];
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
