import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import ViewUsers from './pages/ViewUsers'
import Navbar from './pages/Navbar'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>
        }>
        
        </Route>
        <Route path='/viewusers' element={<ViewUsers></ViewUsers>}> </Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
