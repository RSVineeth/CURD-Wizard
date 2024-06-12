import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import NavBar from '../crud/NavBar';

// import toast from 'react-hot-toast' // ?


const Layout = () => {
  return (
    <>
        <NavBar/>
        <Toaster/>
        <main className='sidebar'>
            <div className='layout'>
                <ul>
                    <li>
                        <Link to='/'>Create User</Link>
                    </li>
                    <li>
                        <Link to='/datausers'>Users</Link>
                    </li>
                    <li>
                        <Link to='/allusers'>AllUsers</Link>
                    </li>
                </ul>
            </div>
            <hr />
            {/* <Outlet/> */}
        </main>
    </>
  )
}

export default Layout