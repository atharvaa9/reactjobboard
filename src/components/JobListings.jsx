import {useEffect, useState} from 'react'
import JobListing from './JobListing'
import Spinner from './Spinner'
const JobListings = ({ isHome }) => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const fetchJobs = async () => {
      const url = !isHome ? '/api/jobs' : `/api/jobs?_limit=3`
      try {
        const response = await fetch(url)
        const data = await response.json()
        setJobs(data)
      } catch (error) {
        console.error('Error fetching jobs:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchJobs()
  }, [isHome])
  if (loading) {
    return <Spinner loading={loading} />
  }
  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? `Recent Jobs` : 'All Jobs'}
        </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))} 
          </div>
      </div>
    </section>
  );
}

export default JobListings
