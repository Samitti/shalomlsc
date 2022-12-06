import React, {useState} from 'react'
import "./XelotDetails.css"
import ImgPrayer from "../assets/prayer.jpg";
import {FaPrayingHands} from "react-icons/fa";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";



const XelotDetails = () => {
    const [click0, setClick0] = useState(false);
  const handleClick0 = () => setClick0(!click0);
    const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);
  return (
    <div className='bg-container'>
        <div className='main-container'>
            <div className='img-container'>
                <img className="image-pr"
                src={ImgPrayer} alt="Prayer" />
            </div>
            <div className='main-title balance-title'>
                <div className='balance-container'>
                    <FaPrayingHands size={70} style={{color: "#FCFCFC"}} />    
                </div>       
                <h1>ናይ እምነት ጸሎት</h1>
            </div>

            <div className='expand-verse' onClick={handleClick0}>
            {click0 ? (
                <div className='verse'>
                <div className='verse-ref verse-ref-add'>
                    <AiOutlineMinus size={20} style={{color: "#61ce70"}} /> 
                    <span style={{color: "#61ce70"}}>ሉቃ 23፡39-43</span>
                </div>              
                <p className='bold-verse'>
                39. ካብቶም እተሰቕሉ ገበርቲ ኽፉእውን ሓደ፡ ንስኻ ክርስቶስ እንተ ዄንካስ፡ ንርእስኻን ንኣናን ኣድሕን፡ ኢሉ የላግጸሉ ነበረ።
                </p>
                <p className='bold-verse'>
                40.  እቲ ኻልኣዩ ግና፡ ኣታ ኣብዚ ኸምዚ ዝበለ ፍርዲ ኸሎኻኸ፡ ኣምላኽዶ ኣይትፈርህን ኢኻ፧
                </p>
                <p className='bold-verse'>
                41. ንሕናስ ብሓቂ ብግብርና ዚግብኣና ተፈዴና፡ እዚ ግና ሓንቲ ኽፍኣት እኳ ኣይገበረን፡ ኢሉ ገንሖ።
                </p>
                <p className='bold-verse'>
                42. ንየሱስ ከኣ፡ ጐይታይ፡ ብመንግስትኻ ምስ እትመጽእ ዘክረኒ፡ በሎ።
                </p>
                <p className='bold-verse'>
                43. የሱስ ድማ፡ ሎሚ ምሳይ ኣብ ገነት ከም እትኸውን፡ ብሓቂ እብለካ ኣሎኹ፡ በሎ።
                </p>
                </div>        
            ) : (
                <div className='verse-ref'>
                <AiOutlinePlus size={20} style={{color: "#6ec1e4"}} />
                <span style={{color: "#6ec1e4"}}>ሮሜ 10፡9-13</span>
                </div>
            )}             
            </div>
            
            <div className='pr-msg'>
                <p>
                እዚ ጽሑፍ ንድሕነሉ መንገዲ ከመይ ምካኑ እዩ ዝገልጽ። ካብዚ እንመሃሮ ድማ ገበርቲ ክፍእ፡ዓመጽቲ፡ከተርቲ ብምኻኖን ንሞት ተፈሪዶም በዚ ምኽንያት ተሰቒሎም። ኣብ ኣፍ-ሞት ከለዉ እቲ ሓደ ነቲ ክርስቶስ ንምድሓን ዓለም ኢሉ እተሰቕለሉ ዕላማ ዕሽሽ ብምባል ብላግጺ ክጠፍእ እንከሎ፡ እቲ ካልኣይ ግና መጀመርያ ነቲ መላገጺ ስለ እቲ ንኣምላኽ ዘይምፍርሑ ብምግናሕ፡ ቀጺሉ የሱስ ክርስቶስ ጻድቅ ምኻኑ፡ ሓንቲ ክፍኣት ከምዘይገበረ ፡ ዘይግብኦ መቅጻዕቲ ከም እተፈድየ፡ ንሱ ግና ገባሪ ክፉእ ምኻኑ ብሓቂ ዝግብኦ መቅጻዕቲ ከምእተፈድየን ክኣምንን ክእመንን ጀመረ (ሉቃ23፡39-41)። ወሲኹ ከኣ የሱስ ድሕሪ ሞቱ ተንሲኡ ከም ዝመጽእ ፡ ንጉስ  ምዃኑን መንግስቲ`ውን ከምዘላቶ ብምእማን ጐይታይ ብመንግስትኻ ምስ እትመጽእ ዘክረኒ በሎ(ሉቃ23፡42)።
                </p>
                <p>
                ኣብ መወዳእታ ጐይታና የሱስ ዝመለሶ ከኣ ሎሚ ምሳይ ኣብ ገነት ከም እትከውን ብሓቂ እብለካ ኣለኹ ኢሉ ወራሲ ናይ ዘልኣለም ህይወት ክገብሮ እንከሎ ንርእይ(ሉቃ23፡42)። ስለዚ ካብዚ ዓመጸኛ ሰብ እንመሃሮ ብመሰረት ኤፌሶን2፡8-9 ንድሕነሉ መንገዲ ብግብርና ወይ ሃይማኖትና ዘይኮነስ ብእምነት ብጸጋ ምኻኑ እዚ ከኣ ውህበት ኣምላኽ እዩ እምበር ካባና  ወይ ካብ ግብርን ኣይኮነን እሞ ንምክሓሉ ምኽንያት የብልናን ። እምበኣር ክትድሕን ፍቃደኛ እንተኬንካ/ኪ እዛ ናይ እምነት ጸሎት ምሳይ ጸሊ/ጸልዪ፧
                </p>
                <p>
                የሱስ ክርስቶስ ንስኻ በይንኻ ጥራይ ጐይታን መድሓንን ምኻንካ፡ ኣነ ከኣ ብኣኻ ጥራይ ክድሕን ዝግበኣኒ ሓጥያተኛ ሰብ ምኻነይ እፈልጥን እኣምንን ኣለኹ። ንኹሉ ሓጥያተይ ይቕረ በለለይ፡ ምእንቲ ሓጥያተይ ከም ዝሞትካ ምእንቲ ጽድቐይ’ውን ከም ዝተንሳእካ ብምሉእ ልበይ እኣምን ኣለኹ። ብኣፈይ ጐይታ ምኻንካ እነግር ብልበይ’ውን ካብ ምውታት ከም ዝተንሳእካ እኣምን  ኣለኹ፡ እሞ ዎ ኣቦ ተቐበለኒ ውሉድካ’ውን ግበረኒ፡ ስለ ዝተቐበልካንን ዉሉድካ’ውን ስለ ዝገበርካንን ብስም የሱስ ክርስቶስ የመስግነካ።
                </p>
                <p>
                ኣሜን!
                </p>
            </div>   
            <div className='expand-verse' onClick={handleClick}>
            {click ? (
                <div className='verse'>
                <div className='verse-ref verse-ref-add'>
                    <AiOutlineMinus size={20} style={{color: "#61ce70"}} /> 
                    <span style={{color: "#61ce70"}}>ሮሜ 10፡9-13</span>
                </div>              
                <p className='bold-verse'>
                9-11. እቲ ጽሑፍ፡ ብእኡ ዚኣምን ዘበለ ኣይሐፍርን፡ ይብል እዩ እሞ፡ ሰብ ብልቡ ኣሚኑ ይጸድቕ፡ ብኣፉ ተኣሚኑውን ይድሕን እዩ፡ ስለዚ ብኣፍካ የሱስ ጐይታ ምዃኑ እንተ ነገርካ፡ ብልብኻውን ኣምላኽ ካብ ምዉታት ከም ዘተንስኦ እንተ ኣመንካ፡ ክትድሕን ኢኻ።
                </p>
                <p className='bold-verse'>
                12-13. ማለት፡ ነፍሲ ወከፍ ስም እግዚኣብሄር ዚጽውዕ ዘበለ ኺድሕን እዩ፡ ንሱስ ሓደ ጐይታ እዩ፡ ነቶም ዚጽውዕዎ ዂሎምውን ሃብታም እዩ እሞ፡ ኣብ መንጎ ኣይሁዳውን ጽርኣውን ሌላን ጒሌላን የልቦን።
                </p>
                </div>        
            ) : (
                <div className='verse-ref'>
                <AiOutlinePlus size={20} style={{color: "#6ec1e4"}} />
                <span style={{color: "#6ec1e4"}}>ሮሜ 10፡9-13</span>
                </div>
            )}             
            </div>

            <div className='expand-verse' onClick={handleClick1}>
            {click1 ? (
                <div className='verse'>
                <div className='verse-ref verse-ref-add'>
                    <AiOutlineMinus size={20} style={{color: "#61ce70"}} /> 
                    <span style={{color: "#61ce70"}}>1የሃ 5፡10-13</span>
                </div>              
                <p className='bold-verse'>
                10. ብወዲ ኣምላኽ ዚኣምን፡ እቲ ምስክር ኣብ ውሽጡ አለዎ። እቲ ንኣምላኽ ዘይኣምን፡ ነቲ ኣምላኽ ብዛዕባ ወዱ ዝመስከሮ ምስክር ስለ ዘይኣመኖ፡ ንእኡ ሓሳዊ ገይርዎ አሎ። 
                </p>
                <p className='bold-verse'>
                11. ኣምላኽ ናይ ዘለኣለም ህይወት ከም ዝሀበና፡ እቲ ምስክር እዚ እዩ እሞ እዛ ህይወት እዚኣ ኣብ ወዱ አላ።
                </p>
                <p className='bold-verse'>
                12. እቲ ወዲ ዘለዎ ህይወት አላቶ፡ ወዲ ኣምላኽ ዜብሉ ህይወት የብሉን።
                </p>
                <p className='bold-verse'>
                13. ንኣካትኩም ብስም ወዲ ኣምላኽ እትኣምኑ ዘሎኹም፡ ናይ ዘለኣለም ህይወት ከም ዘላትኩም ምእንቲ ኽትፈልጡ ኢለ እየ እዚ ጽሒፈልኩም ዘሎኹ።
                </p>
                </div>        
            ) : (
                <div className='verse-ref'>
                <AiOutlinePlus size={20} style={{color: "#6ec1e4"}} />
                <span style={{color: "#6ec1e4"}}>1የሃ 5፡10-13</span>
                </div>
            )}             
            </div>         
        </div>
    </div>
  )
}

export default XelotDetails