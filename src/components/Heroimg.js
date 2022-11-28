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
            <p>ሻሎም ወሓዚ ህይወት ቤተክርስትያን</p>
            <p>ካምፓላ, ኡጋንዳ</p>
            <div>
                <Link to="/SemunawiMedebat" className="btn-circular">
                    ሰሙናዊ መደባት
                </Link>
                <Link to="/SemunawiMedebat" className="btn-circular">
                    ታሪኽ ቤተክርስትያን 
                </Link>
                <Link to="/SemunawiMedebat" className="btn-circular">
                    ሰረተ እምነት
                </Link>
                <Link to="/SemunawiMedebat" className="btn-circular">
                    ቃል ጓሳ ማሕበር
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg