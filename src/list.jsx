import Item from "./item";

export default function List({ todos, onToggle, onRemove }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((t) => (
        <Item
          key={t.id}
          todo={t}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}
