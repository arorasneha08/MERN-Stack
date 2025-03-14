function ToDoItems({ items, onDeleteClick }) {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          <span>{item.name} - <strong>{item.dueDate}</strong></span>
          <button className="btn btn-danger" onClick={() => onDeleteClick(item.name)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoItems;
