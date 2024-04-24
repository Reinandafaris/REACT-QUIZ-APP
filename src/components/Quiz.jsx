import { useState } from "react";
import QUESTION from "../question";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  function handleSelectAnswer(selectedAnswer) {
    console.log(selectedAnswer);
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
    console.log(userAnswers);
  }

  return (
    <div id="quiz">
      <div id="question">
        <p>{QUESTION[activeQuestionIndex].text}</p>
        <ul id="answers">
          {QUESTION[activeQuestionIndex].answers.map((answer) => (
            <li
              key={answer}
              className="answer"
              onClick={() => handleSelectAnswer(answer)}
            >
              <button>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
