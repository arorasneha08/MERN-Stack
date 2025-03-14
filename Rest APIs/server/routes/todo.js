import express from "express" ;
import { createToDo, deleteToDo, getAllToDos, updateToDo } from "../controllers/todo.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const router = express.Router(); 

router.route("/").post(isAuthenticated ,createToDo); 
router.route("/").get(getAllToDos); 
router.route("/:todoId").put(isAuthenticated , updateToDo); 
router.route("/:todoId").delete(isAuthenticated ,deleteToDo); 

export default router;  
