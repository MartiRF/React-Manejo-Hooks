import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.css'
export const Navbar = () => {
  return (
<>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link to="./home" className="navbar-brand" >useContext</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <NavLink 
          className={(args) => {
            return `nav-link ${args.isActive ? 'active' : ''}`
          } }
          to={'/home'}>
          Home
        </NavLink>
        <NavLink 
          className={(args) => {
            return `nav-link ${args.isActive ? 'active' : ''}`
          } }
          to={'/about'}>
          About
        </NavLink>
        <NavLink 
          className={(args) => {
            return `nav-link ${args.isActive ? 'active' : ''}`
          } }
          to={'/login'}>
          Login
        </NavLink>
      </ul>
  
    </div>
  </div>
</nav>
</>
  )
}
