import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import EnterTask from "./components/EnterTask";
import ToDoItems from "./components/ToDoItems";
import { ToDoProvider } from "./ToDoContext";

function App() {
  return (
    <ToDoProvider>
      <div className="container mt-4">
        <div className="todo-container text-center">
          <AppName />
          <EnterTask />
          <div className="row bg-light p-2 align-items-center mb-2">
            <ToDoItems />
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
