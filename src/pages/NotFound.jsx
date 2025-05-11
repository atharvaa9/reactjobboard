import React from 'react'
import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className='flex flex-col mt-20 items-center h-screen'>
      <FaExclamationTriangle className='text-4xl text-red-500' />
      <h1 className='text-4xl font-bold'>404 Not Found</h1>
      <p className='text-lg'>The page you are looking for does not exist.</p>
      <Link to='/' className='text-blue-500 hover:text-blue-600'>Go back to the home page</Link>
    </div>
  )
}

export default NotFound