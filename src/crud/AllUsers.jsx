import React, { useEffect, useState } from 'react'
import Search from './Search'
import axios from '../axios'
import DisplayUser from './DisplayUser'

const AllUsers = () => {
      let [state, setState] = useState(null)
      let [searchTerm , setSearchTerm] = useState("")

      let fetchUsers = async()=>{
        let {data} = await axios.get("/users")
        setState(data)
      }

      let handleSearch = (term)=>{
            setSearchTerm(term)
      }
      // console.log(searchTerm);

      let filteredUsers = state?.filter(value=>{
        if(searchTerm==""){
          return value;
        } else if (value.name.toLowerCase().includes(searchTerm.toLowerCase())){
          return value;
        }
      }).map(users=> <DisplayUser  key={users.id} {...users}/>)


      useEffect(()=>{
         fetchUsers()
      },[])

 return (
    <section className='content'>
      <main className='innerContent'>
        <div2 className='allUsers'>
          <div>
            <h1>All Users</h1>
            <Search handleSearch={handleSearch}/>
          </div>
          <div className="alllist">
              {state===null ? "Loading....." : filteredUsers}
          </div>
        </div2>
      </main>
    </section>
  )
}

export default AllUsers
