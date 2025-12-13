import React from 'react'

export default function Footer() {
  return (
    <div
      className="bg-gray-800 text-white py-20"
    >
      <div className="container flex justify-center mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} IEEE Revathon 2.0</p>
      </div>
    </div>
  )
}
