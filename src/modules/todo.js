export default function createTodo(
  title,
  isComplete = false,
  dueDate = "",
  priority = "normal",
  description = ""
) {
  const toggleComplete = () => {
    isComplete = !isComplete;
  };

  const editTitle = (newTitle) => {
    title = newTitle;
  };
  const editDescription = (newDescription) => {
    description = newDescription;
  };
  const editDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };

  const priorities = ["low", "normal", "high"];
  const togglePriority = () => {
    priority =
      priorities[(priorities.indexOf(priority) + 1) % priorities.length];
  };

  const getTodo = () => {
    return {
      title,
      isComplete,
      description,
      dueDate,
      priority,
    };
  };

  return {
    editTitle,
    toggleComplete,
    getTodo,
    editDescription,
    editDueDate,
    togglePriority,
  };
}

// Path: src/todo.js
