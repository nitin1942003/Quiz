# Quiz App

A web-based interactive quiz application with gamification features, built using **React.js**. The app fetches quiz data from a JSON file and provides users with an engaging experience using **points, badges, levels, and leaderboards**.

## 🚀 Features
- 📌 **Multiple-choice questions** with options selection
- ✅ **Instant feedback** on correct answers
- 🏆 **Gamification Elements**
  - Earn **points** for each correct answer
  - Unlock **badges** after reaching milestones
  - Progress through **levels** as you score more
  - View **leaderboards** to see top scorers
- 📊 **Progress Tracking** with a progress bar for leveling up
- 🔍 **View Solutions** after completing the quiz
- 🔄 **Retry Option** to reattempt the quiz

## 🛠️ Tech Stack
- **Frontend**: React.js
- **State Management**: useState (React Hooks)
- **Styling**: CSS

## 📦 Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open the app in your browser at:
   ```
   http://localhost:5173
   ```

## 🕹️ How to Play
1. Start the quiz and answer each question.
2. Earn **points** for correct answers.
3. Unlock **badges** when reaching milestones.
4. Track progress using the **leveling system**.
5. View **solutions** after completing the quiz.
6. Compete in the **leaderboard** for high scores.

## 🏅 Gamification System
- **Points System**: +10 points for each correct answer
- **Badges**:
  - `Novice`: Score 50 points
  - `Intermediate`: Score 100 points
  - `Quiz Master`: Score 200+ points
- **Levels**: Level up every 100 points
- **Leaderboard**: Displays top players

## 📂 Folder Structure
```
quiz-app/
├── src/
│   ├── components/
│   │   ├── Quiz.js       # Main quiz component
│   │   ├── Results.js    # Results and leaderboard
│   ├── assets/
│   │   ├── Uw5CrX.json   # Quiz data file
│   ├── App.js            # Main app file
│   ├── index.js          # React entry file
│   ├── styles/
│   │   ├── App.css       # Global styles
│   │   ├── Results.css   # Styles for results page
│
├── public/
│   ├── index.html
├── README.md
├── package.json
```

## 🤝 Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Added new feature"`
4. Push to the branch: `git push origin feature-name`
5. Open a **Pull Request**


