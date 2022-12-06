import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroimgAll from '../components/HeroimgAll'
import SereteEmnetDetails from '../components/SereteEmnetDetails.js'


function SereteEmnet() {
  return (
    <div>
      <Navbar />
      <HeroimgAll heading="ሰረተ እምነት" />
      <SereteEmnetDetails />
      <Footer />
    </div>
  )
}

export default SereteEmnet