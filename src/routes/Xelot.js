import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroimgAll from '../components/HeroimgAll'
import XelotDetails from '../components/XelotDetails'

const Xelot = () => {
  return (
    <div>
      <Navbar />
      <HeroimgAll heading="ጸሎት" />
      <XelotDetails />
      <Footer />
    </div>
  )
}

export default Xelot