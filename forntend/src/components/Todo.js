import React, { useEffect } from "react";
import { getAllTodos } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";

const Todo = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) =>
     state.todos);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <ul className="grid md:grid-cols-3 grid-cols-1 gap-3">
      {!todos.length == 0 ? 
           <>
        {todos.map((todo)=>(
        <TodoList
          todo ={todo}
          key={todo._id}
        />
       
      ))}
      </>
      :
      <div className="text-center text-5xl"> No Note Found</div>
       }
      
      </ul>
    </div>
  );
};

export default Todo;
