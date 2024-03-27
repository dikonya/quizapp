import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Questions from "./components/Questions";
import "./index.css";
import Result from "./components/Result";
const App = () => {
  const [answer, setAnswer] = useState([]);
  return (
    <>
      <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/questions" element={<Questions answer={answer} setAnswer={setAnswer}/>}/>
            <Route exact path="/solution" element={<Result answer={answer}/>}/>
          </Routes>
        </Router>
    </>
  );
};
 
export default App;