import { useEffect } from "react";
import "./timer.scss";
import {
  setDecreaseSeconds,
  resetTimer,
} from "../../features/timer/timerSlice";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Timer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalSeconds = useSelector((state) => state.timer.seconds);
  const isTimerActive = useSelector((state) => state.timer.isTimerActive);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  useEffect(() => {
    let interval = null;
    if (isTimerActive) {
      interval = setInterval(() => {
        dispatch(setDecreaseSeconds());
      }, 1000);
    if (totalSeconds === 0) {
      dispatch(resetTimer());
      navigate("/results");
      clearInterval(interval)
    }
      return () => clearInterval(interval)
    }
  }, [isTimerActive, dispatch, totalSeconds, navigate]);

  return (
    <div className="timer">
      {formattedMinutes}:{formattedSeconds}
    </div>
  );
}

export default Timer;
