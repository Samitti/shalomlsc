import "./HeroimgStyles.css";

import React from 'react'

import HomeHeroImg from "../assets/home_hero.jpg"
import { Link } from "react-router-dom";
 
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img"
            src={HomeHeroImg} alt="HomeHeroImg" />
        </div>
        <div className="content">
            <h1>ሻሎም ወሓዚ ህይወት ቤተክርስትያን</h1>
            <p>ካምፓላ, ኡጋንዳ</p>
            <div className="circular-menu">
                <div className="circular" >
                <Link to="/ሰሙናዊ-መደባት" className="btn-circular">
                    ሰሙናዊ መደባት
                </Link>
                </div>
                
                <div className="circular" >
                <Link to="/ታሪኽ-ቤተክርስትያን" className="btn-circular">
                    ታሪኽ ቤተክርስትያን 
                </Link>
                </div>
                

                <div className="circular" >
                <Link to="/ሰረተ-እምነት" className="btn-circular">
                    ሰረተ እምነት
                </Link>
                </div>
                

                <div className="circular" >
                <Link to="/ቃል-ጓሳ-ማሕበር" className="btn-circular">
                    ቃል ጓሳ ማሕበር
                </Link>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default HeroImg