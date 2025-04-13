// src/admin/Posts.jsx
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://localhost:5000/api/articles')
      const data = await response.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])
   

  const handleDelete = async (slug) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
        console.log("dellete slug ",slug);
        
      try {
        await axios.delete(`http://localhost:5000/api/articles/${slug}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        setPosts(posts.filter(post => post.slug !== slug))
      } catch (err) {
        alert('Failed to delete post')
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Manage Posts</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post._id}>
              <td className="py-2 px-4 border">{post.title}</td>
              <td className="py-2 px-4 border">
                {new Date(post.date).toLocaleDateString()}
              </td>
              <td className="py-2 px-4 border">
                <Link
                  to={`/admin/posts/edit/${post.slug}`}
                  className="text-indigo-600 hover:text-indigo-800 mr-4"
                >
                  Edit
                </Link>
                {/* Optionally add a delete button here */}

                <div className="mt-2 space-x-2">
                    <button onClick={() => handleDelete(post.slug)} className="text-red-600 cursor-pointer">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Posts
