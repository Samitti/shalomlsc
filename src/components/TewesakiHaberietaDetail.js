import React from 'react'
import "./TewesakiHaberietaDetail.css"
import {BsMailbox, BsFillTelephoneFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";

const TewesakiHaberietaDetail = () => {
  return (
    <div className='white-bg'>
      <div className='habereta-container'>
      <h1>ተወሳኺ ሓበሬታ</h1>
      <ul>
        <li>
          <BsMailbox className='icon-star' size={30} style={{color: "#fcc602"}} />
          <p>P.O Box 34347</p>
        </li>
        <li>
          <BsFillTelephoneFill className='icon-star' size={30} style={{color: "#fcc602"}} />    
          <p>+256703449895 / +256703821605</p>
        </li>
        <li>
          <MdEmail className='icon-star' size={30} style={{color: "#fcc602"}} />
          <p>shalomlifestreamug@gmail.com</p>
        </li>
      </ul>
      <div className='map-location'>
        <iframe style={{ width: "100%", height: "300px"}} src="https://maps.google.com/maps?q=shalom%20lifestream%20church&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no" ></iframe>
      </div>
    </div>
    </div>
    
  )
}

export default TewesakiHaberietaDetail