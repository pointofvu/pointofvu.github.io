// src/components/Footer.jsx
import React from 'react'

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} PointofVU Blog. All rights reserved.</p>
    </div>
  </footer>
)

export default Footer
