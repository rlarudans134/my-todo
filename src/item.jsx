export default function Item({ todo, onToggle, onRemove }) {
  return (
    <li style={{ marginBottom: '0.5rem' }}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{
        textDecoration: todo.done ? "line-through" : "none",
        marginLeft: '8px'
      }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)} style={{ marginLeft: '8px' }}>
        ✕
      </button>
    </li>
  );
}
