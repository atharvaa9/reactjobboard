import React from 'react'
import { useNavigate } from 'react-router-dom'
const ViewAllJobs = () => {
    const navigate = useNavigate()
  return (
    <div className='flex justify-center mt-8 mb-8'>
      <button className='bg-black text-xl text-white px-4 py-2 
      rounded-xl hover:bg-gray-800 
      transition-colors duration-300' 
      onClick={() => navigate('/jobs')}>
        View All Jobs
      </button>
    </div>
  )
}

export default ViewAllJobs
