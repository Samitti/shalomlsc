import "./HeroimgLowerStyles.css";

import React from 'react'

import HomeHeroImg from "../assets/home_hero.jpg"
import { Link } from "react-router-dom";
 
const HeroImgLower = () => {
  return (
    <div className="hero-lower">        
        <div className="content">
            <h1>ኣገዳሲ ሓበሬታ</h1>
            <div className="circular-menu">
                <div className="circular" >
                <Link to="/SemunawiMedebat" className="btn-circular">
                    ንመውስቦ ዘድሊ ቅጥዒ
                </Link>
                </div>
                
                <div className="circular" >
                <Link to="/SemunawiMedebat" className="btn-circular">
                    ጸሎት
                </Link>
                </div>                

                <div className="circular" >
                <Link to="/SemunawiMedebat" className="btn-circular">
                    ተወሳኺ ሓበሬታ
                </Link>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default HeroImgLower