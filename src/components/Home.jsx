import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    <nav className="bg-gray-800  text-white p-4">
    <ul className="flex justify-end">
      <li className="mr-4">
        <Link to="/logout">Logout</Link>
      </li>
    </ul>
  </nav>
    </>
  )
}

export default Home