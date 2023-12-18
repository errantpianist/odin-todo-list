import createTodo from "./todo";

export default function createProject(title, todos = []) {
  if (todos.length > 0) {
    todos = todos.map((t) =>
      createTodo(t.title, t.isComplete, t.dueDate, t.priority, t.description)
    );
    console.log(todos);
  }

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
