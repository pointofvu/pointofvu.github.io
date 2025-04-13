// src/pages/BlogPage.jsx
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BlogPage = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    // Replace with your API call to fetch articles
    const fetchArticles = async () => {
      const response = await fetch('http://localhost:5000/api/articles')
      const data = await response.json()
      setArticles(data)
    }

    fetchArticles()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <div key={article._id} className="bg-white shadow p-6 rounded">
            <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-4">
              {article.content.substring(0, 100)}...
            </p>
            <Link
              to={`/blog/${article.slug || article._id}`}
              className="text-indigo-600 hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogPage
