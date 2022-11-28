import "./index.css";
import Home from "./routes/Home";
import SemunawiMedebat from "./routes/SemunawiMedebat";
import NmewsboZedliQtie from "./routes/NmewsboZedliQtie";
import QalGuasaMahber from "./routes/QalGuasaMahber";
import SereteEmnet from "./routes/SereteEmnet";
import TarikBetekrstyan from "./routes/TarikBetekrstyan";
import Xelot from "./routes/Xelot";
import { Routes,Route } from "react-router-dom";

const  App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SemunawiMedebat" element={<SemunawiMedebat />} />
        <Route path="/NmewsboZedliQtie" element={<NmewsboZedliQtie />} />
        <Route path="/QalGuasaMahber" element={<QalGuasaMahber />} />
        <Route path="/SereteEmnet" element={<SereteEmnet />} />
        <Route path="/TarikBetekrstyan" element={<TarikBetekrstyan />} />
        <Route path="/Xelot" element={<Xelot />} />
      </Routes>
    </>
  );
}

export default App;
