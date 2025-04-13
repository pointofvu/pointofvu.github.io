// src/components/Navbar.jsx
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link to="/">PointofVU</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-indigo-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-indigo-600">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-indigo-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-indigo-600">
              Contact
            </Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/admin/dashboard" className="hover:text-indigo-600">
                  Dashboard
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="hover:text-red-600">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/admin/login" className="hover:text-indigo-600">
                Admin
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
