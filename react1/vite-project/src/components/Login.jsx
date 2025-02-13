import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
const Login = ({regData}) => {

    const [password,setPassword]=useState();
    const [email,setEmail]=useState();
    const navigate=useNavigate();

    console.log(email,password);
    console.log(regData);
    
    
    function validate(e){
   e.preventDefault();
    if(regData.email==email && regData.password==password){
        alert("Login Successfull")
        navigate('./dashboard')
    }
    else{
        alert("login failed")
    }
    }
  return (
    
    <div>
        <center><h1>Login Page</h1></center>
     <center>
     <form>
  <div classNameName="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={validate} className="btn btn-primary">Submit</button>
</form>
        </center> 
    </div>
  )
}

export default Login
