import React, { useState } from "react";
import './QuestionsComp.css'

const QuestionComp = ({ question, handleAnswer }) => {
  const { id, title, options } = question;
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    handleAnswer(id, options[index]);
  };

  return (
    <div className="question">
      <p className="fw-bold">Question - {id + 1} / 20</p>
      <p className="fw-bold">{title}</p>
      <div>
        {options.map((option, index) => (
          <label
            key={index}
            htmlFor={`option_${id}_${index}`}
            className={`box ${selectedOption === index ? "selected" : ""}`}
          >
            <input
              type="radio"
              id={`option_${id}_${index}`}
              name={`question_${id}`}
              onClick={() => handleOptionClick(index)}
            />
            <div className="course">
              <span className="subject">{option}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionComp;
