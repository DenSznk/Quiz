import { useSelector, useDispatch } from "react-redux";

import {
  setQuestionsAmount,
  setQuestionsType,
  setQuizTime,
  setQuizDifficulties,
} from "../../features/settings/settingsSlice";
import "./quiz-panel.scss";
import ButtonsPanel from "../buttons-panel/buttons-panel";

function QuizPanel() {
  const dispatch = useDispatch();

  //Question amount handling
  const questionsAmount = useSelector(
    (state) => state.settings.questionsAmount
  );
  const handleAmountChange = (event) => {
    dispatch(setQuestionsAmount(event.target.value));
  };

  //Question Type handling
  const questionType = useSelector((state) => state.settings.questionType);
  const handleTypeChange = (event) => {
    dispatch(setQuestionsType(event.target.value));
  };

  //Quiz difficulties level
  const quizDifficulties = useSelector(
    (state) => state.settings.quizDifficulties
  );
  const handleQuizDifficulties = (event) => {
    dispatch(setQuizDifficulties(event.target.value));
  };

  //Quiz Time handling
  const quizTime = useSelector((state) => state.settings.quizTime);
  const handleQuizTime = (event) => {
    dispatch(setQuizTime(event.target.value));
  };

  console.log(quizTime);
  console.log(quizDifficulties);
  console.log(questionType);
  console.log(questionsAmount);

  return (
    <div className="quiz-panel">
      <div className="quiz-settings">
        <div className="container">
          <label className="category">
            {" "}
            Category
            <select className="select"></select>
          </label>
        </div>
        <div className="container">
          <label className="difficulties">
            Difficulty
            <select
              className="select"
              value={quizDifficulties}
              onChange={handleQuizDifficulties}
            >
              <option value="">Any Difficulty</option>
              <option value="easy"> Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
        </div>
        <div className="container">
          <label className="type">
            Type
            <select
              className="select"
              value={questionType}
              onChange={handleTypeChange}
            >
              <option value="">Any Type</option>
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True/False</option>
            </select>
          </label>
        </div>
        <div className="container">
          <label className="time">
            Time
            <select
              className="select"
              value={quizTime}
              onChange={handleQuizTime}
            >
              <option value="1">1 minute</option>
              <option value="2">2 minutes</option>
              <option value="5">5 minutes</option>
            </select>
          </label>
        </div>
        <div className="container">
          <label className="number-of-questions">
            Questions amount
            <p>{questionsAmount}</p>
            <input
              type="range"
              min={5}
              max={15}
              value={questionsAmount}
              onChange={handleAmountChange}
            />
          </label>
        </div>
      </div>
      <ButtonsPanel />
    </div>
  );
}

export default QuizPanel;
