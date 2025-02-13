import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

import './app.css'
import Login from './components/Login'
import Register from './components/Register'
import DashBoard from './components/DashBoard'
function App() {
const [regData,setRegData]=useState();

  return (
    <>

<div>
   <Routes>
    <Route path='/' element={<Home></Home>}>
    <Route path='/login' element={<Login regData={regData}/>}></Route>
    <Route path='/register' element={<Register regData={setRegData}></Register>}></Route>
    </Route>
    <Route path='./login/dashboard' element={<DashBoard></DashBoard>}></Route>
    <Route path='/logout' element={<h1>logout page</h1>}></Route>
    <Route path='*' element={<h1>No page avilable</h1>}></Route>
   </Routes>
  </div>

    </>
  )
}

export default App
