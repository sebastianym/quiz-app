"use client";
import { useQuiz } from "@/context/QuizContext";
import QuestionInfo from "@/components/Quiz/QuestionInfo";
import { Button } from "@nextui-org/button";

function QuizPage() {
  const { questions, questionId, setQuestionId } = useQuiz();
  return (
    <main className="h-screen w-full flex justify-between items-center p-10">
      <div className="px-2 w-full">
        <QuestionInfo key={questionId} questionId={questionId} />
      </div>
      <aside className="bg-white rounded-md shadow-lg">
        <div className="bg-[#6A5AE0] text-white p-4 rounded-t-medium">
          <h3 className="font-bold text-center">Question Navigator</h3>
        </div>
        <div className="grid grid-cols-5 gap-2 p-4">
          {questions?.map((question, index) => (
            <Button
              key={question.id}
              className={`w-10 h-10 p-0 border-medium ${
                question.id === questionId
                  ? "bg-[#6A5AE0] text-white"
                  : "hover:bg-[#6A5AE0] hover:text-white"
              }`}
              onClick={() => setQuestionId(question.id)}
            >
              {question.id}
            </Button>
          ))}
        </div>
      </aside>
    </main>
  );
}

export default QuizPage;
