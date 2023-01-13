import { useState } from "react";
import useWow from "./useWow";

export default function useQuestionnaire(questionList) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [questions, setQuestions] = useState(questionList);
  const { sayWow } = useWow();

  const currentQuestion = questions[currentQuestionIndex];

  const validateAnswer = (formData) => {
    const { answer } = formData;
    if (answer === currentQuestion.answer) {
      setCurrentScore(currentScore + 1);
      sayWow();
    }
    setCurrentQuestionIndex((currentQuestionIndex + 1) % questions.length);
  };

  const addQuestion = (formData) => {
    const { question, answer } = formData;

    const newQuestion = { question, answer, id: questions.length + 1 };
    setQuestions([...questions, newQuestion]);
  };

  return { currentQuestion, currentScore, validateAnswer, addQuestion };
}
