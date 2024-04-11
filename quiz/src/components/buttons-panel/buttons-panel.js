import './buttons-panel.scss'
import {useNavigate} from 'react-router-dom'

function ButtonsPanel() {

    const navigate = useNavigate();

    return (
        <div className="buttons-panel">
            <button className="btn start"
            onClick={() => navigate('/quiz')}
            type="button">
                Start Quiz
            </button>
            <button className="btn stats"
            type="button" onClick={() => navigate('/statistics')}>
                Show Statistics
            </button>
        </div>
    )
}

export default ButtonsPanel