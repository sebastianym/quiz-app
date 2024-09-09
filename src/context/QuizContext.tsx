"use client";
import { createContext, useState, useContext } from "react";
import { Question } from "@/interfaces/Question";
export const QuizContext = createContext<{
  name: string;
  setName: (name: string) => void;
  getFromLocalStorage: () => void;
  questions: Question[] | null;
  setQuestions: (questions: Question[]) => void;
  questionId: number;
  setQuestionId: (questionId: number) => void;
}>({
  name: "",
  setName: () => {},
  getFromLocalStorage: () => {},
  questions: null,
  setQuestions: () => {},
  questionId: 0,
  setQuestionId: () => {},
});

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  //useState for the name of the user
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState<Question[] | null>([
    {
      id: 1,
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Berlin", "Madrid"],
      indexCorrectAnswer: "Paris",
      state: 0,
    },
  ]);
  const [questionId, setQuestionId] = useState(0);
  //return name from local storage
  const getFromLocalStorage = () => {
    const storedName = localStorage.getItem("name");
    if (storedName !== null) {
      setName(storedName.replace(/"/g, ""));
    }
  };
  return (
    <QuizContext.Provider
      value={{
        name,
        setName,
        getFromLocalStorage,
        questions,
        setQuestions,
        questionId,
        setQuestionId,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
