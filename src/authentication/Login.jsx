/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const Login = () => {

    let navigate =useNavigate()

    let [loginData,setLoginData] = useState({
        email:"",
        password:"",
        token:uuidv4(),
        id:""
    })

    let {email,password,token,id} =loginData

    let handleChange = (e) => {
        let {name,value} =e.target
        setLoginData({...loginData,[name]:value})
    }



    // let handleSubmit = async(e) => {
    //     e.preventDefault();
    //     let {data} = await axios.get("http://localhost:8000/registeruser")
    //     console.log(data);
    //     let filteredData = data.filter((emp) => {
    //         return (
    //             emp.email === loginData.email && emp.password === loginData.password
    //         )
    //     })

    //     if(filteredData.length>0){
    //         navigate("/datausers")
    //         localStorage.setItem("TOKEN",token)
    //         console.log(filteredData);
    //         localStorage.setItem("User_ID",filteredData.id)

    //         console.log(filteredData.id);
    //         // localStorage.setItem('USER_EMAIL', loginData.email); // Store user's email
    //         // localStorage.setItem('USER_PROF_PIC', Register.prof_pic); // Set path to profile picture
    //   navigate('/datausers');
    //         setLoginData({})
    //         toast.success("Logged in Sucessfully")
    //     }
    //     else {
    //         navigate("/register")
    //         toast.error("Wrong Password or Email")
    //     }
        
    // }



    let handleSubmit = async (e) => {
        e.preventDefault();
        let { data } = await axios.get("http://localhost:8000/registeruser");
        console.log("User Data:", data);
        let userData = data.find((emp) => {
            return emp.email === loginData.email && emp.password === loginData.password;
        });
    
        if (userData) {
            localStorage.setItem("TOKEN",token)
            console.log("Found User Data:", userData);
            localStorage.setItem("USER_ID", userData.id);
            console.log("User ID Stored:", userData.id);
            navigate("/datausers");
            setLoginData({});
            toast.success("Logged in Successfully");
        } else {
            navigate("/register");
            toast.error("Wrong Password or Email");
        }
    };

    
    return (
        <section className='content'>
            <main className='innerContent'>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={handleChange}/>
                </div>
    
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={handleChange}/>
                </div>
    
                <div className='form-group'>
                    <button>Login</button>
                </div>
    
            </form>
            </main>
        </section>
      )
    }

export default Login