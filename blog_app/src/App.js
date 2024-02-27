import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Home from "./components/Home"
import About from "./components/About";


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/tester')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (

      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
              <Route path="/about" element={<About />}/>

          </Routes>
        </BrowserRouter>
      </div>


  )
      ;
}

export default App;

