import { useRef } from "react";
import { MdAddBox } from "react-icons/md";

const EnterTask = ({onNewItem}) =>{
    // const [todoName , setTodoName] = useState("");
    // const [todoDate , setToDoDate] = useState(""); 
    const todoNameElement = useRef();
    const dueDateElement = useRef(); 

    // const handleToDoName = (event) =>{
    //     setTodoName(event.target.value); 
    // }
    // const handleToDoDate = (event) =>{
    //     setToDoDate(event.target.value) ; 
    // }
    const handleAddButton = (event) =>{
        // onNewItem(todoName , todoDate); 
        // setToDoDate("");
        // setTodoName(""); 
        event.preventDefault();
        const todoName = todoNameElement.current.value ;
        const dueDate = dueDateElement.current.value ;
        todoNameElement.current.value = "" ;
        dueDateElement.current.value = "" ; 
        onNewItem(todoName , dueDate) ; 
    }

    return (
        <>
        <div className="row justify-content-center mb-3">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Enter task" ref={todoNameElement}/>
          </div>
          <div className="col-md-3">
            <input type="date" className="form-control" ref={dueDateElement}/>
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-success w-100" onClick={handleAddButton}><MdAddBox /></button>
          </div>
        </div>
        </>
    )
}

export default EnterTask ;