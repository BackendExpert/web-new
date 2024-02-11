import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResearchSub from "./research/researchSub";
import Bio from "./research/BIo";
import EarthSpace from "./research/EarthSpace";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Research" element={<ResearchSub />}></Route>
        <Route path="/Research/Bio" element={<Bio />} ></Route>
        <Route path="/Research/EarthSpace" element={<EarthSpace />}></Route>
      </Routes>
    </BrowserRouter>
  )
}