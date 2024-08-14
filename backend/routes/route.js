import express from 'express';
import { addTodo,getAllTodos,updateTodo, deleteTodo, toggleTodoDone } from '../controllers/Todo.controller.js';
import {userLogin} from "../controllers/User.controller.js"
const route = express.Router();

route.post('/todos', addTodo)
route.get("/todos", getAllTodos)
route.put("/todos/:id", updateTodo)
route.delete("/todos/:id", deleteTodo)
route.get("/todos/:id", toggleTodoDone)

// User  route
route.post("/user",userLogin)
export default route