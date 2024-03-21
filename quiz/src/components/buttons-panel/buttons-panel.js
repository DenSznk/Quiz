import './buttons-panel.scss'

function ButtonsPanel() {
    return (
        <div className="buttons-panel">
            <button className="btn start"
            type="button">
                Start Quiz
            </button>
            <button className="btn stats"
            type="button">
                Show Statistics
            </button>
        </div>
    )
}

export default ButtonsPanel