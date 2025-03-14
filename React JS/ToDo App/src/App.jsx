import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import EnterTask from "./components/EnterTask";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";

function App() {
  
  const todos = [
    {
      name : "buy milk" , 
      date : "12/34/78"
    }
  ]
  const [toDoItems , setToDoItems] = useState(todos);     

  const handleNewItem = (itemname , itemdate) =>{
    console.log(`new item added : ${itemname} and due date : ${itemdate}`);
    const newToDoItems = [...toDoItems , {name : itemname , date : itemdate}]; 
    setToDoItems(newToDoItems); 
  }
  const handleDeleteClick = (todoName) =>{
    console.log(`item delted : ${todoName}` );
    const newToDo = toDoItems.filter((item) =>{
      return item.name != todoName; 
    })
    setToDoItems(newToDo); 
  }
  return (
    <div className="container mt-4">
      <div className="todo-container text-center">
        <AppName/>

        <EnterTask onNewItem={handleNewItem}></EnterTask>

        <div className="row bg-light p-2 align-items-center mb-2">
          <ToDoItems items={toDoItems} onDeleteClick={handleDeleteClick}></ToDoItems>
        </div>
      </div>
    </div>
  );
}

export default App;
