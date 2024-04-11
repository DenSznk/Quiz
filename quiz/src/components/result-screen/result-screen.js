import "./result-screen.scss";
import ResultButtons from "../result-buttons/result-buttons";

function ResultScreen() {
  return (
    <div className="result">
      <div className="result-block">
        <h3 className="result-header">Thank you for completing this quiz.</h3>
        <p className="stats">You answered 5 out of 10 questions correctly</p>
        <p className="stats">Type: True/False Category: Games</p>
        <p className="stats">Time: 5m Difficulty: Hard</p>
        <p className="stats">You spent 5 minutes on this level</p>
      </div>
      <ResultButtons />
    </div>
  );
}

export default ResultScreen;
