"use client";
import QuizCard from "@/components/Quiz/QuizCard";
import { useQuiz } from "@/context/QuizContext";

function Home() {
  const { name } = useQuiz();

  return (
    <main className="h-full w-full flex flex-col md:py-16 pt-10">
      <div className="md:mx-20 mx-5">
        <h1 className="md:text-4xl text-2xl font-bold">Welcome {name}! 😀</h1>
        <p className="md:text-xl text-lg mt-4">
          This is a quiz app where you can test your knowledge and programming
          skills.
        </p>
        <div className="mt-5">
          <h2 className="text-lg font-semibold">How does it work?</h2>
          <ul className="mt-2 list-disc pl-5">
            <li>
              <span className="font-bold">Choose your topic:</span> Browse our
              selection of predefined programming-related topics and select the
              one that interests you the most.
            </li>
            <li>
              <span className="font-bold">Take the quiz:</span> Answer a series
              of carefully designed questions to challenge your knowledge and
              understanding of the topic.
            </li>
            <li>
              <span className="font-bold">Get your score:</span> Upon
              completion, you will receive a score that will let you know your
              level of mastery on the topic.
            </li>
          </ul>
          <h3 className="text-lg font-semibold mt-5">Topics:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-center mt-5 gap-10">
            <QuizCard />
            <QuizCard />
            <QuizCard />
            <QuizCard />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
