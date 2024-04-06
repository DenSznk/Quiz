import "./quiz-panel.scss"
import ButtonsPanel from "../buttons-panel/buttons-panel"
function QuizPanel() {
    const createNumberOptions = () => {
        const options = [];
        for (let i = 5; i <= 15; i++) {
          options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
      };
    return (
        <div className="quiz-panel">
          <div className="quiz-settings">
          <div className="container">
          <label className="number-of-questions"> Number of Questions
                <select className="select">
                   {createNumberOptions}
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