import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Home from "../Views/Home";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import Interests from "../Components/Interests";
import Awards from "../Components/Awards";


export default function App() {
  return (
    <Router>
        <Routes>
            <Route path="/About" element={<About/>} />
            <Route path="/Experience" element={<Experience/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/Education" element={<Education/>} />
            <Route path="/Skills" element={<Skills/>} />
            <Route path="/Interests" element={<Interests/>} />
            <Route path="/Awards" element={<Awards/>} />

        </Routes>
    </Router>
  )
}