import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        Welcome all!
        <h1>
            <Link to={'/tracker'}>Tracker</Link>
        </h1>
        <h2>
          <Link to={'/task'}>Task Manager</Link>
        </h2>
        <h2>
          <Link to={'/trackerDashboard'}>Tracker Dashboard</Link>
        </h2>
    </div>
  )
}
