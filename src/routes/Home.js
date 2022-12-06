import React from 'react'
import Footer from '../components/Footer'
import HeroImg from '../components/Heroimg'
import HeroImgLower from '../components/HeroimgLower'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroImg />
        <div>
        <iframe style={{ width: "100%", height: "300px"}} src="https://maps.google.com/maps?q=shalom%20lifestream%20church&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no" ></iframe>
        </div>
        <HeroImgLower />
        <Footer />
    </div>
  )
}

export default Home