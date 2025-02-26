import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import { Routes,Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Assignment from './Assignment'
import StopWatch from './assets/StopWatch'

function App() {
  return (
    <>
      <nav>
        <Link to="/counter" className='nav-link'>Counter</Link>
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="./assign" className='nav-link'>Assign</Link>
        <Link to="./stop" className='nav-link'>Stop Watch</Link>

      </nav>
      <Routes>
        <Route path="/counter" element={<Counter/>} />
        <Route path="*" element={<h1>No page available</h1>} />
        <Route path="/stop" element={<StopWatch></StopWatch>} />

      </Routes>
    </>
  );
}


export default App
