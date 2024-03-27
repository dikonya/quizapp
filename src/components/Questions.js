import React, { useState } from "react";
import QuestionComp from "./QuestionComp";
import question from "./question";
import { Link } from "react-router-dom";

const Questions = ({ answer, setAnswer }) => {
  const [number, setNumber] = useState(0);
  const [show, setShow] = useState(true);

  const handleAnswer = (id, ans) => {
    let temp = [...answer]; 
    temp[id] = ans;
    setAnswer([...temp]);
    console.log('ok');
  };

  const handleIncrement = () => {
    if (number === 19) {
      alert("This is the last question");
      setShow(false);
      return;
    }
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    if (number === 0) return;
    setNumber(number - 1);
  };

  return (
    <div className="container mb-5">
      <div className="row"> 
        <div className="col-12"> 
          <QuestionComp question={question[number]} handleAnswer={handleAnswer} />
          <div className="buttons">
            <button className="btn btn-primary px-4 py-2 fw-bold" onClick={handleDecrement}> Prev</button>
            {show ? (
              <button className="btn btn-success px-4 py-2 fw-bold" onClick={handleIncrement}> Next</button>
            ) : (
              <Link to="/solution">
                <button className="btn btn-info px-4 py-2 fw-bold">Submit</button>
              </Link>
            )}
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Questions;
