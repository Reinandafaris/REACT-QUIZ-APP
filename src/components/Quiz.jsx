import { useState, useCallback } from "react";
import QUESTION from "../question";
import quizCompleted from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsCompleted = activeQuestionIndex === QUESTION.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    console.log(selectedAnswer);
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
    console.log(userAnswers);
  },
  []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

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
        <QuestionTimer timout={1000} onTimeOut={handleSkipAnswer} />

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
