// src/admin/EditPost.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
  // Use slug from URL, not id
  const { slug } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [currentSlug, setCurrentSlug] = useState('');
  const [newSlug, setNewSlug] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch article data by slug
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);

      console.log("Slug ",slug);
      
      try {
        // Use the slug to fetch the article
        const response = await fetch(`http://localhost:5000/api/articles/${slug}`);
        const data = await response.json();
        if (response.ok) {
          setTitle(data.title);
          setContent(data.content);
          setImageUrl(data.imageUrl || '');
          setCurrentSlug(data.slug); // store current slug
          setNewSlug(data.slug);     // prefill with current slug in case admin wants to change it
        } else {
          setMessage(data.message || 'Failed to fetch post data.');
        }
      } catch (error) {
        setMessage('Error fetching post data.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    setLoading(true);
    try {
      // Send PUT request to /api/articles/edit/:slug
      const response = await fetch(`http://localhost:5000/api/articles/edit/${currentSlug}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        // Send newSlug if admin wants to update the slug, along with other fields.
        body: JSON.stringify({ title, content, imageUrl, newSlug }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Post updated successfully!');
        // Redirect to posts management page after a short delay
        setTimeout(() => navigate('/admin/posts'), 1500);
      } else {
        setMessage(data.message || 'Failed to update post.');
      }
    } catch (err) {
      setMessage('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Edit Post</h1>
      {message && <p className="mb-4">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          className="w-full p-3 border rounded h-48"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Image URL"
          className="w-full p-3 border rounded"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Slug (optional, edit to change slug)"
          className="w-full p-3 border rounded"
          value={newSlug}
          onChange={(e) => setNewSlug(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded"
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
