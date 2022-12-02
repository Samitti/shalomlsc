import React, { useState } from 'react'
import "./SemunawiDetail.css"
import {FcCalendar} from "react-icons/fc";
import {AiFillCaretRight, AiFillCaretUp} from "react-icons/ai";


const SemunawiDetail = () => {
  const [click1, setClick1] = useState(false);
  const handleClick = () => setClick1(!click1);
  return (
    <div className='semunawi-container'>
        <div className='heading'>
            <FcCalendar size={60} style={{color: "#fff"}} /> 
            <h1>ሰሙናዊ መደባት</h1>
            <p>ዝርዝር ስሙናዊ መደባት ሻሎም ወሓዚ ህይወት ቢተክርትያን ካምፓላ ኡጋንዳ ዝግበረሉ ቦታን ግዜን</p>
        </div>
        <div className='semunawi-list'>
            <ul>                
                <li className='semunawi-list-swicher' onClick={handleClick}>
                    {click1 ? 
                    <div className='li-detail'>
                        <div className='li-detail-title'>
                            <AiFillCaretUp size={20} />                       
                            <p>ወትሩ ሰኑይ - ናይ ትምህርትን ጸሎትን ግዜ</p>   
                        </div> 
                        <div className='li-detail-title-list'>                                                  
                            <p className='description'>እዚ ናይ ሰኑይ ኣገልግሎት ንኹሉ ተሳታፋይ ብቀረባ ክግልገል መኣዲ ፍልጠት ክረክብን ናይ ሕብረት ደገ እዩ። ኣብዚ መደብ ቃል ኣምላኽ ስሩዕ ንመሃረሉ፡ ጸሎት ንጽልየሉ ግዜ እዩ</p>   
                            <br />
                            <p className='place-title'>ዝግበረሉ ቦታን ግዜን</p>                            
                            <p className='place-list'>
                                <ol>
                                    <li>ኣብ ንእሽተይ ኣዳራሽ ሻሎም ወሓዚ ህይወት ቤተክርስትያን ካብ ሰዓት 9፡30ቅ/ቀ ክሳዕ 1፡00ድ/ቀ</li>
                                    <li>ኣብ ናጃናኩምቢ ዝርከብ ቤት ጸሎት ሻሎም ወሓዚ ህይወት ቤተክርስትያን ካብ ሰዓት 10፡00ቅ/ቀ ክሳዕ 12፡30ድ/ቀ</li>
                                    <li>ኣብ ካንሳንጋ ዝርከብ ቤት ጸሎት ሻሎም ወሓዚ ህይወት ቤተክርስትያን  ካብ ሰዓት 6፡00ድ/ቀ ክሳዕ 8፡30ድ/ቀ</li>                               
                                </ol>
                            </p>
                        </div> 
                    </div> :                         
                    <div className='li-title'>
                        <AiFillCaretRight size={20} /> 
                        <p>ወትሩ ሰኑይ - ናይ ትምህርትን ጸሎትን ግዜ</p>  
                    </div>                                        
                    }   
                </li>
                <li>
                </li>
            </ul>
            
        </div>
    </div>
  )
}

export default SemunawiDetail