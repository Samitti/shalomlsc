import React from 'react'
import Footer from '../components/Footer'
import HeroimgAll from '../components/HeroimgAll'
import Navbar from '../components/Navbar'
import NmewsboZedliQtieDetails from '../components/NmewsboZedliQtieDetails'

function NmewsboZedliQtie() {
  return (
    <div>
      <Navbar />
      <HeroimgAll heading="ንመውስቦ ዘድሊ ቅጥዒ" />
      <NmewsboZedliQtieDetails />
      <Footer />
    </div>
  )
}

export default NmewsboZedliQtie