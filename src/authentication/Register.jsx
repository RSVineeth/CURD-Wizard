import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {


    let navigate = useNavigate()

    let [registerData,setRegisterData] = useState({
        email:"",
        password:"",
        prof_pic:""
    })

    let{email,password,prof_pic} = registerData;

    let handleChange = (e) => {
        let {name,value} = e.target;
        setRegisterData({...registerData,[name]:value})
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        let payload = {email,password,prof_pic}
        await axios.post("http://localhost:8000/registeruser",payload)
        navigate("/login")
        toast.success("Sucessfully registered")
    }

    

    
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     // If the input is for file upload, set the prof_pic to the selected file
//     setRegisterData({ ...registerData, [name]: name === 'prof_pic' ? files[0] : value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('email', email);
//     formData.append('password', password);
//     formData.append('prof_pic', prof_pic); // Append the selected file to FormData
//     try {
//       await axios.post('http://localhost:8000/registeruser', formData);
//       navigate('/login');
//       toast.success('Successfully registered');
//     } catch (error) {
//       console.error(error);
//       toast.error('Registration failed');
//     }
//   };


  return (
        <section className='content'>
            <main className='innerContent'>        <h1>Register</h1>
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
                        <label htmlFor="img">Profile-Pic</label>
                        <input type="url" id="prof_pic" name="prof_pic" onChange={handleChange} />
                    </div>

                    <div className='form-group'>
                        <button>Register</button>
                    </div>

                </form>
            </main>
        </section>
  )
}

export default Register