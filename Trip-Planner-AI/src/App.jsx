import "./App.css";
import React  from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Login from "./pages/login/login"
import Home from "./pages/home/home";
function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
