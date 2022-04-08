import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function Todo({ todo, check, clickDelete }) {
  function handleCheck() {
    check(todo.id);
    if (todo.complete) {
      console.log("completed");
    } else {
      console.log("not completed");
    }
  }

  function handleDelete() {
    clickDelete(todo.id);
  }

  return (
    <div className="task">
      <label className="form-check-label">
        <input
          className="form-check-input"
          type="checkbox"
          checked={todo.complete}
          onChange={handleCheck}
        />
        <span className="myTask">{todo.name}</span>
        <FaTrashAlt className="icon" onClick={handleDelete} />
      </label>
    </div>
  );
}

export default Todo;
