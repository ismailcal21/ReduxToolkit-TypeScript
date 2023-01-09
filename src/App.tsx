import React from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { add, remove, toggleCompleted } from "./features/todoSlice";

function App() {
  const todos = useAppSelector((state) => state.todos);
  const [title, setTitle] = useState("");

  const dispatch = useAppDispatch();

  const onSave = () => {
    dispatch(add(title));
    setTitle("");
  };

  const onDelete = (id: string) => {
    dispatch(remove(id));
  };

  const toggle = (id: string) => {
    dispatch(toggleCompleted(id));
  };

  return (
    <div className="App">
      <input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <button onClick={onSave}>Save</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <button onClick={() => toggle(todo.id)}>
              {" "}
              {todo.completed ? "Mark Not Completed" : "Mark Completed"}
            </button>

            <button onClick={() => onDelete(todo.id)}> Delete</button>
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
