import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResearchSub from "./research/researchSub";
import Bio from "./research/BIo";
import EarthSpace from "./research/EarthSpace";
import ComputerMaths from "./research/ComputerMaths";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Research" element={<ResearchSub />}></Route>
        <Route path="/Research/Bio" element={<Bio />} ></Route>
        <Route path="/Research/EarthSpace" element={<EarthSpace />}></Route>
        <Route path="/Research/ComputerMaths" element={<ComputerMaths />}></Route>
      </Routes>
    </BrowserRouter>
  )
}