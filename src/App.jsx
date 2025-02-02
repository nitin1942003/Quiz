import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css";
import quizImage from './assets/image.png'

const App = () => {
  const features = [
    { icon: "🧠", title: "Learn", description: "Test your knowledge" },
    { icon: "⏱️", title: "Quick", description: "Fast-paced questions" },
    { icon: "⭐", title: "Score", description: "Track your progress" }
  ];

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <div className="header">
          <h1>Welcome to the Quiz App</h1>
          <p className="subtitle">Challenge yourself with our interactive quizzes</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-content">
                <span className="feature-icon">{feature.icon}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="image-section">
          <img 
            src={quizImage} 
            alt="Quiz Illustration" 
            className="quiz-image"
          />
          
          <Link to="/quiz">
            <button className="start-button">
              Start Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;