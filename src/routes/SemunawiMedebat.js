import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroimgAll from '../components/HeroimgAll'
import SemunawiDetail from '../components/SemunawiDetail'

function Semunawi() {
  return (
    <div>
      <Navbar />
      <HeroimgAll heading="ሰሙናዊ መደባት" />
      <SemunawiDetail />
      <Footer />
    </div>
  )
}

export default Semunawi