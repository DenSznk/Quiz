import './modal.scss'
import {useNavigate} from 'react-router-dom'

function Modal({onClose}) {
    const navigate = useNavigate()
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-message">
                    Are You sure?
                </div>
                <div className="buttons-panels">
                    <button className='btn' onClick={onClose}>Cancel</button>
                    <button className='btn' onClick={() => navigate('/')}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;