import TodoModel from "../models/Todo.model.js";
import client from "../cilent.js";

export const addTodo = async (req, res) => {
  try {
    const { description, status } = req.body;
    const trimDescription = description.trim();
    const existdDescription = await TodoModel.findOne({ description: trimDescription });

    if (trimDescription === "") {
      return res.status(400).json({ message: "Field is required" });
    } else if (existdDescription) {
      return res.status(400).json({ message: "Task already exists" });
    }

    const newTodo = await TodoModel.create({ description: trimDescription, status });
    await newTodo.save();

    
    const cacheKey = 'all_todos';
    const cachedTodos = await client.get(cacheKey);
    let todos = cachedTodos ? JSON.parse(cachedTodos) : [];

   
    todos.push(newTodo);

    
    await client.set(cacheKey, JSON.stringify(todos), { EX: 3600 });

    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getAllTodos = async (req, res) => {
  try {

    const cacheKey = 'all_todos';
    const cachedTodos = await client.get(cacheKey);

    if (cachedTodos) {
      return res.status(200).json(JSON.parse(cachedTodos));
    }

    const todos = await TodoModel.find().sort({'createdAt': -1});

    if (todos.length === 0) {
      return res.status(404).json({ message: "No Todo Found" });
    }

    await client.set(cacheKey, JSON.stringify(todos), {
      EX: 3600, 
    });

    res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};


export const updateTodo = async (req, res) => {
  try {
    const { description } = req.body;


    const updatedTodo = await TodoModel.findOneAndUpdate(
      { _id: req.params.id },
      { description },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    const cacheKey = 'all_todos';
    const cachedTodos = await client.get(cacheKey);
    let todos = cachedTodos ? JSON.parse(cachedTodos) : [];

    
    const todoIndex = todos.findIndex(todo => todo._id === req.params.id);
    if (todoIndex !== -1) {
      todos[todoIndex] = updatedTodo; 
    }

    await client.set(cacheKey, JSON.stringify(todos), { EX: 3600 });

    return res.status(200).json(updatedTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
export const deleteTodo = async (req, res) => {
  try { 
    const todo = await TodoModel.findByIdAndDelete(req.params.id);
    
    if(!todo){
      return res.status(404).json({"message":"Todo is not found"})
    }
    const cacheKey = "all_todos"
    const cachedTodos = await client.get(cacheKey)
    let todos = cachedTodos ? JSON.parse(cachedTodos):[]

    todos =todos.filter(todo => todo._id !== req.params.id)

    await client.set(cacheKey, JSON.stringify(todos), { EX: 3600 });
    
    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const toggleTodoDone = async (req, res) => {
  try {
    const todos = await TodoModel.findById(req.params.id);

    const todo = await TodoModel.findOneAndUpdate(
      { _id: req.params.id },
      { status: !todos.status }
    );  
    await todo.save();

    res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
