import React from 'react';
import "./FooterStyles.css";
import {AiFillYoutube} from "react-icons/ai";
import {FaFacebookSquare} from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='social-links'>
                <a href='https://www.facebook.com/profile.php?id=100066395030856' target="_blank" className='social-links-li'>
                    <FaFacebookSquare size={30} style={{color: "#fff"}} />
                </a>
                <a href="https://www.youtube.com/channel/UCAob6-UU0yyO8BJ4PdcgDYw?view_as=subscriber" target="_blank" className='social-links-li'>
                    <AiFillYoutube size={30} style={{color: "#fff"}} />
                </a>         
            </div>

            <div className='copy-right'>
            © 2022 ሻሎም ወሓዚ ህይወት ቤተክርስትያን – ኡጋንዳ – Powered by SAMITB
            </div>
        </div>
    </div>
  )
}

export default Footer