import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroimgAll from '../components/HeroimgAll'
import QalGuasaMahberDetails from '../components/QalGuasaMahberDetails'

function QalGuasaMahber() {
  return (
    <div>
      <Navbar />
      <HeroimgAll heading="ቃል ጓሳ ማሕበር" />
      <QalGuasaMahberDetails />
      <Footer />
    </div>
  )
}

export default QalGuasaMahber