import { useState } from "react";
import QUESTION from "../question";
import quizCompleted from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsCompleted = activeQuestionIndex === QUESTION.length;

  function handleSelectAnswer(selectedAnswer) {
    console.log(selectedAnswer);
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
    console.log(userAnswers);
  }

  if (quizIsCompleted) {
    return (
      <div id="summary">
        <img src={quizCompleted} alt="quiz completed" />

        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [
    ...QUESTION[activeQuestionIndex].answers,
  ].sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <p>{QUESTION[activeQuestionIndex].text}</p>

        <ul id="answers">
          {shuffledAnswers.map((answer) => (
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
