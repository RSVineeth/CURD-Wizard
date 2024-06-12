import React from 'react'
// import NavBar from './crud/NavBar'
import './global.css'
import { RouterProvider } from 'react-router-dom'
import {router} from './routing/Route'
const App = () => {
  return (
    <>
        {/* <NavBar/> */}
        <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App