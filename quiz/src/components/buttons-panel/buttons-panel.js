import { useDispatch, useSelector } from "react-redux";
import "./buttons-panel.scss";
import { useNavigate } from "react-router-dom";
import { setQuestions } from "../../features/settings/settingsSlice";

function ButtonsPanel() {
  const category = useSelector(
    (state) => state.settings.selectedQuestionCategory
  );
  const type = useSelector((state) => state.settings.questionType);
  const questionsAmount = useSelector(
    (state) => state.settings.questionsAmount
  );
  const difficulty = useSelector((state) => state.settings.quizDifficulties);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRequest = async () => {
    let url = `https://opentdb.com/api.php?amount=${questionsAmount}`;
    if (category) url += `&category=${category}`;
    if (difficulty) url += `&difficulty=${difficulty}`;
    if (type) url += `&type=${type}`;
    console.log(url)
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data.results);
      dispatch(setQuestions(data.results));
      navigate("/quiz");
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="buttons-panel">
      <button className="btn start" onClick={handleRequest} type="button">
        Start Quiz
      </button>
      <button
        className="btn stats"
        type="button"
        onClick={() => navigate("/statistics")}
      >
        Show Statistics
      </button>
    </div>
  );
}

export default ButtonsPanel;
