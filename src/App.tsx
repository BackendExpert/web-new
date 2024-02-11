import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResearchSub from "./research/researchSub";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Research" element={<ResearchSub />}></Route>
        <Route path="/Research/Bio" element={} ></Route>
      </Routes>
    </BrowserRouter>
  )
}