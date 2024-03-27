import React from "react";
import { Link } from "react-router-dom";
import ResultChart from "./Diag";
import './diagRes.css'
const Result = ({ answer }) => {
  function countAnswers() {
    const result = {
      "Согласен": 0,
      "Не согласен": 0,
      "Нейтрален": 0,
      "Затрудняюсь ответить": 0
    };

  
  answer.forEach(userAnswer => {
    result[userAnswer]++;
  });
    return result;
  }

  const answerCounts = countAnswers();

  return (
    <div className="container welcome_box mgt">
      <div className="row box">
        <ResultChart answerCounts={answerCounts} />

        <Link to="/">
          <button className="btn btn-success px-4 py-2 fw-bold">HOME</button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
