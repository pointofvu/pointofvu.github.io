// src/pages/HomePage.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <section className="relative h-screen flex items-center justify-center">
        <video
          src="/assets/media/Point-of-vu.mp4"
          className="absolute inset-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
        ></video>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Welcome to PointofVU Blog
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-6"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Real stories, expert insights, and innovative ideas.
          </motion.p>
          <Link
            to="/blog"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full"
          >
            Explore Our Blog
          </Link>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section>
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
        <p>
          Discover inspiring articles and in‑depth guides that help you navigate
          through modern challenges.
        </p>
      </section>
    </div>
  )
}

export default HomePage
