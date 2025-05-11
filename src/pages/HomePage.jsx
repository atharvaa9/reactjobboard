import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <div>
      <Hero title='React Jobs' description='Find your dream job in the tech industry with our React Job Board' />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </div>
  )
}

export default HomePage
