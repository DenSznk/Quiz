import "./result-screen.scss";
import ResultButtons from "../result-buttons/result-buttons";


function ResultScreen() {
  return (
    <div className="result">
         <div className="result-block">
      <h2 className="result-header">Thank you for completing this quiz.</h2>
      <h2 className="stats">You answered 5 out of 10 questions correctly</h2>
      <h2 className="configuration">You spent 5 minutes on this level</h2>
    </div>
    <ResultButtons/>
    </div>

  );
}

export default ResultScreen;
