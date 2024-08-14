import Login from "./components/auth/Login"
import { Route, Routes } from 'react-router-dom';
import Signup from "./components/auth/Signup";

export const pages =[
    {path:'/signup', component:<Signup/> },
    {path:'/login', component:<Login/> }

]

const Routess = () => {
    return (
      <Routes>
        <Route index />
         {pages.map(({component, path})=>(
          <Route key={path}
              element={component}
              path={path}
          />
         ))}
         <Route
          
        />
      </Routes>
    
    )
  }
  

export default Routess