import "./app.scss";
import Header from "../header/header";
import QuizPanel from "../quiz-panel/quiz-panel";
import ResultScreen from "../result-screen/result-screen";

function App() {
  return (
    <div className="app">
      <Header />
      <QuizPanel />
      <ResultScreen />
    </div>
  );
}

export default App;
