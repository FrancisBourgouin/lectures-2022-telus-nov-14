import { useState } from "react";

import useQuestionnaire from "./hooks/useQuestionnaire";
import useMode from "./hooks/useMode";
import useSpy from "./hooks/useSpy";

import NewQuestionForm from "./components/NewQuestionForm";
import Question from "./components/Question";
import Header from "./components/Header";

import { listOfQuestionArr } from "./data/questionData";

import "./App.css";

function App() {
  const questionnaire = useQuestionnaire(listOfQuestionArr);
  const { currentQuestion, currentScore, validateAnswer, addQuestion } = questionnaire;

  const { mode, modes, setEditMode, setQuizMode } = useMode();

  useSpy();

  const [count, setCount] = useState(0);
  const addOne = () => {
    setCount((pendingState) => pendingState + 1);
    setCount((pendingState) => pendingState + 1);
  };
  return (
    <div className="App">
      <Header />
      <main>
        <button onClick={setEditMode}>Add question!</button>
        <button onClick={setQuizMode}>Answer questions!</button>
        <button onClick={addOne}>{count}</button>
        {mode === modes.INITIAL && <p>Yoooooo</p>}
        {mode === modes.EDIT && <NewQuestionForm onSubmit={addQuestion} />}
        {mode === modes.QUIZ && (
          <>
            <h1>
              Current score is : {currentScore} {currentScore !== 1 ? "points" : "point"}
            </h1>
            <Question question={currentQuestion.question} onSubmit={validateAnswer} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
