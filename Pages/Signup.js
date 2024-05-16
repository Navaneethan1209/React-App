import React from 'react'
import NavBar from '../HeadFoot/NavBar'
import './Signup.css';

const Signup = () => {
  return (
    <div>
        <NavBar/>
            
          <center><div className='signup'>
                      <form>
                          <input type='text' placeholder='Enter Your Username'/><br></br>
                          <input type='email' placeholder='Enter Your Email'/><br></br>
                          <input type='password' placeholder='Enter Your Password'/><br></br>
                          <input type='password' placeholder='Re-Enter Password'/><br></br>
                          <input type='tel' placeholder='Mobile No'/><br></br>
                          <input type='submit' value='Signup' id='signupbtn'/><br></br>

                      </form>
                  </div>
          </center>
    </div>
  )
}

export default Signup
