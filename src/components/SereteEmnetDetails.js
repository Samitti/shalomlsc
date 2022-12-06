import React from 'react'
import "./SereteEmnetDetails.css"
import Bible from "../assets/bible.jpg";
import ImgLogo from "../assets/logo.png";
import {FaRocket, FaBalanceScale, FaBinoculars} from "react-icons/fa";
import {AiFillStar} from "react-icons/ai";


const SereteEmnetDetails = () => {
  return (
    <div className='bg-container'>
        <div className='main-container'>
            <div className='main-title'>
                <FaBinoculars size={50} style={{color: "#6ec1e4"}} />
                <h1>ራእይ (Vision Statement)</h1>
            </div>
            <div className='vision-state'>
                <p>"ኣብዛ ዘለናያ ሃገር ኡጋንዳ ዘሎ ህዝብና ብወንጌል ተበጺሑ ምርኣይ!"</p>
                <div className='logo-desc'>
                    <img className="image-logo"
                    src={ImgLogo} alt="logo" />                                                                                                                                                           
                    <div className='church-name'>
                        <p>ሻሎም ወሓዚ ህይወት ቤትክርስትያን</p>
                        <span>ካምፓላ, ኡጋንዳ</span>
                    </div>
                    
                </div>
            </div>
            <div className='img-container'>
                <img className="image-4 img-all"
                src={Bible} alt="singers-all" />
            </div>

            <div className='main-title'>
                <FaRocket size={50} style={{color: "#6ec1e4"}} />       
                <h1>ተልእኾ (Mission Statement)</h1>
            </div>

            <div className='vision-state'>
                <p>"ኣብዛ ዘለናያ ሃገር ኡጋንዳ ንዘሎ ህዝብና ብቛንቑኡ ወንጌል ምብጻሕን መንፈሳዊ ትምህርቲ ብምምሃር ድማ ንኣምላኽ ዝበቅዕን፡ ኣብ ዝኸዶ ቦታታት ድማ ንለውጢ ዝኸውን ወለዶ ምፍራይ።"</p>
                <div className='logo-desc'>
                <img className="image-logo"
                    src={ImgLogo} alt="logo" /> 
                    <div className='church-name'>
                        <p>ሻሎም ወሓዚ ህይወት ቤትክርስትያን</p>
                        <span>ካምፓላ, ኡጋንዳ</span>
                    </div>
                </div>
            </div>

            <hr />
            
            <div className='main-title balance-title'>
                <div className='balance-container'>
                    <FaBalanceScale size={70} style={{color: "#FCFCFC"}} />    
                </div>       
                <h1>ሰረተ - እምነት(FAITH STATEMANT)</h1>
            </div>

            <div className='serete-list'>
                <ol>
                    <li>መጽሓፍ ቅዱስ፡ መጽሓፍ ቕዱስ ብቁጽሪ 66 መጻሕፍቲ፡ 39ብሉይን 27ሓድሽ ኪዳናት ዝሓዘ ፡ መንፈስ ኣምላኽ ዝነፈሶ ፡ ፍጹም ጌጋ ዘይብሉን ምሉእ ስልጣን ዘለዎ ቅዱስ ጽሑፍ ምዃኑ ንኣምን። 2ጢሞ. 3:16-17, 2ጴጥ. 1፡19-21</li>
                    <li>እግዚኣብሄር ኣምላኽ፡ ብሓደ ሓቀኛ ኣምላኽ ንኣምን፣ ሓደ ብባህሪ ፡ ብመሎከትን ፥ ብስልጣንን   ፡ግን ከኣ ስለስተ ኣካል ዘለዎ እግዚኣብሄር ኣብ ፡ እግዚኣብሄር ወልድ፡ እግዚኣብሄር መንፈስ ቅዱስ፡ (ብስላሴ) ንኣምን። ማቴ።28፡19-20 </li>
                    <li> እግዚኣብሄር ኣብ ፡ ዘልአማዊ ኣቦ ጎይታና የሱስ ክርስቶስ ፡ፈጣሪ ሰማይን ምድርን ወሃቢ ሕጊ፡ ኩሉ ኣብ ኩሉ ምእንቲ ክኸውን ኩሉ ኣብ ትሕቲኡ ዝግዝኦ ምኻኑ ንኣምን። ዘፍ1፡1,1ቆረ15፡28</li>
                    <li>  እግዚኣብሄር ወልድ ፡ብኣምላኽነት የሱስ ክርስቶስ ንኣምን፡ ናይ ባህሪ ውሉድ ኣምላኽ ምዃኑ ካብ ድንግል ማርያም ብስጋ ከም እተወልደ ፡ ብዘይ ሓጢኣት ከምእተመላለሰ፡ ብዙሕ ትእምርታት ከምዘገበረ፡ ከምዝሞተ ሓይሊ ሞት ብምስዓር ካብ ሞት ከምዝተንስአ፡ ሕጂ ኣብ የማን ኣምላኸ ከምዘሎ ተመሊሱ ብኽብሪ ከምዝግለጽን ፍጹም ኣምላኽ ፍጹም ሰብ ምዃኑን ንኣምን። ቆሎ. 1፡16 1ቆሮ። 15፡3-4 ሉቃ. 1:26-31</li>
                    <li>እግዚኣብሄር መንፈስ ቅዱስ፡ብኣምላኽነትን ኣካላዊ ህላወን (Personaltity) መንፈስ ቅዱስ ንኣምን፡ ሕጂ ከኣ ምስ ቤተክርስትያን ከምዘሎ መንፈሳዊ ዕዮታት ብእኡ ይዕየይ ከምዘሎ፡ ብጥምቀት መንፈስ ቅዱስን ህያባት መንፈስ ቅዱስን ንኣምን። ዮሃ. 14፡16፣ 1ቆረ12፡8-12 </li>
                    <li> ፍጥረት ሰብ ፣ ሰብ ብመልክዕን ምስልን ኣምላኽ ተባዕታይን ኣንስታይን ከይኑ ዝተፈጥረ፡ ስሉስ ኣቃውማ ዘለዎ( መንፈስ ፡ነፍሲ፡ስጋ ) እዚ ድማ እቲ ሓደ ልዕል ከይበለ እቲ ሓደ ትሕት ከይበለ ብውሁድ ሰብ ተብሂሉ ዝጽዋዕ ፍጡር ምኻኑ ንኣምን።  ዘፍ1፣26-28, 1ይተስ5፣23, ኤፍ4፣24</li>
                    <li> ምድሓን ሰብ ፡  ሰብ ካብ ኣዳም ኣትሒዙ ብምኽንያት ሓጢኣት መንፈሳዊ ሞት ከምዝሞተ፡ ሞትን ትንሳኤን ናይ ጎይታና የሱስ ክርስቶስ ብምእማን ጥራይ ካብ ሓጢኣት ምንጻህን ምድሓንን ከም ዝረክብ ንኣምን። ሮሜ. 5:12,ዮሃ. 3፡16, ኤፌ2፣8-9</li>
                    <li> መለኮታዊ ፈውሲ፡ በቲ ጎይታና የሱስ ክርስቶስ ኣብ መስቀል ዝፈጸሞ ዕዮ በጃነት ንሰብ መሎኮታዊ ፈውስን ካብ ማእሰርቲ ምፍታሕን ከምዘምጽአ ንኣምን። ማቴ8፡16-17 ፣ኢሳ53፣4</li>
                    <li> ጥምቀት ፡ብጥምቀት ማይ ንኣምን፡ ሰብ ድሕሪ ምእማኑ ናይ እምነቱ መግለጺ፡ ምስ ሞትን ትንሳኤን ናይ የሱስ ክርስቶስ ንምሕባር ብማይ ክጥምቕ ከምዘለዎ ንኣምን። ሮሜ. 6፡4-5 1ጴጥ ፣ 3፡21 ፣ ማቴ28፡19-20</li>
                    <li>ቅዱሳት መላእኽቲ፡ንኣምላኽ ከምልኹን ፍቓዱ ክፍጽሙን ዝተፈጥሩ ህያዋን መናፍስትን ኣገልገልቲ ኣምላኽን ምኻኖምን ንኣገልግሎት እቶም ምድሓን ክወርሱ ዘለዎም ዝለኣኹ መናፍስቲ ኣገልግሎት ምኻኖም ንኣምን ካብ ሰብውን ኣምልኾን ስግደትን ከምዘይቕበሉ ንኣምን። እብ 1፡14 ራእ22፡8-9 ቆሎ2፡18 </li>
                    <li>ሰይጣን፡ መንፈሳዊ ህላወ ዘለዎ ፡ መልኣኽ ኣምላኽ ምንባሩ፡ ብምኽንያት ትዕቢቱ ግን ከም ዝወደቐ ምስኡ’ውን ዝወደቑ መላእኽቲ ከምዘለው ብግዜ ፍርዲውን ሓቢሮም ናብ ቐላይ ሓዊ ከምዝድርበዩ ንኣምን። ኢሳ. 14፡12-15፣ ህዝ28፡14-17 </li>
                    <li> ቤተክርስትያን ፡እቶም ንክርስቶስ ኣሚኖም ዳግም ዝተወልዱ ኩሎም ኣካል ክርስቶስ ተባሂሎም ከምዝጽውዑን፡ ኣብ ዓለም ሓንቲ ኣካል ክርስቶስ ከምዘላን ከምኡ ድማ ዞባዊት ቤተክርስትያን (local church) ከምዘላን ወኪል ናይ ኣምላኽ ኮይና ከምትዓይን ስልጣን ከምዘለዋ ንኣምን። ኤፌ. 1፡22-23፣ 1ቆሮ. 12፡12</li>
                    <li>ምንጣቕ፡ክርስቶስ ነቶም ናቱ ዝኾኑ ክቕበል ኣብ ኣየር ብስውር ከምዝመጽእ ብክርስቶስ ዝሞቱ ክትንስኡን ብህይወት ዘለዉ ኣመንቲ ድማ ክልወጡ ምኻኖም ንኣምን ።1ተሰ. 4፡16-17 </li>
                    <li> ካልኣይ ምጽኣት፡ ክርስቶስ የሱስ ብዓቢ ሓይልን ክብርን ናብ ምድሪ ከምዝገሃድ ኩለን ዝወግእዎ ኣዒንቲ ከምዝርእይኦን ንኹሉ ሃይሊ ጸላኢ ብምጥፍእ ኣብ መወዳእታ እተን 7 ናይ መከራ ዓመት ከምዝገሃድን ንሰይጣን`ውን ን1000 ዓመት ብምእሳር ንሽሕ ዓመት ከምዝነግስ ንኣምን። ራእ 20፡1-2,  ራእ 1፡7</li>
                    <li>ናይ ዘልኣለም ፍርዲ፡ንክርስቶስ  የሱስ ዘይኣመኑ ምውታታ ብግብሮም ንክፍረዱ ንፍርዲ  ጻዕዳ ዙፋን ክትንስኡ ምኻኖምን እቲ ኣራዊት ፡ሓሳዊ ነብይ፡ ሰይጣንን መላእኽቱን፡ ስሞም ኣብቲ መጽሓፍ ህይወት ዘይተረኽበ ዘበለ ኹሉን ናብ ቐላይ ሓዊ ክድርበዩ ምካኖን  ንኣምን። ራእ 20፡10-15</li>
                </ol>
            </div>

            <div className='star-rating'>
                <AiFillStar size={50} style={{color: "#F3B310"}} />       
                <AiFillStar size={50} style={{color: "#F3B310"}} />       
                <AiFillStar size={50} style={{color: "#F3B310"}} />       
                <AiFillStar size={50} style={{color: "#F3B310"}} />       
                <AiFillStar size={50} style={{color: "#F3B310"}} />       
            </div>

            <hr />

        </div>
    </div>
    
  )
}

export default SereteEmnetDetails