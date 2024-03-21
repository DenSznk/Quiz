import "./quiz-panel.scss"

function QuizPanel() {
    return (
        <div className="quiz-panel">
          <div className="container">
          <label className="number-of-questions"> Number of Questions:
                <input type="text"/>
            </label>
          </div>
            <label className="category"> Category:
                <input type="text"/>
            </label>
            <label className="difficulties"> Difficulty:
                <select type="text"/>
            </label>
            <label className="type"> Type:
                <input type="text"/>
            </label>
            <label className="time"> Time:
                <select type="text"/>
            </label>
        </div>
    )
}

export default QuizPanel