import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroimgAll from '../components/HeroimgAll'
import TarikBetekrstyanDetails from '../components/TarikBetekrstyanDetails'

function TarikBetekrstyan() {
  return (
    <div>
      <Navbar />
      <HeroimgAll heading="ታሪኽ ቤተክርስትያን" />
      <TarikBetekrstyanDetails />
      <Footer />
    </div>
  )
}

export default TarikBetekrstyan