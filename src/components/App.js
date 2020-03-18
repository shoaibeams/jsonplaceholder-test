import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Posts from './Posts'

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Posts />
      </div>
    </BrowserRouter>
  )
}

export default App
