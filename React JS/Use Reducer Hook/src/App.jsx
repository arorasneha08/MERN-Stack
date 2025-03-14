import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import EnterTask from "./components/EnterTask";
import ToDoItems from "./components/ToDoItems";
import { useReducer } from "react";

const todoItemReducer = (currToDoItem, action) => {
  let newToDoItems = currToDoItem;

  if (action.type === "NEW_ITEM") {
    newToDoItems = [
      ...currToDoItem,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newToDoItems = currToDoItem.filter((item) => item.name !== action.payload.itemName);
  }

  return newToDoItems;
};

function App() {
  const [toDoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log("Adding new item:", itemName, itemDueDate); // Debugging Log

    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName, 
        itemDueDate, 
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const handleDeleteClick = (todoName) => {
    console.log(`Item deleted: ${todoName}`);

    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoName, 
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <div className="container mt-4">
      <div className="todo-container text-center">
        <AppName />

        <EnterTask onNewItem={handleNewItem} />

        <div className="row bg-light p-2 align-items-center mb-2">
          <ToDoItems items={toDoItems} onDeleteClick={handleDeleteClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
