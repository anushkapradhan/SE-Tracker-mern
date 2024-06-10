import { BrowserRouter, Routes, Route } from 'react-router-dom'; // npm install react-router-dom@latest

import Home from './components/Home';
import Tracker from './components/Tracker';
import './index.css'


function App() {
  return (
    <div className='mx-4 poppins-regular'>
    <div className='container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tracker' element={<Tracker />} />
       </Routes>
     </BrowserRouter>
    </div>
    </div>
  )
}

export default App
