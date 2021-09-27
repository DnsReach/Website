import React from 'react'
import Image from "./image/illustration-intro.png"
import Project from './Project'
import Description from './description/description'

import './App.css'

const App = () => {
  return (
    <>
      <Project />
      <img className="image" src={Image} />
      <Description />
    </>
  )
}

export default App