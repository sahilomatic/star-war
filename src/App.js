import React from "react";
import Home from "./components/Home/Home";
import CharacterDetailPage from "./components/CharacterDetails/characterDetailPage";
import Top from "./components/Top";
import './App.css';
import { Route, Routes, BrowserRouter

 } from "react-router-dom";


export default function App() {

   return (
    <div className="App">
        <Top/>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/character" element={ <CharacterDetailPage/>} />

        </Routes>
        </BrowserRouter>
       
    </div>
   )
}
