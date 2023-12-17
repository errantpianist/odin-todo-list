export default function createProject(title) {
  let todos = [];
  const addTodo = (todo) => {
    todos.push(todo);
  };
  const removeTodo = (todo) => {
    todos = todos.filter((t) => t.getTodo().title !== todo);
  };
  const getProject = () => {
    return { title, todos };
  };

  const editTitle = (newTitle) => {
    title = newTitle;
  };

  return {
    addTodo,
    removeTodo,
    editTitle,
    getProject,
  };
}
