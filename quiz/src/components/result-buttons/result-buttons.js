import "./result-buttons.scss";
import { useNavigate } from "react-router-dom";
function ResultButtons() {
  const navigate = useNavigate();

  return (
    <div className="result-buttons">
      <button
      className="btn repeat"
      type="button"
      onClick={() => navigate('/quiz')}
      >
        Restart quiz
      </button>
      <button
        className="btn new-quiz"
        type="button"
        onClick={() => navigate("/")}
      >
        New Quiz
      </button>
    </div>
  );
}

export default ResultButtons;
