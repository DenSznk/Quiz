import "./quiz-panel.scss"
import ButtonsPanel from "../buttons-panel/buttons-panel"
function QuizPanel() {
    return (
        <div className="quiz-panel">
          <div className="quiz-settings">
          <div className="container">
          <label className="number-of-questions"> Number of Questions
                <select className="select">
                    <option value="value1">5</option>
                    <option value="value2">6</option>
                    <option value="value3">7</option>
                    <option value="value1">8</option>
                    <option value="value2">9</option>
                    <option value="value3">10</option>
                    <option value="value1">11</option>
                    <option value="value2">12</option>
                    <option value="value3">13</option>
                    <option value="value3">14</option>
                    <option value="value3">15</option>
                </select>
            </label>
          </div>
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
          </div>
            <ButtonsPanel/>
        </div>
    )
}

export default QuizPanel