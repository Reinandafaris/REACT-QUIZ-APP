import { useState, useEffect } from "react";

export default function QuestionTimer({ timout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timout);

  useEffect(() => {
    setTimeout(timout, onTimeOut);
  }, [timout, onTimeOut]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime(
        (prevRemainingTime) => prevRemainingTime - 100
      );
    }, 100);
  }, []);

  return (
    <progress id="question-time" max={timout} value={remainingTime} />
  );
}
