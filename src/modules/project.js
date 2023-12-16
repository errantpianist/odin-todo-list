export default function createProject(title) {
  let todos = [];
  const addTodo = (todo) => {
    todos.push(todo);
  };
  const removeTodo = (todo) => {
    todos = todos.filter((t) => t.getTodo().title !== todo);
  };
  const getProject = () => {
    let res = todos.map((t) => t.getTodo());
    return { title, todos: res };
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
