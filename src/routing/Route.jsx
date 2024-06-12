import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import CreateUsers from '../crud/CreateUsers'
import EditUsers from '../crud/EditUsers'
import Users from '../crud/Users'
import NotFound from '../crud/NotFound'
import AllUsers from "../crud/AllUsers";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
import Private from "../authentication/Private";
import MyProfile from "../crud/MyProfile";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children: [
            {
                path: '/',
                element: <Private><CreateUsers/></Private>
            },
            {
                path: '/EditUsers/:id',
                element: <EditUsers/>
            },
            {
                path: '/datausers',
                element: <Private><Users/></Private>
            },
            {
                path: '/allusers',
                element: <Private><AllUsers/></Private>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:"/MyProfile",
                element:<MyProfile/>
            },
            {
                path: '*',
                element: <NotFound/>
            },
        ]
    }
])