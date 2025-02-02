import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import quizData from "../assets/Uw5CrX.json";
import "./Results.css";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, selectedOptions } = location.state || { score: 0, selectedOptions: {} };
  const [showSolutions, setShowSolutions] = useState({});

  // Toggle solution visibility for a question
  const handleShowSolution = (questionId) => {
    setShowSolutions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  return (
    <div className="results-container">
      <h1>Quiz Completed!</h1>
      <p>Your Score: {score} / {quizData.questions.length}</p>

      <h2>Review Questions</h2>
      {quizData.questions.map((question) => {
        const selectedOption = selectedOptions[question.id];
        return (
          <div key={question.id} className="question-review">
            <h3>{question.description}</h3>

            <div className="options">
              {question.options.map((option) => {
                const isSelected = selectedOption && selectedOption.id === option.id;
                const isCorrect = option.is_correct;

                return (
                  <div
                    key={option.id}
                    className={`option ${isSelected ? "selected" : ""} ${isCorrect ? "correct" : ""}`}
                  >
                    <label>
                      <input
                        type="radio"
                        disabled
                        checked={isSelected}
                      />
                      {option.description}
                    </label>
                    {isCorrect && isSelected && <span className="correct-answer">✅</span>}
                  </div>
                );
              })}
            </div>

            <button onClick={() => handleShowSolution(question.id)}>
              {showSolutions[question.id] ? "Hide Solution" : "Show Solution"}
            </button>

            {showSolutions[question.id] && (
              <div className="solution">
                <h4>Solution:</h4>
                <p>{question.detailed_solution}</p>
              </div>
            )}
          </div>
        );
      })}

      <button className="retry-container button" onClick={() => navigate("/")}>Retry Quiz</button>
    </div>
  );
};

export default Results;
