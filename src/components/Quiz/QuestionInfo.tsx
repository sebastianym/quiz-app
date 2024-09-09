"use client";
import { useQuiz } from "@/context/QuizContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Question } from "@/interfaces/Question";

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
    <section className="flex items-center justify-between">
      <div className="bg-black/10 m-5 p-5 flex flex-col justify-start items-center gap-2">
        <h1>Question {questionId + 1}</h1>
        {question?.state !== 3 ? (
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
        )}
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-3xl p-5">{question?.question}</h1>
        <div>
          {question?.answers &&
            question.answers.map((option: string, index: number) => (
              <div key={index}>
                <input
                  type="radio"
                  id={option}
                  name="option"
                  value={index + 1}
                  checked={userResponse === index + 1}
                  onChange={() => handleOptionChange(index + 1)}
                />
                <label className="text-lg m-5" htmlFor={option}>
                  {option}
                </label>
              </div>
            ))}
        </div>
        <div className="flex justify-between my-4">
          <button
            className="px-2 py-1 bg-slate-200"
            onClick={() => questionId > 0 && setQuestionId(questionId - 1)}
            disabled={questionId === 0}
          >
            Anterior
          </button>
          <button
            className="px-2 py-1 bg-slate-200"
            onClick={() =>
              questionId < (questions?.length ?? 0) - 1 &&
              setQuestionId(questionId + 1)
            }
            disabled={questionId === (questions?.length ?? 0) - 1}
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
}

export default QuestionInfo;
