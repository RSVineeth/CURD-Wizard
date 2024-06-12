import React from 'react'
// import NavBar from './crud/NavBar'
import './global.css'
// import './index.css'
import { RouterProvider } from 'react-router-dom'
import {router} from './routing/Route'
const App = () => {
  return (
    <>
        <div className="app-con">
          {/* <NavBar/> */}
          <RouterProvider router={router}></RouterProvider>
        </div>

    </>
  )
}

export default App