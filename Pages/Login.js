import React from 'react'
import NavBar from '../HeadFoot/NavBar'
import './Login.css'
const Login = () => {
  return (
    <div>
        <NavBar/>
       <center><div className='login'>
          <form>
              <input type='text' placeholder='Enter Your Username'/><br></br>
              <input type='email' placeholder='Enter Your Email'/><br></br>
              <input type='submit' value='Login' id='loginbtn'/><br></br>

          </form>
       </div></center>
    </div>
  )
}

export default Login
