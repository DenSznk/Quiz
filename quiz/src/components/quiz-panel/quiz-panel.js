import { useState } from "react";

import "./quiz-panel.scss"
import ButtonsPanel from "../buttons-panel/buttons-panel"
function QuizPanel() {

    const [questionsAmount, setQuestionAmount] = useState(10);
    const handleAmountChange = event => {
        setQuestionAmount(event.target.value)
      }

    return (
        <div className="quiz-panel">
          <div className="quiz-settings">
            <div className="container">
                <label className="category"> Category
                    <select className="select"></select>
                </label>
           </div>
           <div className="container">
                <label className="difficulties"> Difficulty
                        <select className="select"></select>
                </label>
            </div>
            <div className="container">
                <label className="type"> Type
                    <select className="select">
                </select>
            </label>
            </div>
            <div className="container">
                <label className="time"> Time
                    <select className="select">
                        <option value="value1">1m</option>
                        <option value="value2">2m</option>
                        <option value="value3">5m</option>
                    </select>
                </label>
            </div>
            <div className="container">
          <label className="number-of-questions">Questions amount
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
            <ButtonsPanel/>
        </div>
    )
}

export default QuizPanel