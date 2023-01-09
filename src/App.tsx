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
    <div className="container">
      <div className="d-flex my-5">
        <div className="input-group flex-nowrap">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </div>
        <button className="btn btn-sm btn-primary" onClick={onSave}>
          Save
        </button>
      </div>
      <div className="my-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="d-flex justify-content-space-between align-items-center"
          >
            <div className=" w-50 my-3  " style={{ color: "black" }}>
              {todo.title}
            </div>
            <div>
              <button
                className={`btn btn-sm text-decoration-${
                  todo.completed ? "line-through" : "none"
                } btn-${todo.completed ? "primary" : "success"}`}
                // style={{ textDecorationLine: 'line-through' }}
                onClick={() => toggle(todo.id)}
              >
                {" "}
                {todo.completed ? "Mark Not Completed" : "Mark Completed"}
              </button>

              <button
                className="btn btn-sm btn-danger mx-1"
                onClick={() => onDelete(todo.id)}
              >
                {" "}
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
