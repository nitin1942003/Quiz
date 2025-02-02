import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import quizData from "../assets/Uw5CrX.json";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const navigate = useNavigate();

  const currentQuestion = quizData.questions[currentQuestionIndex];

  // Handle option selection
  const handleOptionSelect = (optionId) => {
    const selectedOption = currentQuestion.options.find((option) => option.id === optionId);
    setSelectedOptions({
      ...selectedOptions,
      [currentQuestion.id]: selectedOption, // Store selected option object
    });
  };

  // Handle clearing selection
  const handleClearSelection = () => {
    setSelectedOptions((prev) => {
      const updatedOptions = { ...prev };
      delete updatedOptions[currentQuestion.id];
      return updatedOptions;
    });
  };

  // Handle navigation
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Handle quiz submission
  const handleSubmitQuiz = () => {
    let newScore = 0;

    quizData.questions.forEach((question) => {
      const selectedOption = selectedOptions[question.id];
      if (selectedOption && selectedOption.is_correct) {
        newScore++;
      }
    });

    navigate("/results", { state: { score: newScore, selectedOptions } });
  };

  return (
    <div className="quiz-container">
      <h1>{quizData.title}</h1>
      <p>{quizData.description}</p>

      <div className="question">
        <h2>Question {currentQuestionIndex + 1}</h2>
        <p>{currentQuestion.description}</p>

        <div className="options">
          {currentQuestion.options.map((option) => (
            <div key={option.id} className="option">
              <label>
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value={option.id}
                  checked={selectedOptions[currentQuestion.id]?.id === option.id}
                  onChange={() => handleOptionSelect(option.id)}
                />
                {option.description}
              </label>
            </div>
          ))}
        </div>
        <button onClick={handleClearSelection}>Clear Selection</button>
      </div>

      <div className="navigation">
        <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        <button onClick={handleNextQuestion} disabled={currentQuestionIndex === quizData.questions.length - 1}>
          Next
        </button>
        <button onClick={handleSubmitQuiz}>Submit Quiz</button>
      </div>
    </div>
  );
};

export default Quiz;
