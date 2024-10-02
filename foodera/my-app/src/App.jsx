import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Land from "./components/land/Land";
import About from "./components/about/About";
import ExFoods from "./components/explore/ExFoods";
import Rev from "./components/reviews/Rev";
import Cooter from "./components/contact & footer/Cooter";
export default function App() {
  return (
<>
    <BrowserRouter>
      <Header/>
      <Routes>
      </Routes>
    </BrowserRouter>
    <Land/>
    <About/>
    <ExFoods/>
    <Rev/>
    <Cooter/>
</>
  )
}