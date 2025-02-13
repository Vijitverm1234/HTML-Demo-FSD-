import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
function Register({regData}){
    const [name,setName]=useState();
    const [password,setPassword]=useState();
    const [email,setEmail]=useState();
    const getData=(e)=>{
        e.preventDefault();
        const data={
            name,email,password
        }
        regData(data);
        alert("Data Registered")
    }
    return (
        <div>
        <center><h1>Register Page</h1></center>
     <center>
     <form>
     <div classNameName="mb-3">
    <label for="name" className="form-label"> Enter Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" onChange={(e)=>setName(e.target.value)} />
  </div>
  <div classNameName="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)}/>
  </div>

  <button type="submit" className="btn btn-primary" onClick={getData}>Register</button>
</form>
        </center> 
    </div>
    )
  }
export default Register;
