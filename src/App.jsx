// src/App.jsx
import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Loader from './components/Loader'
import ErrorBoundary from './components/ErrorBoundary'

// Lazy load pages for improved performance and code splitting
const HomePage = lazy(() => import('./pages/HomePage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

// Admin pages
const AdminLogin = lazy(() => import('./admin/Login'))
const AdminDashboard = lazy(() => import('./admin/Dashboard'))
const AdminPosts = lazy(() => import('./admin/Posts'))
const AdminCreatePost = lazy(() => import('./admin/CreatePost'))
const AdminEditPost = lazy(() => import('./admin/EditPost'))

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<BlogPostPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />

                  {/* Admin Routes */}
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route
                    path="/admin/dashboard"
                    element={
                      <ProtectedRoute>
                        <AdminDashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin/posts"
                    element={
                      <ProtectedRoute>
                        <AdminPosts />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin/posts/create"
                    element={
                      <ProtectedRoute>
                        <AdminCreatePost />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin/posts/edit/:slug"
                    element={
                      <ProtectedRoute>
                        <AdminEditPost />
                      </ProtectedRoute>
                    }
                  />

                  {/* Fallback route */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
