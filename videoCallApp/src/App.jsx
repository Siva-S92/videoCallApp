import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import VideoPage from './pages/VideoPage'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/room/:id' element={<VideoPage/>} />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App