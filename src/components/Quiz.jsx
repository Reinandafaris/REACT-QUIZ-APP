import { useState } from "react";
import QUESTION from "../question";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  return (
    <div id="question">
      <p>{QUESTION[activeQuestionIndex].text}</p>
      <ul id="answers">
        {QUESTION[activeQuestionIndex].answers.map((answer) => (
          <li key={answer} className="answer">
            <button>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
