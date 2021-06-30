import React from 'react';
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
  <>
    <nav className="navbar navbar-light navbar-expand-lg bg-light">
      <div className="container-fluid justify-content-start">
        <div className="navbar-brand">
          Note App
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/"
              exact
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/edit"
            >
              Edit
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/view"
            >
              View
            </NavLink>
          </li>
          
        </ul>
      </div>
    </nav>
  </>
)