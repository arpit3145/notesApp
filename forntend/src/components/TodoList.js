import React,{useState} from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo, toggleTodo} from "../redux/actions";

const TodoList = ({ todo }) => {
const [editing, setEditing] = useState(false) ;
const [text, setText] = useState(todo.description) ;

const dispatch = useDispatch()

const onFromSubmit =(e)=>{
e.preventDefault()
setEditing(!editing)
dispatch(updateTodo(todo._id,text))
}

  return (
    <>
      <li className={` hover:shadow-xl bg-yellow-600 p-3 rounded-md text-center sm:w-full items-center justify-between px-5 py-5 flex flex-col`}>
      {editing == false?
        <span className={`text-gray-200 cursor-pointer break-all h-[100px] ${todo.status && " line-through decoration-2 decoration-red-600" }` }  onClick={()=>{dispatch(toggleTodo(todo._id))}}>{todo.description}</span>
       :
       <form onSubmit={onFromSubmit} className="w-full" >
          <input
            type="text"
            value= {text}
            autoFocus
            required
           className="w-full bg-transparent border-b border-gray-400 text-[white] outline-none  "
           onChange={(e) => setText(e.target.value)}
          />
        </form> 
        
      }
        
        
          
       
        
        <div className="flex items-center justify-center mt-auto">
        {/* <span> {todo.createdAt}</span> */}
        {/* <span className={`${todo.status == false ? "text-red-500":"text-green-500 place-items-end"}`}>{todo.status == false? "Pending": "Complete"}</span> */}
        {!editing && 
          <span className="text-[20px] ml-3 cursor-pointer" title="Edit" onClick={()=>setEditing(!editing)}><FiEdit  /></span>
        }
        <span className="text-[20px] cursor-pointer" title="Delete" onClick={()=>dispatch(deleteTodo(todo._id))} ><MdDelete /></span>
        
        </div>
      </li>
    </>
  );
};

export default TodoList;
