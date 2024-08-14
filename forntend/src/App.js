import './App.css';
// components
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Routess from './route';
function App() {
  return (
    <>
    <div className='w-[70%] m-[auto]'>
    <ToastContainer/>
        {/* <Routess /> */}
      <Header/>
      <TodoForm/>
      <Todo/>
      
    </div>
    </>
  );
}

export default App;
