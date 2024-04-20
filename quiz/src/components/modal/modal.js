import "./modal.scss";
import { useNavigate } from "react-router-dom";
import { setModalOpen } from '../../features/settings/settingsSlice';
import { useDispatch } from "react-redux";

function Modal() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleModalClose = () => {
        dispatch(setModalOpen(false));
    };

    const handleConfirm = () => {
        handleModalClose();
        navigate("/");
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-message">Are You sure?</div>
                <div className="buttons-panels">
                    <button className="btn" onClick={handleModalClose}>
                        Cancel
                    </button>
                    <button className="btn" onClick={handleConfirm}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;