import React from 'react'
import { Link } from 'react-router-dom'
import logo from './TravelLogo.jpg';
import './NavBar.css';
const NavBar = () => {
  return (
    <div>
       <div className='navbar'>
           <div className='menubar'>
                <Link to='/'> 
                   <img src={logo} alt='AppLogo' height="75px" width="85px" id='imglogo'></img>
                </Link>
                <Link to='/' className='home'><p>Home</p></Link>
                <Link to='/login' className='home'><p>Login</p></Link>
                <Link to='/signup' className='home'><p>Signup</p></Link>
           </div>
       </div>
    </div>
  )
}

export default NavBar
