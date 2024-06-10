import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        Welcome all!
        <h1>
            <Link to={'/tracker'}>Tracker</Link>
        </h1>
    </div>
  )
}
