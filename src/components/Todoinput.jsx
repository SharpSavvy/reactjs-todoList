import { useState } from "react";

export default function Todoinput(props) {
  const { handleAddTodolist, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        type="text"
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter Here.."
      />
      <button
        onClick={() => {
          handleAddTodolist(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
