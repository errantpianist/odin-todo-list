export default function createTodo(title, description, dueDate, priority) {
  let isComplete = false;
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
  const editPriority = (newPriority) => {
    priority = newPriority;
  };

  const getTodo = () => {
    return { title, isComplete, description, dueDate, priority };
  };

  return {
    editTitle,
    toggleComplete,
    getTodo,
    editDescription,
    editDueDate,
    editPriority,
  };
}

// Path: src/todo.js
