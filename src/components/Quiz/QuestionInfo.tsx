"use client";
import { useQuiz } from "@/context/QuizContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Question } from "@/interfaces/Question";
import { Button } from "@nextui-org/button";
import { Clock, ChevronLeft, ChevronRight, Flag } from "lucide-react";

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
      <div className="bg-[#6A5AE0] rounded-t-md text-white p-5 flex flex-col justify-start items-center gap-2 shadow-lg">
        <div className="flex items-center space-x-2">
          <Clock className="h-5 w-5" />
          <span className="font-bold">60:00</span>
        </div>
        <p className="font-medium text-small">
          Question {questionId + 1} of {questions?.length}
        </p>
      </div>
      <div className="flex flex-col justify-center bg-white rounded-b-md shadow-lg p-5">
        <h1 className="font-bold text-2xl mb-4">{question?.question}</h1>
        <div>
          {question?.answers &&
            question.answers.map((option: string, index: number) => (
              <Button
                key={index}
                className="w-full justify-start border-medium my-2 text-lg text-left h-auto py-4 px-4 hover:bg-[#6A5AE0] hover:text-white"
              >
                {option}
              </Button>
            ))}
        </div>
        <div className="flex justify-between pt-10">
          <Button
            className="flex items-center space-x-2 border-medium py-3 font-semibold hover:bg-black/10 hover:cursor-pointer"
            onClick={() => questionId > 0 && setQuestionId(questionId - 1)}
            disabled={questionId === 0}
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>
          <Button className="flex items-center space-x-2 border-small py-3 font-semibold bg-white text-[#6A5AE0] border-[#6A5AE0] hover:bg-[#6A5AE0] hover:text-white">
            <Flag className="h-4 w-4" />
            <span>Mark Question</span>
          </Button>
          <Button
            className="flex items-center space-x-2 border-small py-3 font-semibold bg-[#6A5AE0] text-white hover:bg-[#5849c7] hover:cursor-pointer"
            onClick={() =>
              questionId < (questions?.length ?? 0) - 1 &&
              setQuestionId(questionId + 1)
            }
            disabled={questionId === (questions?.length ?? 0) - 1}
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
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
