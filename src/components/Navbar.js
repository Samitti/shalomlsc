import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa";

import LogoImg from "../assets/logo.png";
import "./Navbar.css";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 10){
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
      <img className="logo-img"
            src={LogoImg} alt="LogoImg" />
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>   
         
        <li>
          <Link to="/ታሪኽ-ቤተክርስትያን">ታሪኽ ቤተክርስትያን</Link>
        </li>   
        <li>
          <Link to="/ሰረተ-እምነት">ሰረተ እምነት</Link>
        </li>  
        <li>
          <Link to="/ቃል-ጓሳ-ማሕበር">ቃል ጓሳ ማሕበር</Link>
        </li>   
        <li>
          <Link to="/ንመውስቦ-ዘድሊ-ቅጥዒ">ንመውስቦ ዘድሊ ቅጥዒ</Link>
        </li>  
        <li>
          <Link to="/ተወሳኺ-ሓበሬታ">ተወሳኺ ሓበሬታ</Link>
        </li>   
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (
        <FaTimes size={20} style={{color: "#fff"}} /> 
        ) : (
        <FaBars size={20} style={{color: "#fff"}} />
        )}
      </div>

    </div>
  )
}

export default Navbar