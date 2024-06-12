import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {

  let navigate =useNavigate()

  let token=localStorage.getItem("TOKEN")
  console.log(token);
  
  let handleLogout = () => {
    localStorage.clear()
    navigate?.("/login")
  }

  return (
    <nav className='navbar'>
        <p>
            <span className='crud'>Crud</span>
            <span className='operation'>Operation</span>
        </p>

        {
          token ? ( 
          <>
            <button onClick={handleLogout}>LogOut</button>
            <div className='mypro'>
              <Link to='/MyProfile'>My Profile</Link>
            </div>
          </>  ) :  
                    <div className='regilogin'>
                      <Link to='/register'>Register</Link>
                      <Link to='/login'>Login</Link>  
                    </div>
        }
        
    </nav>
  )
}

export default NavBar