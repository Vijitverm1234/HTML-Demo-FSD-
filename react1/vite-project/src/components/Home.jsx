import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link, Outlet } from 'react-router-dom'
function Home() {
  return (
    <div>
      <Header></Header>
    <nav>
        <ul>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Register Here</Link>
            </li>
        </ul>
    </nav>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>

  )
}

export default Home
