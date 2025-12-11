import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/revathon-1">Revathon 1.0</Link>
        </li>
        <li>
          <Link to="/highlights">Highlights</Link>
        </li>
      </ul>
    </nav>
  )
}
