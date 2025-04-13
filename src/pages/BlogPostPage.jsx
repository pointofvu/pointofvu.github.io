// src/pages/BlogPostPage.jsx
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BlogPostPage = () => {
  const { slug } = useParams()
  const [article, setArticle] = useState(null)

  useEffect(() => {
    const fetchArticle = async () => {
      // Use slug or id depending on your API
      const response = await fetch(`http://localhost:5000/api/articles/${slug}`)
      const data = await response.json()
      setArticle(data)
    }
    fetchArticle()
  }, [slug])

  if (!article) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-600 mb-4">{new Date(article.date).toLocaleDateString()}</p>




      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-auto mb-6 rounded"
      />
      <div className="prose max-w-none">{article.content}</div>
    </div>
  )
}

export default BlogPostPage
