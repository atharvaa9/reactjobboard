import React from 'react'
import { Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import JobPage from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import MainLayout from './layouts/MainLayout'
import NotFound from './pages/NotFound'
import JobDetails, { JobLoader } from './pages/JobDetails'
import Spinner from './components/Spinner'  
import EditJobPage from './pages/EditJobPage'
const App = () => {
  const addJob = async (newJob) => {
    await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const deleteJob = async (id) => {
    await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/jobs' element={<JobPage />} />
        <Route
          path='/edit-job/:id'
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={JobLoader}
        />
        <Route 
          path='/jobs/:id' 
          element={<JobDetails deleteJob={deleteJob} />} 
          loader={JobLoader} 
        />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )
  return (
    <RouterProvider 
      router={router} 
      fallbackElement={<Spinner />}
    />
  )
}

export default App
