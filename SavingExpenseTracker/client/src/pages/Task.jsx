import React from 'react'
import { Link } from 'react-router-dom'

export default function Task() {
    return (
        <div className='bg-gray-900 text-white h-screen p-2'>
            <Link to={'/'}>Go Home</Link>
        </div>
    )
}