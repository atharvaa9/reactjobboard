import React from 'react'
import { Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import JobPage from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import MainLayout from './layouts/MainLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/jobs' element={<JobPage />} />
      <Route path='/add-job' element={<AddJobPage />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
