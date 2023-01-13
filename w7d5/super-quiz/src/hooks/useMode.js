import { useState } from "react";

export default function useMode() {
  const EDIT = "EDIT";
  const QUIZ = "QUIZ";
  const INITIAL = "INITIAL";

  const modes = {
    EDIT,
    QUIZ,
    INITIAL,
  };

  const [mode, setMode] = useState(INITIAL);

  const setEditMode = () => setMode(EDIT);
  const setQuizMode = () => setMode(QUIZ);

  return { mode, modes, setEditMode, setQuizMode };
}
