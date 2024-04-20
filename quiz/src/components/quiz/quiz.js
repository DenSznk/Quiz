import "./quiz.scss";
import Modal from "../modal/modal";
import {
  setModalOpen,
  setIncreaseIndex,
  setInitialIndex,
  setIncreaseScore,
} from "../../features/settings/settingsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.settings.modalOpen);
  const questions = useSelector((state) => state.settings.questions);
  const index = useSelector((state) => state.settings.questionIndex);
  const navigate = useNavigate();
  const currentQuestion = questions[index];

  const combinedAnswers = [...currentQuestion.incorrect_answers];
  const correctAnswer = currentQuestion.correct_answer;
  const randomIndex = Math.floor(Math.random() * (combinedAnswers.length + 1));
  combinedAnswers.splice(randomIndex, 0, correctAnswer)

const handleModalOpen = () => {
  dispatch(setModalOpen(true));
};
const handleModalClose = () => {
  dispatch(setModalOpen(false));
};

const handleChoice = (e) => {
  dispatch(setIncreaseIndex())

  if (e.target.textContent === correctAnswer) {
    dispatch(setIncreaseScore());
  }
  if (index >= questions.length - 1) {
    dispatch(setInitialIndex())
    navigate('/results')
  }
}
return (
  <>
    <div className="quiz-block">
      <h3 className="quiz-header">Quiz</h3>
      <div className="quiz-questions-block">
        <div className="timer">00:00</div>
        <div className="question">
          <p>{questions[index].question}</p>
        </div>
        <div className="answers">
          {combinedAnswers.map((answer, idx) => (
            <div key={idx} className="answer" onClick={handleChoice}>{answer}</div>
          ))}
        </div>
      </div>
    </div>
    <div className="buttons">
      <button className="btn" onClick={handleModalOpen}>
        End Quiz
      </button>
    </div>
    {modalOpen && <Modal closeModal={handleModalClose} />}
  </>
);
}
export default Quiz;
