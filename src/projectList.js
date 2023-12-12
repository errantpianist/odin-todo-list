import createProject from "./project";

export default function projectList() {
  const projects = [];
  const setupProjects = () => {
    const defaultProject = createProject("Project");
    projects.push(defaultProject);
  };
  const addProject = (project) => {
    projects.push(project);
  };
  const removeProject = (project) => {
    projects = projects.filter((p) => p.getProject.title() !== project);
  };
  const getProjects = () => projects;
  return {
    setupProjects,
    addProject,
    removeProject,
    getProjects,
  };
}
