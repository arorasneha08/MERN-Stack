import { ToDo } from "../models/todo.js";

export const createToDo = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            console.log("Missing fields:", { title, description });
            return res.status(403).json({ message: "All fields are required .." });
        }

        // console.log("Received request to create todo:", { title, description });

        const todo = new ToDo({ title, description });
        await todo.save(); 

        // console.log("Todo saved successfully:", todo);

        return res.status(201).json({
            success: true,
            message: "Todo created successfully",
            todo
        });

    } catch (error) {
        console.error("Error in createToDo:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};



export const getAllToDos = async(req, res) =>{
    try{
        const todos = await ToDo.find(); 
        // console.log(todos);
        return res.status(200).json({
            success : true ,
            todos 
        })
    }
    catch(error){
        console.log(error);
    }
}

export const updateToDo = async(req, res) =>{
    try{
        const todoId = req.params.todoId ; 
        const {title} = req.body ;
        const todo = await ToDo.findByIdAndUpdate(todoId , {title} , {new : true}); 
        await todo.save(); 
         
        res.status(200).json({
            success : true , 
            todo ,
            message : "todo list updated .. " 
        })
    }
    catch(error){
        console.log(error); 
    }
}

export const deleteToDo = async(req, res) =>{
    try {
        const todoId = req.params.todoId ; 
        const todo = await ToDo.findByIdAndDelete(todoId); 
        return res.status(200).json({
            success : true , 
            message : "to do deleted successfully" 
        })
    } catch (error) {
        console.log(error); 
    }
}