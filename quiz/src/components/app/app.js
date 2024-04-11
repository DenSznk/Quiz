import {Routes, Route } from 'react-router-dom';

import "./app.scss";
import Header from "../header/header";
import QuizPanel from "../quiz-panel/quiz-panel";
import ResultScreen from "../result-screen/result-screen";
import Statistics from "../statistics/statistics"
import Quiz from '../quiz/quiz';


function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<QuizPanel />} />
        <Route path="/results" element={<ResultScreen />} />
        <Route path='/statistics' element={<Statistics />}/>
        <Route path='/quiz' element={<Quiz/>} />
      </Routes>
    </div>
  );
}

export default App;
