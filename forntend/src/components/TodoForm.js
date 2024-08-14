import React from "react";
import { useState } from "react";
import { addNewTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onFromSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTodo(text));
    setText("");
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={onFromSubmit} className="md:flex">
      <input
        placeholder="Enter Note"
        className="text-center m-auto md:w-[50%] w-full border-[3px] rounded-md text-[20px] my-5 p-3 outline-none border-[#eded72]"
        onChange={(e) => onInputChange(e)}
        value={text}
        required
      />
      <button
        className="md:mx-5 border p-3 my-5 bg-red-600 rounded-md border-[black] md:w-[30%] w-full "
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
