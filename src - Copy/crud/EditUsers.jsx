import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import toast from 'react-hot-toast'
import axios from "../axios";


const EditUsers = () => {

  let navigator = useNavigate()

  let {id} =useParams()

  let [state,setState] = useState({
    name:'',
    salary:'',
    company:''
  })

  let {name,salary,company} = state

  let handleChange = (e) => {
    let {name,value} = e.target;
    setState({...state,[name]:value})
  }

  useEffect(() => {
    axios.get(`/users/${id}`).then((response) => {
      console.log(response.data);
      setState({
        ...state,
        name: response.data.name,
        salary: response.data.salary,
        company: response.data.company,
      });
    });
  },[]);

  let handleSubmit = (e) => {
    e.preventDefault()

    let payload = {name,salary,company}
    axios.put(`/users/${id}`,payload)
    .then(()=>{
      console.log("Data is Updated");
    })
    // .catch((error)=> {
    //   console.log(error);
    // })
    navigator("/datausers")
    toast.success("successfully Updated user")
  }

  return (
    <section className='content'>
      <main className='innerContent'>
        <h1>Edit User</h1>
        <form action='' onSubmit={handleSubmit}>

          <div className='form-group'>
            <label htmlFor="">Name</label>
            <input type="text" name='name' placeholder='Enter name' value={name} onChange={handleChange}/>
          </div>

          <div className='form-group'>
            <label htmlFor="">Salary</label>
            <input type="text" name='salary' placeholder='Enter salary' value={salary} onChange={handleChange}/>
          </div>

          <div className='form-group'>
            <label htmlFor="">Company</label>
            <input type="text" name='company' placeholder='Enter company' value={company} onChange={handleChange}/>
          </div>

          <div className='form-group'>
            <button>Create User</button>
          </div>

        </form>
      </main>
    </section>
  )
}

export default EditUsers
