import {Routes, Route } from 'react-router-dom';

import "./app.scss";
import Header from "../header/header";
import QuizPanel from "../quiz-panel/quiz-panel";
import ResultScreen from "../result-screen/result-screen";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<QuizPanel />} />
        <Route path="/results" element={<ResultScreen />} />
      </Routes>
    </div>
  );
}

export default App;
