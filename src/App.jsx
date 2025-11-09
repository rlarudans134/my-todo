import { useState, useRef } from "react";
import Template from "./template";
import Insert from "./insert";
import List from "./list";

export default function App() {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);

  const handleAdd = (text) => {
    setTodos((prev) => [...prev, { id: nextId.current++, text, done: false }]);
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const handleRemove = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <Template>
      <h1>Todo List</h1>
      <Insert onAdd={handleAdd} />
      <List todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
    </Template>
  );
}
