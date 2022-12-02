import React, { useState } from 'react'
import "./SemunawiDetail.css"
import {FcCalendar} from "react-icons/fc";
import {AiFillCaretRight, AiFillCaretUp} from "react-icons/ai";
import {AiFillStar} from "react-icons/ai";
import { Link } from 'react-router-dom';


const SemunawiDetail = () => {
  const [click1, setClick1] = useState(false);
  const handleClick = () => setClick1(!click1);
  const [click2, setClick2] = useState(false);
  const handleClick2 = () => setClick2(!click2);
  const [click3, setClick3] = useState(false);
  const handleClick3 = () => setClick3(!click3);
  const [click4, setClick4] = useState(false);
  const handleClick4 = () => setClick4(!click4);
  const [click5, setClick5] = useState(false);
  const handleClick5 = () => setClick5(!click5);
  const [click6, setClick6] = useState(false);
  const handleClick6 = () => setClick6(!click6);
  return (
    <div className='semunawi-container'>
        <div className='heading'>
            <FcCalendar size={60} style={{color: "#fff"}} /> 
            <h1>ሰሙናዊ መደባት</h1>
            <p>ዝርዝር ስሙናዊ መደባት ሻሎም ወሓዚ ህይወት ቢተክርትያን ካምፓላ ኡጋንዳ ዝግበረሉ ቦታን ግዜን</p>
        </div>
        <div className='semunawi-list'>
            <ul>       
                <hr className='horiz-line'/>         
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
                <hr className='horiz-line'/>

                <li className='semunawi-list-swicher' onClick={handleClick2}>
                    {click2 ? 
                    <div className='li-detail'>
                        <div className='li-detail-title'>
                            <AiFillCaretUp size={20} />                       
                            <p>ወትሩ ሰሉስ - መንፈሳውን ማሕበራውን ናይ ምኽሪ ኣገልግሎት</p>   
                        </div> 
                        <div className='li-detail-title-list'>     
                            <p className='place-title'>ዝግበረሉ ቦታን ግዜን</p>                           
                            <p className='description'>እዚ ናይ መንፈሳውን ማሕበራውን ናይ ምኽሪ ኣገልግሎት ኣብ ቤት ጽሕፈት ሻሎም ወሓዚ ህይወት ቤተክርስትያን ዝግበር ኮይኑ፡ ካብ ሰዓት 10፡00ቅ/ቀ ክሳዕ 1፡00ድ/ቀ ይካየድ።</p>   
                        </div> 
                    </div> :                         
                    <div className='li-title'>
                        <AiFillCaretRight size={20} /> 
                        <p>ወትሩ ሰሉስ - መንፈሳውን ማሕበራውን ናይ ምኽሪ ኣገልግሎት</p>  
                    </div>                                        
                    }   
                </li>
                <hr className='horiz-line'/>

                <li className='semunawi-list-swicher' onClick={handleClick3}>
                    {click3 ? 
                    <div className='li-detail'>
                        <div className='li-detail-title'>
                            <AiFillCaretUp size={20} />                       
                            <p>ወትሩ ረቡዕ - ፍርቂ ሰሙናዊ ናይ ጸሎትን፡ ትምህርትን፡ ምንጋፍን ግዜ</p>   
                        </div> 
                        <div className='li-detail-title-list'>     
                            <p className='place-title'>ዝግበረሉ ቦታን ግዜን</p>                           
                            <p className='description'>ፍርቂ ሰሙናዊ ናይ ትምህርትን ጸሎትን መዝሙርን ግዜ ፡ ኣብ ቀንዲ ኣዳራሽ ሻሎም ወሓዚ ህይወት ቤተክርስትያን ዝካየድ ኮይኑ ካብ 6፡00ድ/ቀ ክሳዕ 8፡30ድ/ቀ ይካየድ። ኣብዚ መድብ ስሩዕ ናይ ቃል ኣምላኽን ጸሎትን፡ ከምኡ’ውን ብፍሉይ ብሕማም ንዝሽገሩ ምንጋፍ ንዘድልዮምን ይጽለ።</p>   
                        </div> 
                    </div> :                         
                    <div className='li-title'>
                        <AiFillCaretRight size={20} /> 
                        <p>ወትሩ ረቡዕ - ፍርቂ ሰሙናዊ ናይ ጸሎትን፡ ትምህርትን፡ ምንጋፍን ግዜ</p>  
                    </div>                                        
                    }   
                </li>
                <hr className='horiz-line'/>

                <li className='semunawi-list-swicher' onClick={handleClick4}>
                    {click4 ? 
                    <div className='li-detail'>
                        <div className='li-detail-title'>
                            <AiFillCaretUp size={20} />                       
                            <p>ወትሩ ሓሙስ - መጽናዕቲ መጽሓፍ ቅዱስ</p>   
                        </div> 
                        <div className='li-detail-title-list'>                                                  
                            <p className='description'>ኣብ ኩሉ ዞባታት ኣብ ኣባይቲ ቅዱሳን ዝግበር ናይ መጽሓፍ ቅዱስ መጽናዕቲ ኣገልግሎት፡ ንተጠቀምቲ ብዝጥዕም ገሊኡ ናይ ምሸት ንሰራሕተኛታት ክጥቀሙ፡ እቲ ገሊኡ ድማ ኣዴታት ምእንቲ ክጥቀማ ንግሆ ዝግበር እዮ።</p>   
                            <br />
                            <p className='place-title'>መጽናዕቲ መጽሓፍ ቅዱስ ዝግበረሉ ንቁጣታት</p>                            
                            <p className='place-sub-title'>ንቁጣ ቁ/1 ሜንጎን ከባቢኣን</p>                            
                            <p className='place-list'>
                                <ol>
                                    <li>ሩባጋ ሮድ</li>
                                    <li>ካብሱ 1</li>
                                    <li>ካብሱ 2</li>    
                                    <li>ናኩላቢ 1</li>
                                    <li>ናኩላቢ 2</li>                           
                                </ol>
                            </p>
                            <p className='place-sub-title'>ንቁጣ ቁ/2 ንጃናኩምቢ ከባቢኣን</p>  
                            <p className='place-list'>
                                <ol>
                                    <li>ስቴላ</li>
                                    <li>ኬንጆይ</li>
                                    <li>ካቦዋ</li>    
                                    <li>ቡሳባላ</li>
                                </ol>
                            </p>
                            <p className='place-sub-title'>ንቁጣ ቁ/3 ካንሳንጋን ከባቢኣን</p>  
                            <p className='place-list'>
                                <ol>
                                    <li>ካባላጋላ</li>
                                    <li>ካንሳንጋ</li>
                                    <li>ምዮንጋ</li>    
                                    <li>ቡንጋ</li>
                                    <li>ምኞኞ</li>
                                </ol>
                            </p>
                            <p className='place-add-info'>ንዝያዳ ሓበሬታ በዚ ቁ/ስልኪ ተወከሱ 0703821605 / 0703449895</p> 
                        </div> 
                    </div> :                         
                    <div className='li-title'>
                        <AiFillCaretRight size={20} /> 
                        <p>ወትሩ ሓሙስ - መጽናዕቲ መጽሓፍ ቅዱስ</p>  
                    </div>                                        
                    }   
                </li>
                <hr className='horiz-line'/>

                <li className='semunawi-list-swicher' onClick={handleClick5}>
                    {click5 ? 
                    <div className='li-detail'>
                        <div className='li-detail-title'>
                            <AiFillCaretUp size={20} />                       
                            <p>ወትሩ ዓርቢ - ሓዳሪ ጸሎት</p>   
                        </div> 
                        <div className='li-detail-title-list'>     
                            <p className='place-title'>ዝግበረሉ ቦታን ግዜን</p>                           
                            <p className='description'>ወትሩ ዓርቢ ሓዳሪ ጸሎት ኣብ ንእሽተይ ኣዳራሽ ሻሎም ወሓዚ ህይወት ቤተክርስትያን ካብ ሰዓት 10፡00ድ/ቀ ክሳዕ 2፡00ቅ/ቀ ዝካየድ ኮይኑ፡ ስለ ሕብረትናን ሃገርናን እንጽልየሉ ግዜ እዩ።</p>   
                        </div> 
                    </div> :                         
                    <div className='li-title'>
                        <AiFillCaretRight size={20} /> 
                        <p>ወትሩ ዓርቢ - ሓዳሪ ጸሎት</p>  
                    </div>                                        
                    }   
                </li>
                <hr className='horiz-line'/>
                <li className='semunawi-list-swicher' onClick={handleClick6}>
                    {click6 ? 
                    <div className='li-detail'>
                        <div className='li-detail-title'>
                            <AiFillCaretUp size={20} />                       
                            <p>ወትሩ ሰንበት - ጸሎትን መዝሙርን ቃል ኣምላኽን ግዜ</p>   
                        </div> 
                        <div className='li-detail-title-list'>     
                            <p className='place-title'>ዝግበረሉ ቦታን ግዜን</p>                           
                            <p className='description'>ስሩዕ ናይ ሰንበት ኣገልግሎት – ኣብ ቀንዲ ኣድራሽ ሻሎም ወሓዚ ህይወት ቤተክርስትያን ካብ ሰዓት 9፡30ቅ/ቀ – 1፡00ድ/ቀ ዝኸይድ ኮይኑ፡ ናይ ጸሎትን፡ መዝሙርን፡ ቃል ኣምላኽን ግዜ እዪ። ኣብዚ መዓልቲ ህጻናት ጥቅሲ ብቃሎም ድሕሪ ምዝራቦምን ብሓባር ምዝማሮምን፡ ኣብ መምሃሪ ክፍሎም ብቃንቃ ኣደ(ትግርኛ) መንፈሳዊ ትምህርቲ ይወሃቦም።</p>   
                        </div> 
                    </div> :                         
                    <div className='li-title'>
                        <AiFillCaretRight size={20} /> 
                        <p>ወትሩ ሰንበት - ጸሎትን መዝሙርን ቃል ኣምላኽን ግዜ</p>  
                    </div>                                        
                    }   
                </li>
                <hr className='horiz-line'/>
            </ul>            
        </div>
        <div className='video-container'>
        <iframe className='video-frame' src="https://www.youtube.com/embed/9dynNa-kSoY" title="ሻሎም ወሓዚ ህይወት ቤ/ክ - ኡጋንዳ ሰሙናዊ መደባት" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className='iconls-list'>
            <AiFillStar className='icon-star' size={30} style={{color: "#fcc602"}} />    
            <AiFillStar className='icon-star' size={30} style={{color: "#fcc602"}} />    
            <AiFillStar className='icon-star' size={30} style={{color: "#fcc602"}} />    
            <AiFillStar className='icon-star' size={30} style={{color: "#fcc602"}} />    
            <AiFillStar className='icon-star' size={30} style={{color: "#fcc602"}} />    
        </div>
        </div>
        <div className='action-btn'>
            <Link className='btn-lnk' to='/ተወሳኺ-ሓበሬታ' >ተወሳኺ ሓበሬታ</Link>
        </div>
    </div>
  )
}

export default SemunawiDetail