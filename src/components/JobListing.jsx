import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const JobListing = ({ job }) => {
  const navigate = useNavigate()
  const [showMoreContent, setShowMoreContent] = useState(false)
  
  let description = job.description

  if(!showMoreContent) {
    description = description.substring(0, 90) + '...'
  }
  return (
    <div className='bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300'>
      <h4 className='text-sm text-indigo-500 font-bold'>{job.type}</h4>
      <h2 className='text-l font-bold h-8 truncate'>{job.title}</h2>
      <div className='text-gray-500 mb-4'>
        <p className='overflow-hidden'>{description}</p>
        <button className='text-indigo-500' onClick={() => 
          setShowMoreContent((prev) => !prev)}>
          {showMoreContent ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <div className=' mb-4 flex items-center'>
        <FontAwesomeIcon icon={faBriefcase} className='mr-2'/>
        <div className='text-red-500'>{job.salary}</div>
      </div>
      <div className=' mb-4 flex items-center'>
        <FontAwesomeIcon icon={faLocationDot} className='mr-2'/>
        <p className='text-blue-500'>{job.location}</p>
      </div>
      <button className='mt-4 bg-indigo-500 text-white px-4 py-2 
      rounded-md hover:bg-indigo-600 transition-colors 
      duration-300' onClick={() => navigate(`/jobs/${job.id}`)}>
        Read More
      </button>
    </div>
  )
}

export default JobListing
