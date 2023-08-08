import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ChatForm from './pages/ChatForm'

function App() {


  return (

    <Routes>
      <Route path="/" element={<ChatForm/>}/>
    </Routes>
  )
}

export default App
