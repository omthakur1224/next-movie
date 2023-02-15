import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "../redux/action";
import { Todo } from "./contraint";

interface RootState {
  todos: Todo[];
}

function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue) {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id: number) => {};
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <div  key={todo.id} style={{
            color:"white", background:"red"}}>
            <h1
             
              style={{
                color:"white", background:"red",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => handleToggleTodo(todo.id)}>
              {todo.text}
            </h1>

            <button onClick={() => handleToggleTodo(todo.id)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
