import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroimgAll from '../components/HeroimgAll'
import TewesakiHaberietaDetail from '../components/TewesakiHaberietaDetail'

function TewesakiHaberieta() {
  return (
    <div>
      <Navbar />
      <HeroimgAll heading="ተወሳኺ ሓበሬታ" />
      <TewesakiHaberietaDetail />
      <Footer />
    </div>
  )
}

export default TewesakiHaberieta