"use client";
import { useQuiz } from "@/context/QuizContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Question } from "@/interfaces/Question";
import { Button } from "@nextui-org/button";

function QuestionInfo({ questionId }: { questionId: number }) {
  const { questions, setQuestionId } = useQuiz();
  const [question, setQuestion] = useState<Question | null>(null);
  const [userResponse, setUserResponse] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (questions) {
      setQuestion(questions[questionId]);
      setUserResponse(questions[questionId].userResponse || null);
    }
  }, [questionId, questions]);

  const handleOptionChange = (index: number) => {
    setUserResponse(index);
  };

  return (
    <section className="flex-col items-center justify-between h-full">
      <div className="bg-white rounded-md p-5 flex flex-col justify-start items-center gap-2 shadow-lg">
        <h1>Question {questionId + 1}</h1>
      </div>
      <div className="flex flex-col justify-center bg-white mt-2 rounded-md shadow-lg p-5">
        <h1 className="font-bold text-6xl p-10 text-center">
          {question?.question}
        </h1>
        <div>
          {question?.answers &&
            question.answers.map((option: string, index: number) => (
              <div key={index} className="mb-2">
                <input
                  type="radio"
                  id={option}
                  name="option"
                  value={index + 1}
                  checked={userResponse === index + 1}
                  onChange={() => handleOptionChange(index + 1)}
                />
                <label className="text-3xl m-5" htmlFor={option}>
                  {option}
                </label>
              </div>
            ))}
        </div>
        <div className="flex justify-between py-10">
          <Button
            className="py-2 mx-3 bg-[#6A5AE0] text-white font-medium text-lg rounded-md"
            onClick={() => questionId > 0 && setQuestionId(questionId - 1)}
            disabled={questionId === 0}
          >
            Anterior
          </Button>
          <Button
            className="py-2 mx-3 bg-[#6A5AE0] text-white font-medium text-lg rounded-md"
            onClick={() =>
              questionId < (questions?.length ?? 0) - 1 &&
              setQuestionId(questionId + 1)
            }
            disabled={questionId === (questions?.length ?? 0) - 1}
          >
            Siguiente
          </Button>
          {/* {question?.state !== 3 ? (
            <button
              onClick={() => {
                question && (question.state = 3);
              }}
              className="px-2 py-1 bg-slate-200"
            >
              Marcar
            </button>
          ) : (
            <button
              onClick={() => {
                userResponse === null
                  ? (question.state = 0)
                  : (question.state = 1);
              }}
              className="px-2 py-1 bg-slate-200"
            >
              Desmarcar
            </button>
          )} */}
        </div>
      </div>
    </section>
  );
}

export default QuestionInfo;
