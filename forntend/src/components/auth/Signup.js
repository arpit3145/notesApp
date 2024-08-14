import React,{useState} from 'react'

const Signup = () => {
const [signupInfo, setSignupInfo] = useState({
  name:'',
  email:'',
  password:''
})
  const handleChange = (e)=>{
  const { name, value} = e.target
  console.log(name)

  }
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <div>
          <label htmlFor='name'>Name</label>
          <input
           onChange={handleChange}
           name='name'
           placeholder='Enter name'
           type='text'
           />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
           onChange={handleChange}
           name='email'
           placeholder='Enter name'
           type='text'
           />
        </div>
        <div>
          <label htmlFor='password'>password</label>
          <input
           onChange={handleChange}
           name='password'
           placeholder='Enter password'
           type='text'
           />
        </div>
      </form>
    </div>
  )
}

export default Signup
