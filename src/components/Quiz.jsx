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
      [currentQuestion.id]: selectedOption, // Store the selected option object
    });
  };

  // Handle moving to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Handle moving to the previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Handle quiz submission (Updated Score Calculation)
  const handleSubmitQuiz = () => {
    let newScore = 0;

    quizData.questions.forEach((question) => {
      const selectedOption = selectedOptions[question.id];
      if (selectedOption && selectedOption.is_correct) {
        newScore++; // Increment score if the selected option is correct
      }
    });

    // Navigate to results page with score and answers
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
                  checked={selectedOptions[currentQuestion.id]?.id === option.id} // Match by option ID
                  onChange={() => handleOptionSelect(option.id)}
                />
                {option.description}
              </label>
            </div>
          ))}
        </div>
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
