import { useRef, useContext } from "react";
import { MdAddBox } from "react-icons/md";
import { ToDoContext } from "../ToDoContext";

const EnterTask = () => {
  const { handleNewItem } = useContext(ToDoContext); // Access the context

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButton = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    if (todoName && dueDate) {
      handleNewItem(todoName, dueDate);
      todoNameElement.current.value = "";
      dueDateElement.current.value = "";
    }
  };

  return (
    <div className="row justify-content-center mb-3">
      <div className="col-md-4">
        <input type="text" className="form-control" placeholder="Enter task" ref={todoNameElement} />
      </div>
      <div className="col-md-3">
        <input type="date" className="form-control" ref={dueDateElement} />
      </div>
      <div className="col-md-2">
        <button type="button" className="btn btn-success w-100" onClick={handleAddButton}>
          <MdAddBox />
        </button>
      </div>
    </div>
  );
};

export default EnterTask;
