"use client";
import { useQuiz } from "@/context/QuizContext";
import QuestionInfo from "@/components/Quiz/QuestionInfo";
import { Button } from "@nextui-org/button";

function QuizPage() {
  const { questions, questionId, setQuestionId } = useQuiz();
  return (
    <main className="h-screen w-full flex justify-between bg-[#F3F3F7]">
      <div className="p-2 bg-transparent w-full h-full">
        <QuestionInfo key={questionId} questionId={questionId} />
      </div>
      <aside className="flex flex-col m-2 items-center p-5 bg-white rounded-md shadow-lg">
        <p className="font-semibold text-lg">Quiz Navigation</p>
        <div className="my-3">
          {questions?.map((question, index) => (
            <div key={question.id} className="flex gap-4 items-center">
              <Button
                isIconOnly
                color="warning"
                variant="faded"
                aria-label="Take a photo"
                className="px-3 pt-1 pb-3 border-b-3 border-black bg-black/20"
              >
                {index + 1}
              </Button>
            </div>
          ))}
        </div>
      </aside>
    </main>
  );
}

export default QuizPage;
