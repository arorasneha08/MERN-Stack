import { MdDeleteForever } from "react-icons/md";


const ToDoItems = ({ items , onDeleteClick}) => {
  return (
    <>
      {
        items.map((todo, index) => (
          <div key={index} className="row bg-white p-2 mb-2 shadow-sm">
            <div className="col-md-6">{todo.name}</div>
            <div className="col-md-4">{todo.date}</div>
            <div className="col-md-2">
              <button type="button" className="btn btn-danger w-100" onClick={() => onDeleteClick(todo.name)}><MdDeleteForever/></button>
            </div>
          </div>
        ))
      }
    </>
  );
};

export default ToDoItems;
