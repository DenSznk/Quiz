import './buttons-panel.scss'

function ButtonsPanel() {
    return (
        <div className="buttons-panel">
            <button className="start"
            type="button">
                Start Quiz
            </button>
            <button className="stats"
            type="button">
                Show Statistics
            </button>
        </div>
    )
}

export default ButtonsPanel