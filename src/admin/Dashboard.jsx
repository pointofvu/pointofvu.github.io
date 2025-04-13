// src/admin/Dashboard.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="space-y-4">
        <Link to="/admin/posts" className="text-indigo-600 hover:text-indigo-800">
          View Posts
        </Link>
        <br />
        <Link to="/admin/posts/create" className="text-indigo-600 hover:text-indigo-800">
          Create New Post
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
