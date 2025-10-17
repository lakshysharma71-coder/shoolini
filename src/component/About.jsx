import React from 'react'
import Vision from './Vision'

function About() {
  return (
   <>
   
    <Route path="/about-us" element={<About />} />
  <Route path="/about-us/vision" element={<h1> <Vision/></h1>} />
  <Route path="/about-us/mission" element={<h1><MissingPage/></h1>} />
  <Route path="/about-us/leadership" element={<h1>Leadership Page</h1>} />
  <Route path="/about-us/faculty" element={<h1>Faculty Page</h1>} />
  <Route path="/about-us/infrastructure" element={<h1>Infrastructure Page</h1>} />

  <Route path="/academies" element={<h1>Academies Main</h1>} />
  <Route path="/academies/science" element={<h1>Science Academy</h1>} />
   </>
  )
}

export default About