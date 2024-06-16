import { BrowserRouter, Routes, Route } from 'react-router-dom'; // npm install react-router-dom@latest

import Home from './pages/Home';
import Tracker from './pages/Tracker';
import Task from './pages/Task';
import TrackerDashboard from './pages/TrackerDashboard';

import './index.css'

function App() {
  return (
    <div className='poppins-regular'>
    <div className='container text-center drop-shadow-lg text-gray-800'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tracker' element={<Tracker />} />
        <Route path='/task' element={<Task />} />
        <Route path='/trackerDashboard' element={<TrackerDashboard />} />
       </Routes>
     </BrowserRouter>
    </div>
    </div>
  )
}

export default App
