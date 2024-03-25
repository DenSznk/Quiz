import './result-buttons.scss';

function ResultButtons () {
    return (
        <div className="buttons-panel">
            <button className="btn repeat"
            type="button">
                Repeat
            </button>
            <button className="btn new-quiz"
            type="button">
               New Quiz
            </button>
        </div>
    )
}

export default ResultButtons