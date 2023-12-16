import addTodo from "./addTodoToDom";

import rerenderProjectList from "./rerenderProjectList";

export default function addEventListeners(projectListModule) {
  const addProjectBtn = document.getElementById("add-project-btn");
  const addProjectText = document.getElementById("project-name");

  addProjectBtn.addEventListener("click", (e) => {
    rerenderProjectList(projectListModule, addProjectText);
  });

  addProjectText.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      rerenderProjectList(projectListModule, addProjectText);
    }
  });

  // document.getElementById("add-todo").addEventListener("click", addTodo);
  // document.getElementById("todo-name").addEventListener("keypress", (e) => {
  //   if (e.key === "Enter") {
  //     addTodo();
  //   }
  // });
}
