import { createContext, useState } from "react";

// Create a Context
export const ToDoContext = createContext();

// Create a Provider Component
export const ToDoProvider = ({ children }) => {
  const [toDoItems, setToDoItems] = useState([
    { name: "Buy Milk", date: "2025-03-11" }
  ]);

  // Function to add a new task
  const handleNewItem = (name, date) => {
    console.log(`New item added: ${name} | Due date: ${date}`);
    setToDoItems([...toDoItems, { name, date }]);
  };

  // Function to delete a task
  const handleDeleteClick = (todoName) => {
    console.log(`Item deleted: ${todoName}`);
    setToDoItems(toDoItems.filter((item) => item.name !== todoName));
  };

  return (
    <ToDoContext.Provider value={{ toDoItems, handleNewItem, handleDeleteClick }}>
      {children}
    </ToDoContext.Provider>
  );
};
