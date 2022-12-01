import "./index.css";
import Home from "./routes/Home";
import SemunawiMedebat from "./routes/SemunawiMedebat";
import NmewsboZedliQtie from "./routes/NmewsboZedliQtie";
import QalGuasaMahber from "./routes/QalGuasaMahber";
import SereteEmnet from "./routes/SereteEmnet";
import TarikBetekrstyan from "./routes/TarikBetekrstyan";
import Xelot from "./routes/Xelot";
import { Routes,Route } from "react-router-dom";
import TewesakiHaberieta from "./routes/TewesakiHaberieta";

const  App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ሰሙናዊ-መደባት" element={<SemunawiMedebat />} />
        <Route path="/ንመውስቦ-ዘድሊ-ቅጥዒ" element={<NmewsboZedliQtie />} />
        <Route path="/ቃል-ጓሳ-ማሕበር" element={<QalGuasaMahber />} />
        <Route path="/ሰረተ-እምነት" element={<SereteEmnet />} />
        <Route path="/ታሪኽ-ቤተክርስትያን" element={<TarikBetekrstyan />} />
        <Route path="/ተወሳኺ-ሓበሬታ" element={<TewesakiHaberieta />} />
        <Route path="/ጸሎት" element={<Xelot />} />
      </Routes>
    </>
  );
}

export default App;
